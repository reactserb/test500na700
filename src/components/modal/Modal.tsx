'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import CustomCheckbox from './CustomCheckbox'
import SubmitButton from './SubmitButton'
import { InputMask } from '@react-input/mask'

interface FormErrors {
	name?: string
	phone?: string
	email?: string
	agree?: string
}

export default function Modal({ onClose }: { onClose: () => void }) {
	const [formData, setFormData] = useState({
		name: '',
		phone: '',
		email: '',
	})
	const [agree, setAgree] = useState(false)
	const [errors, setErrors] = useState<FormErrors>({})

	useEffect(() => {
		document.body.classList.add('modal-open')
		document.body.style.overflow = 'hidden'

		return () => {
			document.body.classList.remove('modal-open')
			document.body.style.overflow = ''
		}
	}, [])

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { id, value } = e.target

		const trimmedValue = value.trim()
		setFormData(prev => ({ ...prev, [id]: trimmedValue }))

		if (errors[id as keyof FormErrors]) {
			setErrors(prev => ({ ...prev, [id]: null }))
		}
	}

	const validate = (): boolean => {
		const newErrors: FormErrors = {}

		if (!formData.name.trim()) newErrors.name = 'Имя обязательно'

		const phoneDigits = formData.phone.replace(/\D/g, '')
		if (!phoneDigits || phoneDigits.length !== 11) {
			formData.phone = ''
			newErrors.phone = 'Некорректный номер телефона'
		}

		if (!formData.email.trim()) newErrors.email = 'E-mail обязателен'
		else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			formData.email = ''
			newErrors.email = 'Некорректный e-mail'
		}

		if (!agree)
			newErrors.agree = 'Необходимо согласие на обработку персональных данных'

		setErrors(newErrors)
		return Object.keys(newErrors).length === 0
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		if (validate()) {
			console.log(formData)
			onClose()
		}
	}

	useEffect(() => {
		const handleEsc = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onClose()
		}
		window.addEventListener('keydown', handleEsc)
		return () => window.removeEventListener('keydown', handleEsc)
	}, [onClose])

	return (
		<>
			<div
				className='fixed inset-0 bg-black/50 z-40 transition-opacity'
				onClick={onClose}
			/>
			<div
				className='
        fixed z-50 transition-all duration-300 sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-[520px] sm:h-[427px] left-0 top-0 w-full h-full sm:rounded-[20px] bg-white px-5 sm:px-10 pt-20 sm:pt-10 flex flex-col text-[#0f0f17]'
			>
				<div className='flex justify-between items-center mb-5 sm:mb-10'>
					<h3 className='sm:text-[24px] uppercase'>Связаться с нами</h3>
					<button
						onClick={onClose}
						className='relative w-[30px] h-[30px] sm:w-[30px] sm:h-[30px] cursor-pointer'
					>
						<Image
							src='/cancel-button.svg'
							alt='Кнопка отмены'
							fill
							className='object-contain'
						/>
					</button>
				</div>
				<form onSubmit={handleSubmit} autoComplete='off'>
					<div className='flex flex-col gap-y-[10px] mb-[15px]'>
						<input
							type='text'
							id='name'
							value={formData.name}
							onChange={handleChange}
							className={`w-full max-h-[51px] border-1 rounded-[10px] p-[15px] ${
								errors.name ? 'border-red-500' : ''
							}`}
							placeholder={`${errors.name ? `${errors.name}` : 'Имя'}`}
						/>
						<InputMask
							mask='+7 (___) ___-__-__'
							replacement={{ _: /\d/ }}
							type='text'
							id='phone'
							value={formData.phone}
							onChange={handleChange}
							className={`w-full max-h-[51px] border-1 rounded-[10px] p-[15px] ${
								errors.phone ? 'border-red-500' : ''
							}`}
							placeholder={`${errors.phone ? `${errors.phone}` : 'Телефон'}`}
							onFocus={e => {
								if (e.target.value === '+7') {
									e.target.setSelectionRange(2, 2)
								}
							}}
						/>
						<input
							type='text'
							id='email'
							value={formData.email}
							onChange={handleChange}
							className={`w-full max-h-[51px] border-1 rounded-[10px] p-[15px] ${
								errors.email ? 'border-red-500' : ''
							}`}
							placeholder={`${errors.email ? `${errors.email}` : 'E-mail'}`}
						/>
					</div>
					<CustomCheckbox
						checked={agree}
						onChange={setAgree}
						className={`mb-[30px] ${
							errors.agree && !agree ? 'text-red-700' : 'text-[#0f0f17]'
						}`}
					/>

					<SubmitButton />
				</form>
			</div>
		</>
	)
}
