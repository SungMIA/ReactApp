import './App.css'
import Home from './pages/Home'
import Teachers from './pages/Teachers'
import Welcome from './pages/Welcome.jsx'
import { React, useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavContainer from './components/NavContainer'

function App() {
  // console.log(window.location.href)
  // let path = window.location.href
  // let index = path.lastIndexOf('/')
  // let email = path.slice(index+1, -1)
  const [name, setName] = useState();
  const [logged, setLogged] = useState(false)
  const [attempt, setAttempt] = useState(false)
  const [audience, setAudience] = useState()

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home name={name} setName={setName} logged={logged} setLogged={setLogged} attempt={attempt} setAttempt={setAttempt} audience={audience} setAudience={setAudience}></Home>}/>
            <Route exact path="/user/:name" element={<Welcome name={name} setName={setName} logged={logged} setLogged={setLogged} attempt={attempt} setAttempt={setAttempt} audience={audience} setAudience={setAudience}></Welcome>}></Route>
              <Route exact path="/user/:name/teachers" element={<Teachers></Teachers>}></Route>
              <Route exact path="/user/:name/students" element={<Teachers></Teachers>}></Route>
              <Route exact path="/user/:name/suppliers" element={<Teachers></Teachers>}></Route>
              <Route exact path="/" element={<Teachers></Teachers>}></Route>

      </Routes>
    </BrowserRouter>
  );
}


export default App;
