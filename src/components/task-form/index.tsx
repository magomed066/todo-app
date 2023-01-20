import React, { FC } from 'react'
import styles from './index.module.scss'
import cn from 'classnames'

interface IProps {
	cancel: () => void
}

const TaskForm: FC<IProps> = ({ cancel }) => {
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<div className={styles.body}>
				<div className={styles['body__inputs']}>
					<input type="text" placeholder="Task name" className={styles.input} />
					<input
						type="text"
						placeholder="Description"
						className={styles.input}
					/>
				</div>
			</div>

			<div className="d-flex align-items-center gap-12 justify-end">
				<button
					type="button"
					className={cn(styles['btn'], styles['btn-cancel'])}
					onClick={cancel}
				>
					Cancel
				</button>
				<button type="submit" className={cn(styles['btn'], styles['btn-add'])}>
					Add Task
				</button>
			</div>
		</form>
	)
}

export default TaskForm
