import { Route, Routes } from 'react-router-dom'
import MyNavbar from './components/Navbar'
import Home from './components/Home'
import Projects from './components/Projects'
import Github from './components/Github'

const App = () => {
	return (
		<div className="App">
			<MyNavbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/github" element={<Github />} />
			</Routes>
		</div>
	)
}

export default App
