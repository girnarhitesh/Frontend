import React from 'react';
import './Navigation.css';
import { FaLock, FaBolt } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Make sure this is installed

function Navigation() {
    return (
        <nav className="navigation">
            <div className="nav-left">
                <FaBolt className="logo-icon" />
                <Link to="/" className="logo-text">Cloudvista</Link>
            </div>

            <ul className="nav-center">
                <li><Link to="/" className="nav-link active">Home</Link></li>
                <li><Link to="/about" className="nav-link">About</Link></li>
                <li><Link to="/services" className="nav-link">Services</Link></li>
                <li><Link to="/contact" className="nav-link">Contact</Link></li>
            </ul>

            <div className="nav-right">
                <Link to="/signup" className="signup">
                    <FaLock className="lock-icon" />
                    <span>Sign Up</span>
                </Link>
                <Link to="/free-trial">
                    <button className="trial-btn">Start free trial</button>
                </Link>
            </div>
        </nav>
    );
}

export default Navigation;