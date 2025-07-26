import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllHomepage from './assets/Componets/AllHomepage/AllHomepage';
import Navigation from './assets/Componets/AllHomepage/Navigation/Navigation';
import About from './assets/Componets/About/About';
import Services from './assets/Componets/Services/Services';

function App() {


  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<AllHomepage />} />
          <Route path="/about" element={<About />} />  {/* Must exist */}
          <Route path='/services' element={<Services/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
