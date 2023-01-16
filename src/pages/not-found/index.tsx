import { TbError404 } from 'react-icons/tb'
import { IoIosArrowRoundBack } from 'react-icons/io'
import styles from './index.module.scss'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
	const navigate = useNavigate()

	return (
		<div className={styles['not-found']}>
			<div className={styles.icon}>
				<TbError404 />
			</div>

			<p className={styles.text}>Ooops... This page is not found!</p>
			<button className={styles.btn} onClick={() => navigate(-1)}>
				Go back <IoIosArrowRoundBack />
			</button>
		</div>
	)
}

export default NotFound
