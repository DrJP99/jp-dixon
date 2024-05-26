import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MyNavbar = () => {
	return (
		<Navbar
			className="bg-secondary"
			// fixed="top"
			collapseOnSelect
			expand="sm"
		>
			<Container>
				<Navbar.Brand as={Link} to="/">
					DrJP99
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-na" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto justify-content-end">
						<Nav.Item>
							<Nav.Link as={Link} to="/projects">
								Projects
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link as={Link} to="/github">
								My GitHub
							</Nav.Link>
						</Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default MyNavbar
