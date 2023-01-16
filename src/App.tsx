import { BrowserRouter } from 'react-router-dom'
import Routes from './pages/routes'

const App = () => {
	return (
		<div className="app">
			<BrowserRouter>
				<Routes />
			</BrowserRouter>
		</div>
	)
}

export default App
