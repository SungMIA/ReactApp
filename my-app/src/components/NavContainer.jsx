import { React, useState } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import Login from '../pages/Login'

const NavContainer = () => {

    const [logged, setLogged] = useState(false)

    const checkLogin = () => {
        if(logged === false) {
            return (
                <>
                    <Nav.Link href='/login'>Login</Nav.Link>
                </>
            )
        }
        if(logged === true) {
            // return (
            //     <div>
            //         <Nav.Link href='/teachers'>Teachers</Nav.Link>
            //         <Nav.Link href='/students'>Students</Nav.Link>
            //         <Nav.Link href='/suppliers'>Suppliers</Nav.Link>
            //         <Nav.Link href='/'>Log Out</Nav.Link>
            //     </div>
            // )
        }
    }

    return (
    <>
        <div className="navBarContainer">
            <Navbar>
                    <Navbar.Brand href="/">MY SITE</Navbar.Brand>
                    {
                        checkLogin()
                    }
            </Navbar>
        </div>
    </>
    )
}

export default NavContainer;