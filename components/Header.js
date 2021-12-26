import Image from 'next/image';
import { useMoralis } from 'react-moralis';
import Avatar from './Avatar';
import ChangeUsername from './ChangeUsername';

function Header(){
	const { user } = useMoralis();
	return (
		<div className='text-pink-500 bg-black sticky top-0 z-50 shadow-sm border-b-2 border-pink-700'>
			<div className='grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center'>
				<div className='relative h-24 w-24 mx-auto hidden lg:inline-grid'>
					<Image
						className='rounded-full '
						src='https://links.papareact.com/3pi'
						layout='fill'
						objectFit='cover'
					/>
				</div>
				<div className='text-left lg:text-center col-span-4'>
					<div className='relative w-48 h-48 lg:mx-auto border-8 rounded-full border-pink-500'>
						<Avatar logoutOnPress={false} />
					</div>
					<h1 className=' text-3xl justify-center'>
						Welcome to ABBAS metaverse
					</h1>
					<h2 className='text-5xl font-bold truncate'>
						{user.getUsername()}
					</h2>

					<ChangeUsername />
				</div>
			</div>
		</div>
	);
}

export default Header;
