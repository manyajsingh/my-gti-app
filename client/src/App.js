import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import SubmitForm from './components/SubmitForm';
import './App.css'; // Ensure to import the CSS file

function App() {
  return (
    <div className="App-header">
      <nav className="App-nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/submit">Submit Data</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/submit" element={<SubmitForm />} />
      </Routes>
    </div>
  );
}

export default App;
