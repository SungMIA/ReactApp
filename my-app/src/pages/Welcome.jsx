import { React } from 'react'
import { Card } from 'react-bootstrap'
import Home from './Home'

const Welcome = ({name, setName, logged, setLogged, attempt, setAttempt, audience, setAudience}) => {
    console.log(logged, attempt)
    return (
        <>
            <Home name={name} setName={setName} logged={logged} setLogged={setLogged} attempt={attempt} setAttempt={setAttempt} audience={audience} setAudience={setAudience}></Home>
            <Card class="welcomeCard">
                <Card.Body class="welcomeBody">Welcome {name}!</Card.Body>
            </Card>
        </>
    )
}

export default Welcome;