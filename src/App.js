import './App.css';
import Navbar from './components/Navbar';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Contact from './components/pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element = {<Home/>}/>
        <Route path='/about' element = {<About/>}/>
        <Route path='/services' element = {<Services/>}/>
        <Route path='/products' element = {<Products/>}/>
        <Route path='/contact' element = {<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;