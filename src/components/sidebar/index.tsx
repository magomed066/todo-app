import React, { useContext } from 'react'
import { useState } from 'react'
import {
	FaInbox,
	FaChevronDown,
	FaCalendar,
	FaRegCalendarAlt,
	FaRegCalendar,
} from 'react-icons/fa'
import cn from 'classnames'
import styles from './index.module.scss'
import { SidebarContext } from '../../contexts'

const Sidebar = () => {
	const [activeProjects, setActiveProjects] = useState(false)
	const { opened } = useContext(SidebarContext.SidebarContext)

	const toggleProjects = () => setActiveProjects((prev) => !prev)

	return (
		<div className={cn(styles.sidebar, { [styles['opened']]: opened })}>
			<ul className={styles['sidebar__generic']}>
				<li className={styles['sidebar__generic-item']}>
					<FaInbox /> <span>Inbox</span>
				</li>
				<li className={styles['sidebar__generic-item']}>
					<FaRegCalendar /> <span>Today</span>
				</li>
				<li className={styles['sidebar__generic-item']}>
					<FaRegCalendarAlt />
					<span>Next 7 days</span>
				</li>
			</ul>
			<div className={styles['sidebar__middle']}>
				<div className={styles['header']}>
					<h2>Projects</h2>
					<div className={styles['middle__actions']}>
						<span className={styles['middle__actions-add']}>+</span>
						<span
							className={cn(styles['middle__actions-toggler'], {
								[styles['active']]: activeProjects,
							})}
							onClick={toggleProjects}
						>
							<FaChevronDown />
						</span>
					</div>
				</div>

				<ul
					className={cn(styles['sidebar__projects'], {
						[styles['active']]: activeProjects,
					})}
				>
					Projects will be here
				</ul>
			</div>
		</div>
	)
}

export default Sidebar
