import { React } from 'react'
import { Card } from 'react-bootstrap'
import Home from './Home'
import Videos from '../components/Videos'

const Students = ({name, setName, logged, setLogged, attempt, setAttempt, audience, setAudience}) => {
    return (
        <>
            <Home name={name} setName={setName} logged={logged} setLogged={setLogged} attempt={attempt} setAttempt={setAttempt} audience={audience} setAudience={setAudience}></Home>
            <Card class="welcomeCard">
                <Card.Body class="welcomeBody">Welcome {audience}!</Card.Body>
            </Card>
            <Videos audience={audience}></Videos>
        </>
    )
}

export default Students;