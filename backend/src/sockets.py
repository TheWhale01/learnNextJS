import sys
import socketio

sio_server = socketio.AsyncServer(
    async_mode='asgi',
    cors_allowed_origins=[]
)

sio_app = socketio.ASGIApp(
    socketio_server = sio_server,
    socketio_path='',
)

users: dict = {}

@sio_server.event
async def connect(sid, environ):
    print(f"New user connected: {sid}", file=sys.stderr) 

@sio_server.event
async def disconnect(sid):
    # Remove user from users dict
    users.pop(sid)

@sio_server.event
async def login(sid, username: str):
    users.update({sid: username})
    await sio_server.emit('logged_in', room=sid)

@sio_server.event
async def message(sid, message: str):
    for k, v in users.items():
        if k != sid:
            await sio_server.emit('message', {'sender': users[sid], 'msg': message}, room=k)
