import { React } from 'react'
import { Container, Nav, Navbar, NavDropdown, Offcanvas} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Home from './Home'

const VideoPlayer = ({currCourse, courses}) => {
    console.log(currCourse, courses)
    return (
        <Navbar bg="light" expand={false}>
            <Container fluid>
                {/* <FontAwesomeIcon icon="fa-solid fa-arrow-left" /> */}
                <Navbar.Brand href="#">{`${courses[currCourse].title}`}</Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                 id="offcanvasNavbar"
                 aria-labelledby="offcanvasNavbarLabel"
                 placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">{`${courses[currCourse].title}`}</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}

export default VideoPlayer;