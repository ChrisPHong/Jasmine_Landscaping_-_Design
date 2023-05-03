import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SplashPage from './components/SplashPage';
import AboutUs from './components/AboutUs';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer'
import Contact from './components/Contact';
import Photos from './components/Photos';
import AboutSplash from './components/SplashAbout'


function App() {
  return (
    <>
    <NavBar/>
      <Routes>

        <Route path='/' element={<SplashPage />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/aboutus' element={<AboutSplash />} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/photos' element={<Photos/>} />


      </Routes>
      {/* <Footer/> */}
    </>
  );
}

export default App;
