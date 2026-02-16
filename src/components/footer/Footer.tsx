import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
	return (
		<footer className='bg-gradient-to-b from-[#FB8627] to-[#F5BEF6] w-full h-[431px] sm:h-[248px] flex items-center justify-center mt-20 xl:mt-[150px]'>
			<div className='flex flex-col items-center gap-[30px] sm:flex-row sm:items-center sm:justify-between sm:w-full sm:gap-y-0'>
				<Link
					href='/'
					className='relative w-[120px] h-[144px] sm:w-[103px] sm:h-[124px] sm:ml-10'
				>
					<Image
						src='/logo-white.svg'
						alt='Лого'
						fill
						className='object-contain'
					/>
				</Link>
				<div className='flex-1 flex justify-center lg:mr-[164px]'>
					<div className='flex flex-col items-center text-center'>
						<h3 className='sm:text-[24px] uppercase w-[191px] sm:w-auto line-clamp-3 lg:line-clamp-1'>
							Креативное агентство 500na700
						</h3>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
