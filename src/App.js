import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import About from './pages/About'
import './App.css';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        {/* Route for the HomePage */}
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<About/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
