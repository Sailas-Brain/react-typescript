import React, { useRef } from 'react'

interface ITodoFormProps {
	onAdd(title: string): void
}

export const TodoForm: React.FC<ITodoFormProps> = (props) => {
	const ref = useRef<HTMLInputElement>(null)

	const keyPressHandler = (event: React.KeyboardEvent) => {
		if(event.key === 'Enter') {
			props.onAdd(ref.current!.value)
			ref.current!.value = ''
		}
	}

	return (
		<div className="input-field mt40">
			<input
				ref={ref}
				type="text" 
				id="title"  
				placeholder="Введите название дела"
				onKeyPress={keyPressHandler}
			/>
			<label htmlFor="title" className="active">Введите название дела</label>
		</div>
	)
}