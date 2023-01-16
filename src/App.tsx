import { Content, Header } from './components'
import { SidebarContext } from './contexts'

const App = () => {
	return (
		<div className="app">
			<SidebarContext.SidebarProvider>
				<Header />
				<Content />
			</SidebarContext.SidebarProvider>
		</div>
	)
}

export default App
