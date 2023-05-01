
import './App.css';
import Navbar from './Components/Navbar';
import Jumbotron from './Components/Jumbotron';
import Footer from './Components/Footer';
import Home from './Home';
import About from './About';
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="App">

        <Jumbotron />
        <Navbar />

        <div className="content">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
            </Routes>
        </div>

      <Footer />
    </div>
    </Router>
  );
}

export default App;

