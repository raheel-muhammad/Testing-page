import React from "react";

const Approval = () => {
	const steps = [
		{ step: "Creation", person: "LEGEYL Mylene", date: "26/07/2021 17:37:55" },
		{ step: "Draft", person: "LEGEYL Mylene", date: "28/07/2021 19:19:14" },
		{
			step: "Draft (Publication)",
			person: "DURET Julien",
			date: "28/07/2021 19:34:14",
		},
		{ step: "Step 3", person: "PETITJEAN Romain", date: "29/07/2021 08:52:46" },
		{ step: "Step 6", person: "GENTIL Guillaume", date: "29/07/2021 08:54:33" },
		{ step: "Step 6", person: "GENTIL Guillaume", date: "29/07/2021 08:54:33" },
		{ step: "Step 9", person: "MICHEL Jean-Paul", date: "30/08/2021 10:48:17" },
		{
			step: "Step 10",
			person: "VON BOROWSKI Ignacio",
			date: "17/09/2021 09:50:20",
		},
	];

	return (
		<>
			<div className='bg-[#E6E6E6] p-5 rounded-lg shadow-md flex flex-col  lg:w-[40%] w-full'>
				<h2 className='text-blue-500 text-3xl font-bold text-center mb-4'>
					BP
				</h2>

				{/* Headings Section */}
				<div className='flex flex-col md:flex-row justify-around w-full pb-5 whitespace-nowrap lg:gap-[20px] gap-[0px]'>
					<div className='flex flex-col items-center md:items-center md:text-center mb-4 md:mb-0'>
						<p className='text-16 font-bold text-[#1B1B1B] '>Figures in k€</p>
					</div>
					<div className='md:flex flex-col items-center md:items-center md:text-center mb-4 md:mb-0 hidden lg:pl-[20px] pl-[0px]'>
						<p className='text-16 font-bold text-[#1B1B1B] '>
							Total without NVAS
						</p>
					</div>
				</div>

				{/* Values Section */}
				<div className='flex flex-col md:flex-row gap-5'>
					{/* Left Column */}
					<div className='w-full md:w-1/2 flex flex-row gap-5'>
						<p className=' text-[#1B1B1B] self-center text-nowrap -rotate-90 w-4'>
							BP Period
						</p>
						<div className='flex flex-col p-2 rounded-md w-full bg-[#CFCFCF]'>
							<div className='mt-4'>
								<div className='grid grid-cols-1  text-[#1B1B1B] font-medium'>
									<p>Volume</p>
									<p>Total Sales</p>
									<p>Product Sales</p>
									<p className=' pt-4'>VCM</p>
									<p className=' pb-2'>GM</p>
									<p className=' font-bold'>OI IFRS 15</p>
								</div>
							</div>
							<div className='mt-4'>
								<div className='grid grid-cols-1  text-[#1B1B1B] font-medium'>
									<p>Upfront</p>
									<p>IRR</p>
									<p>Roce</p>
									<p>Payback from SOP</p>
									<p>Product Sales</p>
								</div>
							</div>
						</div>
					</div>

					<div className='flex flex-col items-center md:items-end md:text-right mb-4 md:mb-0 md:hidden'>
						<p className='text-16 font-bold text-[#1B1B1B]'>
							Total without NVAS
						</p>
					</div>
					{/* Right Column */}
					<div className='flex flex-col p-2 rounded-md w-full md:w-1/2 bg-[#CFCFCF]'>
						<div className='mt-4'>
							<div className='grid grid-cols-1  text-left px-2 text-[#1B1B1B] font-medium'>
								<p>1 259 781</p>
								<p>81 977</p>
								<p>62 306</p>
								<div className='flex justify-between '>
									<p className=' pt-4'>16880</p>
									<p className=' pt-4'>27.1%</p>
								</div>
								<div className='flex justify-between '>
									<p className=' pb-2'>4908</p>
									<p className=' pb-2'>7.9%</p>
								</div>
								<div className='flex justify-between '>
									<p className=' font-bold'>958</p>
									<p className=' font-bold'>1.2%</p>
								</div>
							</div>
						</div>

						{/* Total Values Section with Heading */}
						<div className='mt-4 text-[#1B1B1B] font-medium'>
							<div className='text-left px-2'>
								<div className='grid grid-cols-1 '>
									<div className='flex justify-between'>
										<p>-4 060</p>
										<p>-32.6%</p>
									</div>
									<p>7.0%</p>
									<p>6.8%</p>
									<p>4.4 years</p>
									<p>7.6 years</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='bg-[#F3F3F3] p-6 rounded-lg shadow-md w-full'>
				<h2 className='text-blue-500 text-3xl font-bold text-center mb-4'>
					RFQ Approval
				</h2>
				<p className='text-black font-semibold mb-8 md:text-left text-center '>
					Validation Summary
				</p>
				<div className='grid grid-cols-1 md:grid-cols-4  items-center pt-10 pl-5'>
					{steps.map((step, index) => (
						<div key={index} className='relative flex items-center mb-4'>
							{/* Green card */}
							<div className='bg-green-300 p-4 rounded-lg shadow-md flex flex-col items-start w-full text-black -ml-5'>
								<p className='font-bold'>{step.step}</p>
								<p className='font-medium'>{step.person}</p>
								<p className='text-sm text-gray-600 italic'>{step.date}</p>
							</div>

							{/* Add arrow icon outside each green card */}
							{index < steps.length - 1 && (
								<div className=' -ml-5'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='6em'
										height='6em'
										viewBox='0 0 16 16'
									>
										<path
											fill='black'
											d='m5.157 13.069l4.611-4.685a.546.546 0 0 0 0-.768L5.158 2.93a.55.55 0 0 1 0-.771a.53.53 0 0 1 .759 0l4.61 4.684a1.65 1.65 0 0 1 0 2.312l-4.61 4.684a.53.53 0 0 1-.76 0a.55.55 0 0 1 0-.771'
											transform='scale(0.7, 1)'
										/>
									</svg>
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Approval;
