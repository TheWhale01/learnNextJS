import { io, Socket } from 'socket.io-client'

export default class SocketService {
	// Attributes
	static socket: Socket | null = null;
	static logged_in: boolean = false;

	// Methods
	static get getSocket(): Socket {
		if (!this.socket)
			throw new Error('The socket has not been initialized');
		return this.socket;
	}
	static connect(endpoint: string): void {
		this.socket = io(endpoint);
		this.socket.on('connect', () => {
			console.log("Connect to socket.io server");
		});
	}
}
