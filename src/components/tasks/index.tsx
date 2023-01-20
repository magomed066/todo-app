import React, { FC, useState } from 'react'
import cn from 'classnames'
import styles from './index.module.scss'
import Empty from '../empty'
import TaskForm from '../task-form'

const Tasks: FC<{}> = () => {
	const [adding, setAdding] = useState<boolean>(false)

	const toggleForm = () => setAdding((prev) => !prev)

	return (
		<div className={styles.tasks}>
			{!adding ? (
				<div className={styles['tasks__add']} onClick={toggleForm}>
					<span className={styles['plus']}>+</span>
					<span>Add task</span>
				</div>
			) : null}

			{adding ? <TaskForm cancel={toggleForm} /> : null}
			<Empty description="By default, tasks added here will be due today. Click + to add a task" />
		</div>
	)
}

export default Tasks
