import { useMoralis } from 'react-moralis';

function ChangeUsername(){
	const { setUserData, isUserUpdating, userError, user } = useMoralis();

	const setUsername = () => {
		const username = prompt(
			`Your current Username is ${user.getUsername()} Enter your new Username`,
		);
		if (!username) return;
		setUserData({
			username,
		});
	};

	return (
		<div className='absolute top-5 right-5'>
			<button
				onClick={setUsername}
				disabled={isUserUpdating}
				className='hover:text-pink-700'
			>
				Change your Username
			</button>
		</div>
	);
}

export default ChangeUsername;
