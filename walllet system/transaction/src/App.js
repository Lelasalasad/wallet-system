import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Navbar from './components/Navbar'; 
import Login from './components/login';
import Register from './components/register';
import Transfer from './components/FundsTransfer';
import Welcome from './components/Welcome'; 
import WalletTransfer from './components/wallettransfer';
import Withdraw from './components/withdraw';
import Deposit from './components/deposit';
import Operations from './components/Operations'; // Import Operations component
import './App.css';

const App = () => {
    return (
        <Router>
            <Navbar /> {/* Add the Navbar */}
            
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/operations" element={<Operations />} />
                <Route path="/FundsTransfer" element={<Transfer />} />
                <Route path="/wallettransfer" element={<WalletTransfer />} />
                <Route path="/withdraw" element={<Withdraw />} />
                <Route path="/deposit" element={<Deposit />} />
            </Routes>
        </Router>
    );
};

export default App;