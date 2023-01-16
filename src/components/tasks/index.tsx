import React, { FC } from 'react'
import cn from 'classnames'
import styles from './index.module.scss'
import Empty from '../empty'

const Tasks: FC<{}> = () => {
	return (
		<div className={styles.tasks}>
			<Empty description="By default, tasks added here will be due today. Click + to add a task" />
		</div>
	)
}

export default Tasks
