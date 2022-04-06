import { React } from 'react'
import { Card } from 'react-bootstrap'
import Home from './Home'
import Videos from '../components/Videos'

const Welcome = ({name, setName, logged, setLogged, attempt, setAttempt, audience, setAudience}) => {
    console.log(logged, attempt)
    return (
        <>
            <Home name={name} setName={setName} logged={logged} setLogged={setLogged} attempt={attempt} setAttempt={setAttempt} audience={audience} setAudience={setAudience}></Home>
            <Card className="welcomeCard">
                <Card.Body className="welcomeBody">Welcome {name}!</Card.Body>
            </Card>
            <Videos audience={audience}></Videos>
        </>
    )
}

export default Welcome;