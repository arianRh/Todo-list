export function InputCard() {
	return (
		<div className='flex flex-row place-content-center'>
			<div className='input-card'>
				<div className='flex flex-row'>
					<div className='basis-4/5'>
						<input
							type='text'
							className='input'
							placeholder='Enter todo list :'
						></input>
					</div>
					<div className='basis-5/12 grid  justify-items-end'>
						<button className='button'>Add</button>
					</div>
				</div>
			</div>
		</div>
	);
}
