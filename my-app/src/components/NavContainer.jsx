import { React, useState } from 'react'
import { Nav, Container, Form, Button} from 'react-bootstrap'
import { useNavigate, Link } from 'react-router-dom'

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
                            setAudience(undefined)
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
            <Nav>
                {logged ? (<Link onClick={() => (setAttempt(true), setLogged(true), setAudience(undefined))} to={`/user/${name}/`}>MY SITE</Link>) 
                : <Link onClick={() => (setAttempt(false), setLogged(false))} to={`/`}>MY SITE</Link> }
                {attempt ? console.log("attempt is not false"): <button onClick={() => {setAttempt(true)}}>Login</button>}
                {logged ? <>
                    <Link onClick={() => setAudience("Teachers")} to={`/user/${name}/Teachers`}>Teachers</Link>
                    <Link onClick={() => setAudience("Students")} to={`/user/${name}/Students`}>Students</Link>
                    <Link onClick={() => setAudience("Suppliers")} to={`/user/${name}/Suppliers`}>Suppliers</Link>
                    <Link onClick={() => (setLogged(false), setAttempt(false))} to='/'>Log Out</Link>
                </> : console.log("logged is not true")}
            </Nav>
            { login() }
        </Container>
    </>
    )
}

export default NavContainer;