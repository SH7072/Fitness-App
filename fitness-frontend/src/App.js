import React from 'react';
import {Route, Routes } from 'react-router-dom';
import './App.css';
import { Box } from '@mui/material';
import Navbar from './Components/Layouts/Navbar';
import Home from './Components/Pages/Home';
import Footer from './Components/Layouts/Footer'

const App=()=> {
  return (
    <Box >
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/dashboard" element={<h1>Dashboard</h1>} />
      </Routes>
      <Footer/>
    </Box>
  );
}

export default App;
