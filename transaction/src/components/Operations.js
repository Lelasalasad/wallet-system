import React, { useState } from 'react';
import { FaSpinner } from 'react-icons/fa'; 
import { useNavigate } from 'react-router-dom'; 
import '../App.css'; 

const Operations = () => {
    const [loading, setLoading] = useState({
        transfer: false,
        walletTransfer: false,
        withdraw: false,
        deposit: false,
    });
    const navigate = useNavigate();

    const handleLoading = (operation, path) => {
        setLoading((prev) => ({ ...prev, [operation]: true }));
        setTimeout(() => {
            setLoading((prev) => ({ ...prev, [operation]: false }));
            navigate(path);
        }, 2000); 
    };

    return (
        <div className="container">
            <div className="form-container">
                <h2>Operations</h2>
                <ul className="operations-list">
                    <li>
                        <button className="operation-button" onClick={() => handleLoading('transfer', '/FundsTransfer')} disabled={loading.transfer}>
                            {loading.transfer ? <FaSpinner className="spinner" /> : 'Transfer Funds'}
                        </button>
                    </li>
                    <li>
                        <button className="operation-button" onClick={() => handleLoading('walletTransfer', '/wallettransfer')} disabled={loading.walletTransfer}>
                            {loading.walletTransfer ? <FaSpinner className="spinner" /> : 'Wallet Transfer'}
                        </button>
                    </li>
                    <li>
                        <button className="operation-button" onClick={() => handleLoading('withdraw', '/withdraw')} disabled={loading.withdraw}>
                            {loading.withdraw ? <FaSpinner className="spinner" /> : 'Withdraw Funds'}
                        </button>
                    </li>
                    <li>
                        <button className="operation-button" onClick={() => handleLoading('deposit', '/deposit')} disabled={loading.deposit}>
                            {loading.deposit ? <FaSpinner className="spinner" /> : 'Deposit Funds'}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Operations;