import { News } from '@/types/news'
import Image from 'next/image'
import Link from 'next/link'

const NewsItem = ({ info }: { info: News }) => {
	const { id, img, title, text, date } = info

	return (
		<Link
			href={`/news/${id}`}
			className='group flex flex-col gap-y-5 w-full min-h-[374px] sm:w-110 sm:min-h-115'
		>
			<div className='relative w-full h-[218px] sm:w-110 sm:h-75 sm:mx-auto xl:mx-0'>
				<Image
					src={img}
					alt={`Картинка к новости ${id}`}
					fill
					sizes='(max-width: 1280px) 100vw, 33vw'
					className='object-cover group-hover:rounded-[20px]'
				/>
			</div>
			<div className='pl-[10px] pr-[20px] sm:px-0'>
				<h3 className='mb-[10px] sm:text-[24px] group-hover:bg-gradient-to-b group-hover:from-[#FB8627] group-hover:to-[#F5BEF6] group-hover:bg-clip-text group-hover:text-transparent line-clamp-2'>
					{title}
				</h3>
				<p className='text-[16px] leading-[130%] tracking-normal opacity-50 mb-5 line-clamp-3'>
					{text}
				</p>
				<p className='text-[16px] leading-[130%] tracking-normal'>{date}</p>
			</div>
		</Link>
	)
}
export default NewsItem
