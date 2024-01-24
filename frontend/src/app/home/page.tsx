'use client'
import Button from "../components/Button";
import SocketService from '../services/socket';
import MessageInterface from '../interfaces/Message.interface';
import { useState } from 'react';
import Message from '../components/Message';
import UserService from '../services/user';

function addMessage(old_list: MessageInterface[], new_msg: MessageInterface, setMessages: any): void {
	let new_list: MessageInterface[] = old_list.concat(new_msg);
	setMessages(new_list);
}

const Home = () => {
	if (!SocketService.logged_in) {
		return (
			<p>You are not registered.</p>
		);
	}
	const [message, setMessage] = useState('');
	const [messages, setMessages] = useState([]);
	SocketService.getSocket.on('message', (data: MessageInterface) => { console.log(data); addMessage(messages, data, setMessages); });
	function handleSend(): void {
		if (!message)
			return ;
		let new_msg = {'sender': UserService.getUsername, 'msg': message};
		addMessage(messages, new_msg, setMessages);
		SocketService.getSocket.emit('message', message);
	}
	return (
		<div className="chat_container">
			<h1>Chat</h1>
			<ul>
				{messages.map((message: MessageInterface) =><Message key={messages.indexOf(message)} sender={message.sender} msg={message.msg} />)}
			</ul>
			<input onChange={(event) => setMessage(event.target.value) } />
			<Button name="Send !" callback={handleSend}></Button>
		</div>
	);
}

export default Home;
