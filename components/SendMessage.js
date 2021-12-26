import { useState } from 'react';
import { useMoralis } from 'react-moralis';

function SendMessage({ endOfMessagesRef }){
	const { user, Moralis } = useMoralis();
	const [
		message,
		setMessage,
	] = useState('');
	const handleSendMessage = (e) => {
		e.preventDefault();
		if (!message) return;
		const Messages = Moralis.Object.extend('Messages');
		const messages = new Messages();

		messages
			.save({
				message    : message,
				username   : user.getUsername(),
				ethAddress : user.get('ethAddress'),
			})
			.then(
				(message) => {},
				(error) => {
					console.log(error);
				},
			);
		endOfMessagesRef.current.scrollIntoView({ behavior: 'smooth' });
		setMessage('');
	};
	return (
		<form
			onSubmit={handleSendMessage}
			className='flex fixed bottom-10 bg-black opacity-80 border-4 border-blue-400 px-6 py-4 w-11/12 rounded-full max-w-2xl shadow-xl'
		>
			<input
				className='flex-grow text-white bg-transparent outline-none '
				type='text'
				placeholder={`Type your message ${user.getUsername()}`}
				value={message}
				onChange={(e) => setMessage(e.target.value)}
			/>
			<button type='submit' className='text-pink-500 ml-3'>
				Send Message
			</button>
		</form>
	);
}

export default SendMessage;
