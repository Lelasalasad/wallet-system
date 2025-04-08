import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; 
import { FaHome, FaSignInAlt, FaUserPlus, FaTools } from 'react-icons/fa'; 
import '../App.css'; 
const Navbar = () => { 
    const [scrolled, setScrolled] = useState(false);
     const handleScroll = () => {
         const offset = window.scrollY; 
         if (offset > 50) {
             setScrolled(true);
             } 
        else {
             setScrolled(false);
             } 
            };
    useEffect(() => {
         window.addEventListener('scroll', handleScroll);
          return () => {
             window.removeEventListener('scroll', handleScroll);
             };
             },[]);
               return ( 
               <motion.nav
                className={`navbar ${scrolled ? 'scrolled' : ''} `}
                 initial={{ opacity: 0 }} 
                 animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                   >
                     <img src="lo.png" alt="Logo" className="logo" />
                      <div className="nav-links"> 
                        <Link to="/" className="nav-link"><FaHome /> Welcome </Link>
                        <Link to="/login" className="nav-link"> <FaSignInAlt /> Login </Link> 
                        <Link to="/register" className="nav-link"> <FaUserPlus /> Register </Link> 
                        <Link to="/operations" className="nav-link"> <FaTools /> Operations </Link> 
                      </div> 
                </motion.nav>
                       );
                     };
export default Navbar; 