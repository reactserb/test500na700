import Image from 'next/image'
import Link from 'next/link'
import FormButton from './FormButton'

const Header = () => {
	return (
		<header className='sticky top-0 z-30 bg-[#0f0f17] flex justify-between items-center gap-[10px] pt-5 p-[10px] xl:p-10 w-full h-[83px] xl:h-[119px] border-b border-b-white/30 mb-10 xl:mb-15'>
			<Link href='/' className='relative w-[44px] h-[53px] xl:w-[70px] xl:h-21'>
				<Image src='/logo.svg' alt='Лого' fill className='object-contain' />
			</Link>
			<FormButton />
		</header>
	)
}

export default Header
