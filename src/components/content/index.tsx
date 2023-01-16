import { Outlet } from 'react-router-dom'
import Sidebar from '../sidebar'
import styles from './index.module.scss'

const Content = () => {
	return (
		<section className={styles.content}>
			<Sidebar />

			<div className={styles.main}>
				<div className={styles.container}>
					<Outlet />
				</div>
			</div>
		</section>
	)
}

export default Content
