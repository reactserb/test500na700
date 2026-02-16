'use client'

import { useState } from 'react'
import Modal from '../modal/Modal'

export default function FormButton() {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<button
				onClick={() => setIsOpen(true)}
				className='group inline-block rounded-[41px] p-[1px] bg-gradient-to-b from-[#FB8627] to-[#F5BEF6] cursor-pointer'
			>
				<span className='block rounded-[40px] bg-[#0F0F17] px-5 py-3 font-medium text-[16px] leading-[130%] tracking-normal transition-colors duration-200 group-hover:bg-transparent'>
					Связаться с нами
				</span>
			</button>

			{isOpen && <Modal onClose={() => setIsOpen(false)} />}
		</>
	)
}
