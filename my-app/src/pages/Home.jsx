import {React, useState} from 'react'
import NavContainer from '../components/NavContainer'

const Home = (login) => {
    const [logged, setLogged] = useState(login);
    
    return (
        <div className='homeContainer'>
            <NavContainer login={login}></NavContainer>
        </div>
    )
   
}

export default Home;