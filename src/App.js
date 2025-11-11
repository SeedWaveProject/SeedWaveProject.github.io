import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Technology from './pages/Technology';
import History from './pages/History';
import Organization from './pages/Organization';

function App() {
  return (
    <Router basename="/SeedWaveProject.github.io">
      <div className="app">
        <nav className="navbar">
          <div className="nav-container">
            <Link to="/" className="nav-logo">
              <span className="logo-text">SeedWave</span>
            </Link>
            <ul className="nav-menu">
              <li className="nav-item">
                <Link to="/" className="nav-link">프로젝트 개요</Link>
              </li>
              <li className="nav-item">
                <Link to="/technology" className="nav-link">기술혁신</Link>
              </li>
              <li className="nav-item">
                <Link to="/history" className="nav-link">히스토리</Link>
              </li>
              <li className="nav-item">
                <Link to="/organization" className="nav-link">조직</Link>
              </li>
            </ul>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/history" element={<History />} />
            <Route path="/organization" element={<Organization />} />
          </Routes>
        </main>

        <footer className="footer">
          <div className="footer-content">
            <p>&copy; 2024 SeedWave Project. 사막화 방지를 위한 드론 파종 서비스</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;

