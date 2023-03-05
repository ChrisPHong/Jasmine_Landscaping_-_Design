import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SplashPage from './components/SplashPage';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
  <NavBar></NavBar>
      <Routes>

        <Route path='/' element={<SplashPage />} />

      </Routes>
    </>
  );
}

export default App;
