import NewsBlock from '../components/news/NewsBlock'

export default function Home() {
	return (
		<div>
			<h1 className='text-[24px] xl:text-[40px] pl-[10px] xl:pl-10 mb-[30px] xl:mb-10'>
				Новости
			</h1>
			<NewsBlock />
		</div>
	)
}
