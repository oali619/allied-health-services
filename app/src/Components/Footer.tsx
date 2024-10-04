import { logo } from '~/images';

export default function Footer() {
	return (
		<div className='relative bg-gray-900 text-gray-100 -mx-8 -mb-8'>
			<div className='max-w-screen-xl mx-auto py-20 lg:py-24'>
				<div className='flex items-center justify-center flex-col px-8'>
					<div className='flex items-center justify-center md:justify-start'>
						<img className='w-8' src={logo} alt='Allied Health Services Logo' />
						<h5 className='ml-2 text-2xl font-black tracking-wider'>
							Allied Health Services
						</h5>
					</div>
					<div className='mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row'>
						<a
							className='border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4'
							href='/'
						>
							Home
						</a>
						<a
							className='border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4'
							href='/services'
						>
							Services
						</a>
						<a
							className='border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4'
							href='/referral'
						>
							Referral
						</a>
						<a
							className='border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4'
							href='/Team'
						>
							Team
						</a>
						<a
							className='border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4'
							href='/contact'
						>
							Contact
						</a>
					</div>
					<div className='text-center mt-10 font-medium tracking-wide text-sm text-gray-600'>
						&copy; Copyright 2024, Allied Health Services LLC All Rights
						Reserved.
					</div>
				</div>
			</div>
		</div>
	);
}
