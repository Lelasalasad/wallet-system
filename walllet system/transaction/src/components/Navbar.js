import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src="lo.png" alt="Logo" className="logo" />

            <div>
                <Link to="/" className="nav-link">Welcome</Link>
                <Link to="/login" className="nav-link">Login</Link>
                <Link to="/register" className="nav-link">Register</Link>
                <Link to="/operations" className="nav-link">Operations</Link>
            </div>
        </nav>
    );
};

export default Navbar;