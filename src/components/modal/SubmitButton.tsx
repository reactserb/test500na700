const SubmitButton = () => {
	return (
		<button
			type='submit'
			className='group inline-block rounded-[41px] p-[1px] bg-gradient-to-b from-[#FB8627] to-[#F5BEF6] cursor-pointer'
		>
			<span className='block rounded-[40px] bg-white px-5 py-3 font-medium text-[16px] leading-[130%] tracking-normal transition-colors duration-200 group-hover:bg-transparent'>
				Отправить
			</span>
		</button>
	)
}
export default SubmitButton
