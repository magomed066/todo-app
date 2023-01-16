import React, { FC } from 'react'
import styles from './index.module.scss'

interface IProps {
	description: string
	src?: string
}

const Empty: FC<IProps> = ({
	src = 'https://d3ptyyxy2at9ui.cloudfront.net/assets/images/7bf32068f9c7d9914018a8b16be80ffb.jpg',
	description,
}) => {
	return (
		<div className={styles['empty']}>
			<div className={styles['content']}>
				<img src={src} alt="photo" />

				<div className={styles['desc']}>{description}</div>
			</div>
		</div>
	)
}

export default Empty
