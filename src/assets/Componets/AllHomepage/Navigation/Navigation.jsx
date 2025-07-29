import React, { useState } from 'react';
import './Navigation.css';
import { FaLock, FaBolt, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navigation() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navigation">
            <div className="nav-left">
                <FaBolt className="logo-icon-navigation" />
                <Link to="/" className="logo-text">Cloudvista</Link>
            </div>

            <div className={`nav-center ${menuOpen ? 'open' : ''}`}>
                <li><Link to="/" className="nav-link active" onClick={() => setMenuOpen(false)}>Home</Link></li>
                <li><Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>About</Link></li>
                <li><Link to="/services" className="nav-link" onClick={() => setMenuOpen(false)}>Services</Link></li>
                <li><Link to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</Link></li>
            </div>

            <div className="nav-right">
                <Link to="/singin" className="signup">
                    <FaLock className="lock-icon" />
                    <span>Sign Up</span>
                </Link>
                {/* <Link to="/free-trial">
                    <button className="trial-btn">Start free trial</button>
                </Link> */}

                <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>
        </nav>
    );
}

export default Navigation;