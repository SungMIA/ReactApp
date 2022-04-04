
import Home from './pages/Home'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" component={Home}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
