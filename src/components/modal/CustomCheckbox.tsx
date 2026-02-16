const CheckboxIcons = {
	checked: (
		<svg
			width='18'
			height='18'
			viewBox='0 0 18 18'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<rect width='18' height='18' fill='url(#paint0_linear_5402_597)' />
			<path
				d='M7.1627 13.5002L2.8877 9.22519L3.95645 8.15645L7.1627 11.3627L14.0439 4.48145L15.1127 5.5502L7.1627 13.5002Z'
				fill='white'
			/>
			<defs>
				<linearGradient
					id='paint0_linear_5402_597'
					x1='9'
					y1='0'
					x2='9'
					y2='18'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#FB8627' />
					<stop offset='1' stopColor='#F5BEF6' />
				</linearGradient>
			</defs>
		</svg>
	),
	unchecked: (
		<svg
			width='18'
			height='18'
			viewBox='0 0 18 18'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<rect
				x='0.5'
				y='0.5'
				width='17'
				height='17'
				stroke='url(#paint0_linear_5402_593)'
			/>
			<defs>
				<linearGradient
					id='paint0_linear_5402_593'
					x1='9'
					y1='0'
					x2='9'
					y2='18'
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#FB8627' />
					<stop offset='1' stopColor='#F5BEF6' />
				</linearGradient>
			</defs>
		</svg>
	),
}

export default function CustomCheckbox({
	checked,
	onChange,
	className = '',
}: {
	checked: boolean
	onChange: (checked: boolean) => void
	className?: string
}) {
	return (
		<label className={`flex items-center cursor-pointer gap-2.5 ${className}`}>
			<div
				className='w-5 h-5 flex items-center justify-center'
				onClick={e => {
					e.preventDefault()
					onChange(!checked)
				}}
			>
				{checked ? CheckboxIcons.checked : CheckboxIcons.unchecked}
			</div>
			<input
				type='checkbox'
				checked={checked}
				onChange={e => onChange(e.target.checked)}
				className='hidden'
			/>
			<span className='font-medium text-[12px] uppercase leading-[1.3] tracking-normal opacity-50'>
				Я согласен (-а) на обработку персональных данных
			</span>
		</label>
	)
}
