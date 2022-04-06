import './App.css'
import Home from './pages/Home'
import Teachers from './pages/Teachers'
import Students from './pages/Students'
import Suppliers from './pages/Suppliers'
import Welcome from './pages/Welcome.jsx'
import { React, useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavContainer from './components/NavContainer'

function App() {
  const [name, setName] = useState();
  const [logged, setLogged] = useState(false)
  const [attempt, setAttempt] = useState(false)
  const [audience, setAudience] = useState()

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home name={name} setName={setName} logged={logged} setLogged={setLogged} attempt={attempt} setAttempt={setAttempt} audience={audience} setAudience={setAudience}></Home>}/>
            <Route exact path="/user/:name" element={<Welcome name={name} setName={setName} logged={logged} setLogged={setLogged} attempt={attempt} setAttempt={setAttempt} audience={audience} setAudience={setAudience}></Welcome>}/>
              <Route exact path="/user/:name/teachers" element={<Teachers name={name} setName={setName} logged={logged} setLogged={setLogged} attempt={attempt} setAttempt={setAttempt} audience={audience} setAudience={setAudience}></Teachers>}/>
              
              <Route exact path="/user/:name/students" element={<Students name={name} setName={setName} logged={logged} setLogged={setLogged} attempt={attempt} setAttempt={setAttempt} audience={audience} setAudience={setAudience}></Students>}/>
              <Route exact path="/user/:name/suppliers" element={<Suppliers name={name} setName={setName} logged={logged} setLogged={setLogged} attempt={attempt} setAttempt={setAttempt} audience={audience} setAudience={setAudience}></Suppliers>}/>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
