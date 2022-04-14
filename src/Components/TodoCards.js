import cardImg from "../img/Mathematics-pana.png";

export function TodoCards() {
	return (
		<div className='flex flex-row place-content-center'>
			<div className='todo-card'>
				<div className='flex justify-center font-semibold'>
					<h1 className='card-title'>Todo item</h1>
				</div>
				<div className='flex justify-center font-semibold'>
					<p className='font-light text-xs mt-1 text-gray-400'>2022/3/13</p>
				</div>
				<div className='basis-1/3 sm:hidden justify-items-center grid'>
					<img
						className='shadow-inner rounded-full shadow-inner w-8/12 border-2 mt-5 shadow-slate-100'
						src={cardImg}
					></img>
				</div>
				<div className='flex font-semibold'>
					<div className='basis-1/3  sm:flex hidden'>
						<img
							className='shadow-inner shadow-inner w-full shadow-slate-100'
							src={cardImg}
						></img>
					</div>
					<div className='w-full sm:basis-2/3 flex items-center'>
						<h1 className='text-md sm:mt-0 mt-7 sm:text-justify text-center font-normal text-gray-600'>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
							perferendis facilis dignissimos iure beatae eum omnis
							exercitationem consequuntur nam pariatur?
						</h1>
					</div>
				</div>
				<div className='grid grid-cols-4 place-items-center mt-6'>
					<div className='basis-1/4 justify-items-center '>
						<p className='text-center'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-7 w-7 active:h-9 active:w-9 active:text-gray-500 text-gray-400 active:-mt-3'
								viewBox='0 0 20 20'
								fill='currentColor'
							>
								<path
									fillRule='evenodd'
									d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
									clipRule='evenodd'
								/>
							</svg>
						</p>
					</div>
					<div className='basis-1/4'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-7 w-7 active:h-9 active:w-9 active:text-green-600 text-green-500 active:-mt-3'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
							strokeWidth={2}
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'
							/>
						</svg>
					</div>
					<div className='basis-1/4'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-7 w-7 active:h-9 active:w-9 active:-mt-3 text-red-500 active:text-red-600'
							viewBox='0 0 20 20'
							fill='currentColor'
						>
							<path
								fillRule='evenodd'
								d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
								clipRule='evenodd'
							/>
						</svg>
					</div>
					<div className='basis-1/4'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-7 w-7 active:h-9 active:w-9 active:-mt-3 text-slate-600/75 active:text-slate-700'
							viewBox='0 0 20 20'
							fill='currentColor'
						>
							<path d='M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z' />
						</svg>
					</div>
				</div>
			</div>
		</div>
	);
}
