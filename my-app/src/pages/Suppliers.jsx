import { React } from 'react'
import { Card } from 'react-bootstrap'
import Home from './Home'

const Suppliers = ({name, setName, logged, setLogged, attempt, setAttempt, audience, setAudience}) => {
    return (
        <>
            <Home name={name} setName={setName} logged={logged} setLogged={setLogged} attempt={attempt} setAttempt={setAttempt} audience={audience} setAudience={setAudience}></Home>
            <Card>
                <Card.Body>Welcome {audience}!</Card.Body>
            </Card>
        </>
    )
}

export default Suppliers;