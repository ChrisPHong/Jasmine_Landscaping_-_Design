import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SplashPage from './components/SplashPage';
import AboutUs from './components/AboutUs';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer'

function App() {
  return (
    <>
    <NavBar/>
      <Routes>

        <Route path='/' element={<SplashPage />} />
        <Route path='/aboutus' element={<AboutUs />} />

      </Routes>
      <Footer/>
    </>
  );
}

export default App;
