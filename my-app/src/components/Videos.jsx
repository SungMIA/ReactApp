import { React } from 'react'
import { Card } from 'react-bootstrap'
import Home from '../pages/Home'

const Videos = ({audience}) => {
    return (
        <>
            {audience ? <h6>{audience}'s Videos</h6>
            : <h6>Your Videos</h6>}
        </>
    )
}

export default Videos;