import { News } from '@/types/news'
import NewsItem from './NewsItem'

const NewsBlock = async () => {
	const baseUrl = typeof window === 'undefined' ? 'http://localhost:3000' : ''

	const res = await fetch(`${baseUrl}/news.json`, {
		cache: 'no-store',
	})
	const news: News[] = await res.json()

	return (
		<div className='flex flex-wrap gap-x-5 gap-y-12 sm:gap-y-10 w-full max-w-[1360px] sm:px-5 xl:px-0 mx-auto mb-12 sm:mb-16'>
			{news.map(item => (
				<NewsItem key={item.id} info={item} />
			))}
		</div>
	)
}
export default NewsBlock
