import { Container, Nav, Navbar } from 'react-bootstrap'

const MyNavbar = () => {
	return (
		<Navbar
			className="bg-secondary"
			fixed="top"
			collapseOnSelect
			expand="sm"
		>
			<Container>
				<Navbar.Brand href="/">DrJP99</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-na" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="/">Projects</Nav.Link>
						<Nav.Link href="/">My GitHub</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default MyNavbar
