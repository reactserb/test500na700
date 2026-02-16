import { News } from '@/types/news'
import { notFound } from 'next/navigation'
import Image from 'next/image'

export default async function NewsPage({
	params,
}: {
	params: Promise<{ id: string }>
}) {
	const { id } = await params

	const res = await fetch('http://localhost:3000/news.json/', {
		// next: { revalidate: 3600 },
	})
	const allNews: News[] = await res.json()

	const news = allNews.find(item => item.id.toString() === id)

	if (!news) {
		notFound()
	}

	const { img, title, subtitle, text, date } = news

	return (
		<article className='flex flex-col xl:flex-row xl:mt-[18px] sm:ml-5 xl:ml-10 xl:gap-x-5'>
			<div className='relative w-[320px] h-[232px] sm:w-[500px] sm:h-[332px] xl:h-[320px] xl:w-[440px] mb-8'>
				<Image
					src={img}
					alt={title}
					fill
					sizes='(max-width: 1280px) 320px, 440px'
					className='object-cover'
				/>
			</div>
			<div className='px-[10px] xl:px-0 xl:w-[496px]'>
				<h2 className='xl:text-[40px] mb-[10px] xl:mb-5'>{title}</h2>
				<p className='text-[16px] leading-[130%] tracking-normal opacity-50 mb-[30px] xl:mb-10'>
					{date}
				</p>
				<h3 className='mb-[10px] xl:mb-5'>{subtitle}</h3>
				<p className='text-[16px] leading-[130%] tracking-normal'>{text}</p>
			</div>
		</article>
	)
}
