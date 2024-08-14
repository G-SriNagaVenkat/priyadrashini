import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import LoginRegister from './components/LoginRegister';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="login-register">
        <LoginRegister setUser={setUser} />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
