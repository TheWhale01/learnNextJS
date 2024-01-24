'use client'
import Button from './components/Button';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import SocketService from './services/socket';
import UserService from './services/user';

export default function Page() {
	const router = useRouter();
	const [username, setUsername] = useState('');
	const [socket_state, setSocket] = useState(() => {
		SocketService.connect('http://localhost:3030');	
		SocketService.getSocket.on('logged_in', () => {
			SocketService.logged_in = true;
			router.push('/home');
		});
	});
	function handleLogin(): void {
		if (!username) {
			console.log("No username has been submitted");
			return ;
		}
		SocketService.getSocket.emit('login', username);
		UserService.setUser({'username': username});
	};
	return (
		<div className='login_container'>
			<input onChange={(event) => setUsername(event.target.value)}/>
			<Button name="Login" callback={handleLogin} />
		</div>
	);
};
