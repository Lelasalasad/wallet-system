import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import { AppContext } from './AppContext';


const Word = React.memo(({ word }) => {
    return <span className="falling-word">{word}</span>;
});

const Welcome = () => {
    const navigate = useNavigate();
    const { user } = useContext(AppContext); 

    useEffect(() => {
        if (user) {
            navigate('/home');
        }
    }, [user, navigate]);

    useEffect(() => {
        const elements = document.querySelectorAll('.word-wrapper span');
        elements.forEach((el, index) => {
            el.style.setProperty('--delay', `${index * 0.25}s`);
        });
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/login');
    };

    const text = 'Welcome to Your Gateway of Currency Freedom!';

    return (
        <>
            <div className="welcome-message">
                <div className="word-wrapper">
                    {text.split(' ').map((word, index) => (
                        <Word key={index} word={word} /> 
                    ))}
                </div>
            </div>
            <div className="welcome-container container-below-message">
                <div className="welcome-content">
                    <p>Experience seamless, secure, and lightning-fast transfers—where your money moves as you do! Unlock the future of currency management today!</p>
                    <button type="button" onClick={handleSubmit} className="get-started-button">Get Started</button>
                </div>
            </div>
        </>
    );
};

export default Welcome;