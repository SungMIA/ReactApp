import {React} from 'react'
import { Navbar, Nav } from 'react-bootstrap'

const NavContainer = (login) => {

    const checkLogin = () => {
        if(login === false) {
            return (
                <Nav.Link href='/login'>Login</Nav.Link>
            )
        }
        if(login === true) {
            return (
                <div>
                    <Nav.Link href='/teachers'>Teachers</Nav.Link>
                    <Nav.Link href='/students'>Students</Nav.Link>
                    <Nav.Link href='/suppliers'>Suppliers</Nav.Link>
                    <Nav.Link href='/'>Log Out</Nav.Link>
                </div>
            )
        }
    }

    return (
        <div className="navBarContainer">
            <Navbar>
                    <Navbar.Brand href="/">MY SITE</Navbar.Brand>
                    {
                        checkLogin()
                    }
                    <Navbar.Text>

                    </Navbar.Text>
            </Navbar>
        </div>
    )
}

export default NavContainer;