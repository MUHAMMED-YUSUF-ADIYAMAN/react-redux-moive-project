import React from "react";
import { Link } from "react-router-dom";

import {
	Navbar,
	Nav,
	NavDropdown,
	Container,
	Form,
	FormControl,
	Button
} from "react-bootstrap";

function NavBar() {
	return (
		<>
			<Navbar bg="light" expand="lg">
				<Container fluid>
					<Navbar.Brand href="#">Movie App</Navbar.Brand>
					<Navbar.Toggle id="navmenu" aria-controls="navbarScroll" />
					<Navbar.Collapse id="navbarScroll">
						<Nav
							className="me-auto my-2 my-lg-0"
							style={{ maxHeight: "100px" }}
							navbarScroll>
							<Nav.Link href="#action1">Home</Nav.Link>

							<NavDropdown
								title="Movies"
								id="navbarScrollingDropdown">
									
                  <NavDropdown.Item>
									<Link to={`/movies/16`}>
									Adventure
									</Link>
								</NavDropdown.Item>
               
								
								<NavDropdown.Item href="#action4">
									Animation
								</NavDropdown.Item>
								<NavDropdown.Item href="#action4">
									Comedy
								</NavDropdown.Item>
								<NavDropdown.Item href="#action4">
									Crime
								</NavDropdown.Item>
								<NavDropdown.Item href="#action4">
									Drama
								</NavDropdown.Item>
								<NavDropdown.Item href="#action4">
									Family
								</NavDropdown.Item>
								<NavDropdown.Item href="#action4">
									Fantasy
								</NavDropdown.Item>
								<NavDropdown.Item href="#action4">
									History
								</NavDropdown.Item>
								<NavDropdown.Item href="#action4">
									Horror
								</NavDropdown.Item>
								<NavDropdown.Item href="#action4">
									Music
								</NavDropdown.Item>
								<NavDropdown.Item href="#action4">
									Mystery
								</NavDropdown.Item>
								<NavDropdown.Item href="#action4">
									Romance
								</NavDropdown.Item>
								<NavDropdown.Item href="#action4">
									Science Fiction
								</NavDropdown.Item>
								<NavDropdown.Item href="#action4">
									Tv Movie
								</NavDropdown.Item>
								<NavDropdown.Item href="#action4">
									Thriller
								</NavDropdown.Item>
								<NavDropdown.Item href="#action4">
									War
								</NavDropdown.Item>
								<NavDropdown.Item href="#action4">
									Western
								</NavDropdown.Item>
							</NavDropdown>
							<Nav.Link href="#action2">Actors</Nav.Link>
							<Nav.Link href="#action2">Bookmarks</Nav.Link>
						</Nav>
						<Form className="d-flex">
							<FormControl
								type="search"
								placeholder="Search"
								className="me-2"
								aria-label="Search"
							/>
							<Button variant="outline-success">Search</Button>
						</Form>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}

export default NavBar;

