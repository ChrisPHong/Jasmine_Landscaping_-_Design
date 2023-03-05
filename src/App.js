import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SplashPage from './components/SplashPage';
import AboutUs from './components/AboutUs';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
  <NavBar/>
      <Routes>

        <Route path='/' element={<SplashPage />} />
        <Route path='/aboutus' element={<AboutUs />} />

      </Routes>
    </>
  );
}

export default App;
