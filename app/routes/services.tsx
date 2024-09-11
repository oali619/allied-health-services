import { useState } from 'react';
import { Link } from '@remix-run/react';
import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
} from '@headlessui/react';
import { hssServiceTypes } from '../src/constants';

export default function Services() {
	const hssServiceCategories = [
		{ name: 'Housing Search' },
		{ name: 'Financial Assistance' },
		{ name: 'Eviction Protection' },
		{ name: 'Tenant Education' },
		{ name: 'And More' },
	];

	const [disclosureIsOpen, setDisclosureIsOpen] = useState(false);

	return (
		<div className='overflow-hidden  py-24 sm:py-32'>
			<div
				aria-hidden='true'
				className='hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl'
			>
				<div
					style={{
						clipPath:
							'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
					}}
					className='aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20'
				/>
			</div>
			<div className='mx-auto max-w-7xl px-6 lg:px-8'>
				<div className='mx-auto max-w-2xl lg:mx-0'>
					<h2 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
						What is Housing Stabilization Services?
					</h2>
					<p className='mt-6 text-lg leading-8 text-gray-600'>
						Housing Stabilization Services is a new Minnesota Medical Assistance
						benefit to help people with disabilities, including mental illness
						and substance use disorder, and seniors find and keep housing.
					</p>
				</div>
				<div className='mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none'>
					<div className='grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-gray-600 sm:grid-cols-2 md:flex lg:gap-x-10'>
						{hssServiceCategories.map((service, index) => (
							<div key={service.name}>
								{service.name}{' '}
								{index !== hssServiceCategories.length - 1 && (
									<span aria-hidden='true'>&rarr;</span>
								)}
							</div>
						))}
					</div>
          {/* TODO: need to do something here label or something or redesign this */}
          <p className='text-4xl font-bold mt-16 sm:mt-20 mb-4 tracking-tight text-gray-900 text-center'>TLDR;</p>
					<div className='grid grid-cols-1 gap-8 sm:grid-cols-4'>
						{hssServiceTypes.map((hssServiceType) => (
							<div key={hssServiceType.name}>
								<Disclosure as='div' className='pb-6'>
									<DisclosureButton className='group flex items-center justify-between gap-2 font-semibold text-gray-700'>
										{hssServiceType.name}
										{/* TODO: fix the onClick functionality changing all + to - */}
                    {/* clicking the name opens accordian but doesn't change +/- */}
										{disclosureIsOpen ? (
											<svg
												xmlns='http://www.w3.org/2000/svg'
												fill='none'
												viewBox='0 0 24 24'
												strokeWidth='1.5'
												stroke='currentColor'
												className='size-6'
												onClick={() => setDisclosureIsOpen(!disclosureIsOpen)}
											>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													d='M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
												/>
											</svg>
										) : (
											<svg
												xmlns='http://www.w3.org/2000/svg'
												fill='none'
												viewBox='0 0 24 24'
												strokeWidth='1.5'
												stroke='currentColor'
												className='size-6'
												onClick={() => setDisclosureIsOpen(!disclosureIsOpen)}
											>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													d='M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
												/>
											</svg>
										)}
									</DisclosureButton>
									<DisclosurePanel className='tracking-tight text-gray-500'>
										{hssServiceType.value}
									</DisclosurePanel>
								</Disclosure>
							</div>
						))}
					</div>
				</div>
				<div className='mx-auto max-w-2xl lg:mx-0 py-6'>
					<h2 className='text-xl font-bold tracking-tight text-gray-900 mb-4'>
						Know anyone who can benefit from this service?
					</h2>
					<Link
						to='/referral'
						className='bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded flex w-[147px]'
					>
						Refer Client
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth='1.5'
							stroke='currentColor'
							className='size-6 ml-[2px]'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
							/>
						</svg>
					</Link>
				</div>
			</div>
		</div>
	);
}
