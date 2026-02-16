import Footer from '@/components/footer/Footer'

export default function NewsLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className='flex flex-col flex-1'>
			<main className='flex-1'>{children}</main>
			<Footer />
		</div>
	)
}
