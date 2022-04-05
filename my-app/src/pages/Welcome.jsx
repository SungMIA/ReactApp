import { React } from 'react'
import { Card } from 'react-bootstrap'
import Home from './Home'

const Welcome = ({name}) => {
    return (
        <>
            <Home></Home>
            <Card>
                <Card.Body>Welcome {name}!</Card.Body>
            </Card>
        </>
    )
}

export default Welcome;