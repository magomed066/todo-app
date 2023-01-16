import { Route, Routes as RRoutes } from 'react-router-dom'
import { Header } from '../components'
import { SidebarContext } from '../contexts'
import Inbox from './inbox'
import Main from './main'
import NotFound from './not-found'
import Today from './today'
import Week from './week'

const Routes = () => {
	return (
		<SidebarContext.SidebarProvider>
			<Header />
			<RRoutes>
				<Route path="/" element={<Main />}>
					<Route path="inbox" element={<Inbox />} />
					<Route path="today" element={<Today />} />
					<Route path="week" element={<Week />} />
				</Route>

				<Route path="*" element={<NotFound />} />
			</RRoutes>
		</SidebarContext.SidebarProvider>
	)
}

export default Routes
