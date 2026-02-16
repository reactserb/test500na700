import Footer from '@/components/footer/Footer'

export default function NewsLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className='flex flex-col flex-1 min-h-0'>
			<main className='flex-1'>{children}</main>
			<Footer />
		</div>
	)
}
