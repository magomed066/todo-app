import React from 'react'
import Header from '../header'
import Sidebar from '../sidebar'
import styles from './index.module.scss'

const Content = () => {
	return (
		<section className={styles.content}>
			<Sidebar />
		</section>
	)
}

export default Content
