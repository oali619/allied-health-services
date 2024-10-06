/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import { Link } from '@remix-run/react';
import { ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { hssServiceCategories, hssServiceTypes } from '../src/constants';

export default function Services() {
	const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);
	const toggleQuestion = (questionIndex) => {
		if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
		else setActiveQuestionIndex(questionIndex);
	};

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
					<div className='mx-auto py-20 lg:py-24'>
						<div className='flex flex-col items-center'>
							<div>
								<h2 className='text-4xl sm:text-5xl font-black tracking-wide text-center w-full'>
									FAQs
								</h2>
							</div>
							<dl className='mt-4 w-3/5 relative'>
								{hssServiceTypes.map((serviceType, index) => (
									<div
										key={index}
										onClick={() => {
											toggleQuestion(index);
										}}
										className='group select-none mt-5 px-8 sm:px-10 py-5 sm:py-4 rounded-lg text-gray-800 hover:text-gray-900 bg-gray-200 hover:bg-gray-300 transition duration-300'
									>
										<dt className='flex justify-between items-center cursor-pointer'>
											<span className='text-lg lg:text-xl font-semibold'>
												{serviceType.name}
											</span>

											<ChevronUpDownIcon className='w-6 h-6' />
										</dt>
										{activeQuestionIndex === index && (
											<dd className='pointer-events-none text-sm sm:text-base leading-relaxed'>
												{serviceType.value}
											</dd>
										)}
									</div>
								))}
							</dl>
						</div>
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
