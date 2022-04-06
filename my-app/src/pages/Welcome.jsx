import { React } from 'react'
import { Card } from 'react-bootstrap'
import Home from './Home'
import Videos from '../components/Videos'

const Welcome = ({name, setName, logged, setLogged, attempt, setAttempt, audience, setAudience, courses, setCourses, currCourse, setCurrCourse}) => {
    console.log(logged, attempt)
    return (
        <>
            <Home name={name} setName={setName} logged={logged} setLogged={setLogged} attempt={attempt} setAttempt={setAttempt} audience={audience} setAudience={setAudience}></Home>
            <Card className="welcomeCard">
                <Card.Body className="welcomeBody">Welcome {name}!</Card.Body>
            </Card>
            <Videos name={name} audience={audience} courses={courses} setCourses={setCourses} currCourse={currCourse} setCurrCourse={setCurrCourse}></Videos>
        </>
    )
}

export default Welcome;