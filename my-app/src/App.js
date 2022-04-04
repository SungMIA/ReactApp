import './App.css'
import Home from './pages/Home.jsx'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home></Home>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
