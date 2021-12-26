import { useMoralis } from 'react-moralis';
import Avatar from './Avatar';

import TimeAgo from 'timeago-react';

function Message({ message }){
	const { user } = useMoralis();

	const isUserMessage = user.get('ethAddress') === message.get('ethAddress');
	return (
		<div
			className={`flex my-10 space-x-2 relative ${
				isUserMessage ? 'justify-end' :
				'justify-start'}`}
		>
			<div
				className={`relative h-8 w-8 items-center ml-2 ${isUserMessage &&
					'order-last'}`}
			>
				<Avatar username={message.get('username')} />
			</div>
			<div
				className={`flex space-x-4 p-3 rounded-lg ${
					isUserMessage ? 'rounded-br-none bg-pink-300' :
					'rounded-bl-none bg-blue-400'}`}
			>
				<p>{message.get('message')}</p>
			</div>

			<TimeAgo
				className={`text[10px] italic text-gray-400 ${isUserMessage &&
					'order-first pr-1'}`}
				datetime={message.createdAt}
			/>

			<p
				className={`absolute -bottom-5 text-xs ${
					isUserMessage ? 'text-pink-300' :
					'text-blue-400'}`}
			>
				{message.get('username')}
			</p>
		</div>
	);
}

export default Message;
