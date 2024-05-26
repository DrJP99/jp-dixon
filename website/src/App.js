import { Button } from 'react-bootstrap'
import MyNavbar from './components/Navbar'

const App = () => {
	return (
		<div className="App">
			<MyNavbar />
			<header className="App-header">
				<h1>Hello</h1>
				<Button variant="danger">Hello</Button>
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	)
}

export default App
