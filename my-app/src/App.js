import './App.css'
import Home from './pages/Home.jsx'
import Welcome from './pages/Welcome.jsx'
import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  console.log(window.location.href)
  let path = window.location.href
  let index = path.lastIndexOf('/')
  let email = path.slice(index+1, -1)
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home></Home>}/>
          <Route exact path="/user/:name" element={<Welcome name={email}></Welcome>}></Route>
            {/* <Route exact path="/user/:name/teachers" element={<Teachers></Teachers>} */}
      </Routes>
    </BrowserRouter>
  );
}


export default App;
