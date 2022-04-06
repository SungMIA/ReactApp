import { React } from 'react'
import { Card } from 'react-bootstrap'
import Home from './Home'
import Videos from '../components/Videos'

const Teachers = ({name, setName, logged, setLogged, attempt, setAttempt, audience, setAudience}) => {
    return (
        <>
            <Home name={name} setName={setName} logged={logged} setLogged={setLogged} attempt={attempt} setAttempt={setAttempt} audience={audience} setAudience={setAudience}></Home>
            <Card className="welcomeCard">
                <Card.Body className="welcomeBody">Welcome {audience}!</Card.Body>
            </Card>
            <Videos audience={audience}></Videos>
        </>
    )
}

export default Teachers;