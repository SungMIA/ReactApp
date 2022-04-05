import { React, useState } from 'react'
import { Nav, Container, Form, Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Home } from '../pages/Home'
import logged from '../pages/Home'
import Welcome from '../pages/Welcome.jsx'

const NavContainer = ({name, setName, logged, setLogged, attempt, setAttempt, audience, setAudience}) => {

    const navigate = useNavigate()

    const routeChange = (i) => {
        let path = "/user/" + name
        navigate(path)
    }

    const login = () => {
        if(attempt === true && logged === false) {
            return (
                <>
                    <div className="loginContainer">
                        <Form className="login" onSubmit={(e) => (
                            e.preventDefault(),
                            routeChange(1),
                            setLogged(true),
                            setAttempt(false)
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
    }
    return (
    <> 
        <Container>
            <Nav className="flex-direction-row justify-content-space-between flex-grow-1">
                <Nav.Link className="flex-direction=-" href="/">MY SITE</Nav.Link>
                <Form className="flex-direction-row">
                    {attempt ? console.log("attempt is not false"): <button onClick={() => {setAttempt(true)}}>Login</button>}
                    {logged ? <div>
                        <Nav.Link href={name+"/teachers"} onClick={setAudience("Teachers")}>Teachers</Nav.Link>
                        <Nav.Link href={name+"/students"} onClick={setAudience("Students")}>Students</Nav.Link>
                        <Nav.Link href={name+"/suppliers"} onClick={setAudience("Suppliers")}>Suppliers</Nav.Link>
                        <Nav.Link href='/'>Log Out</Nav.Link>
                    </div> : console.log("logged is not true")}
                </Form>
            </Nav>
            { login() }
        </Container>
    </>
    )
}

export default NavContainer;