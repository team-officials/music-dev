import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Removed Router import (not needed)
import Footer from './components/navbar/Footer';
import HomePage from './components/navbar/HomePage';
import NavBar from './components/navbar/NavBar';
import MyView from './components/navbar/MyView';
import Login from '../src/components/navbar/Login';

function App() {
  return (
    <BrowserRouter>
      
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/myView" element={<MyView />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
