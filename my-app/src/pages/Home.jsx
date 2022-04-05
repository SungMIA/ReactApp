import { React, useState } from 'react'
import NavContainer from '../components/NavContainer.jsx'

const Home = ({name, setName, logged, setLogged, attempt, setAttempt, audience, setAudience}) => {
    return (
        <>
            <div className='homeContainer'>
                <NavContainer name={name} setName={setName} logged={logged} setLogged={setLogged} attempt={attempt} setAttempt={setAttempt} audience={audience} setAudience={setAudience}></NavContainer>
            </div>
        </>
    )
   
}

export default Home