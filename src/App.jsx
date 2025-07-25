import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllHomepage from './assets/Componets/AllHomepage/AllHomepage';
import Navigation from './assets/Componets/AllHomepage/Navigation/Navigation';

function App() {


  return (
    <>
      <BrowserRouter>
      <Navigation/>
        <Routes>
          <Route path="/" element={<AllHomepage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
