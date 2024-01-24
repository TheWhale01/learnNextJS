'use client'
import MessageInterface from '../interfaces/Message.interface';

const Message = ({sender, msg}: MessageInterface, {key}) => {
	return (
		<li key={key}>
			<div className='message'>
				<span>{sender}: </span>
				<span>{msg}</span>
			</div>
		</li>
	);
};

export default Message;
