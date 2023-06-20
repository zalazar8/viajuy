import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Hotels from './pages/Hotels';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />}/>
        <Route path='/servicios' element={<Services />} />
        <Route path='/hoteles' element={<Hotels />} />
        <Route path='/registro' element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
