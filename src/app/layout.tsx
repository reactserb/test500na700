import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/header/Header'

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin', 'cyrillic'],
	display: 'swap',
})

export const metadata: Metadata = {
	title: '500na700',
	description: 'Тестовое задание 500na700',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body className={`${inter.variable} flex min-h-screen flex-col`}>
				<Header />
				<main className='flex-1'>{children}</main>
			</body>
		</html>
	)
}
