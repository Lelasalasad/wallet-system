import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 

const Operations = () => {
    return (
        <div className="container">
            <div className="form-container">
            <h2>Operations</h2>
            <ul className="operations-list">
                <li><Link to="/FundsTransfer" className="operation-link">Transfer Funds</Link></li>
                <li><Link to="/wallettransfer" className="operation-link">Wallet Transfer</Link></li>
                <li><Link to="/withdraw" className="operation-link">Withdraw Funds</Link></li>
                <li><Link to="/deposit" className="operation-link">Deposit Funds</Link></li>
            </ul>
            </div>
        </div>
    );
};

export default Operations;