import React, { useContext } from 'react'
import { useState } from 'react'
import {
	FaInbox,
	FaChevronDown,
	FaRegCalendarAlt,
	FaRegCalendar,
} from 'react-icons/fa'
import cn from 'classnames'
import styles from './index.module.scss'
import { SidebarContext } from '../../contexts'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'

const menu = [
	{
		icon: <FaInbox />,
		text: 'Inbox',
		path: 'inbox',
		key: 0,
	},
	{
		icon: <FaRegCalendar />,
		text: 'Today',
		path: 'today',
		key: 1,
	},
	{
		icon: <FaRegCalendarAlt />,
		text: 'Next 7 days',
		path: 'week',
		key: 2,
	},
]

const Sidebar = () => {
	const [activeProjects, setActiveProjects] = useState(false)
	const { opened } = useContext(SidebarContext.SidebarContext)
	const [query, setQuery] = useState()
	const history = useLocation()
	const navigate = useNavigate()

	const toggleProjects = () => setActiveProjects((prev) => !prev)

	return (
		<div className={cn(styles.sidebar, { [styles['opened']]: opened })}>
			<ul className={styles['sidebar__generic']}>
				{menu.map((item) => (
					<NavLink to={`/${item.path}`}>
						{({ isActive }) => (
							<li
								className={cn(styles['sidebar__generic-item'], {
									[styles['active']]: isActive,
								})}
								key={item.path}
							>
								{item.icon} <span>{item.text}</span>
							</li>
						)}
					</NavLink>
				))}
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
