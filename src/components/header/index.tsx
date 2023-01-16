import styles from './index.module.scss'
import { FaPizzaSlice } from 'react-icons/fa'
import { AiOutlineMenu } from 'react-icons/ai'
import cn from 'classnames'
import { useContext } from 'react'
import { SidebarContext } from '../../contexts'

const Header = () => {
	const { toggleSidebar } = useContext(SidebarContext.SidebarContext)

	return (
		<header className={styles.header} data-testid="header">
			<div className={styles.logo} onClick={toggleSidebar}>
				<AiOutlineMenu />
			</div>
			<nav className={styles.nav}>
				<div className={styles.settings}>
					<ul className={styles['settings__list']}>
						<li
							className={cn(
								styles['settings__add'],
								styles['settings__list-item'],
							)}
						>
							+
						</li>
						<li className={styles['settings__list-item']}>
							<FaPizzaSlice />
						</li>
					</ul>
				</div>
			</nav>
		</header>
	)
}

export default Header
