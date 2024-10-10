import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Ensure these are imported
import Footer from './components/navbar/Footer';
import HomePage from './components/navbar/HomePage';
import NavBar from './components/navbar/NavBar';
import MyView from './components/navbar/MyView';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<MyView />} />
       
      </Routes>
      <Footer />
      
    </BrowserRouter>
  );
}

export default App;
