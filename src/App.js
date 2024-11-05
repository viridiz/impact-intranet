// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import './App.css';

import HomePage from './pages/HomePage';
import UnitsPage from './pages/UnitsPage';
import SomethingPage from './pages/SomethingPage';
import LoginPage from './pages/LoginPage';
import UnitDetailPage from './pages/UnitDetailPage';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/units" element={<UnitsPage />} />
            <Route path="/units/:id" element={<UnitDetailPage />} /> {/* Route for individual unit */}
            <Route path="/something" element={<SomethingPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
