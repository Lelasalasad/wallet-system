import React, { Suspense, lazy } from 'react';
import { AppProvider } from './components/AppContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Navbar from './components/Navbar'; 
import FloatingCoins from './components/FloatingCoins'; 
import BackgroundCharacter from './components/BackgroundCharacter';
import './App.css';

// تحميل المكونات بشكل كسول
const Login = lazy(() => import('./components/login'));
const Register = lazy(() => import('./components/register'));
const Transfer = lazy(() => import('./components/FundsTransfer'));
const Welcome = lazy(() => import('./components/Welcome'));
const WalletTransfer = lazy(() => import('./components/wallettransfer'));
const Withdraw = lazy(() => import('./components/withdraw'));
const Deposit = lazy(() => import('./components/deposit'));
const Operations = lazy(() => import('./components/Operations'));

const App = () => {
    return (
        <AppProvider>
            <>
                <FloatingCoins />
                <BackgroundCharacter />
                <Router>
                    <Navbar />
                    <div className="main-container">
                        <Suspense fallback={<div>Loading...</div>}>
                            <Routes>
                                <Route path="/" element={<Welcome />} />
                                <Route path="/login" element={<Login />} />
                                <Route path="/register" element={<Register />} />
                                <Route path="/operations" element={<Operations />} />
                                <Route path="/fundsTransfer" element={<Transfer />} />
                                <Route path="/wallettransfer" element={<WalletTransfer />} />
                                <Route path="/withdraw" element={<Withdraw />} />
                                <Route path="/deposit" element={<Deposit />} />
                            </Routes>
                        </Suspense>
                    </div>
                </Router>
            </>
        </AppProvider>
    );
};

export default App;