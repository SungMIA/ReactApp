import { React, useState } from 'react'
import { Nav, Container, Form, Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Welcome from '../pages/Welcome.jsx'

const NavContainer = () => {

    const [logged, setLogged] = useState(false)
    const [attempt, setAttempt] = useState(false)
    const [name, setName] = useState()
    const navigate = useNavigate()

    let path = window.location.href
    let index = path.lastIndexOf('/')
    let user = path.slice(index-4, index-1)
    console.log(path)

    if(path === "user") {
        console.log(path)
        setLogged(true)
    }

    const routeChange = () => {
        let path = "/user/" + name
        navigate(path)
    }

    const handleChange = (e) => {
        setLogged(e.target.checked)
        console.log(logged)
    }

    const checkLogin = () => {
        if(attempt === true) {
            return (
                <>
                    <div className="loginContainer">
                        <Form className="login" onSubmit={(e) => (
                            e.preventDefault(),
                            routeChange()
                        )}>
                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" onChange={(e) => setName(e.target.value)}/>
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </>
            )
        }
        if(logged === true) {
            return (
                <>
                    <div>
                        <Nav.Link href='/teachers'>Teachers</Nav.Link>
                        <Nav.Link href='/students'>Students</Nav.Link>
                        <Nav.Link href='/suppliers'>Suppliers</Nav.Link>
                        <Nav.Link href='/'>Log Out</Nav.Link>
                    </div>
                </>
            )
        }
    }

    return (
    <> 
        <Container>
            <Nav className="flex-direction-row justify-content-space-between flex-grow-1">
                <Nav.Link className="flex-direction=-" href="/">MY SITE</Nav.Link>
                <Form className="flex-direction-row">
                    {attempt ? console.log("attempt is true") : <button onClick={() => {setAttempt(true)}}>Login</button>}
                </Form>
            </Nav>
            { checkLogin() }
        </Container>
    </>
    )
}

export default NavContainer;