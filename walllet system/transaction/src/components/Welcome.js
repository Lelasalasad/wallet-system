import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../App.css';

const Welcome = () => {
    const navigate = useNavigate(); 

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/login'); 
    };

    return (
        <div className="welcome-container">
            <div className="welcome-content">
                <h1>Welcome to Your Gateway of Currency Freedom!</h1>
                <p>Experience seamless, secure, and lightning-fast transfers—where your money moves as you do! Unlock the future of currency management today!</p>
                <button type="button" onClick={handleSubmit} className="get-started-button">Get Started</button>
            </div>
        </div>
    );
};

export default Welcome;