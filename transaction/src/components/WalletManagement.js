import React, { useState, useContext } from 'react';
import { AppContext } from './AppContext';  // استيراد السياق
import '../App.css';

const WalletManagement = () => {
    const { wallet, updateWallet } = useContext(AppContext);  // الوصول إلى المحفظة من السياق
    const [transactionHistory, setTransactionHistory] = useState([]);

    const handleTransaction = (type, currency, amount) => {
        const updatedBalance = { ...wallet };
        const amountFloat = parseFloat(amount);

        if (type === 'add') {
            updatedBalance[currency] += amountFloat;
        } else if (type === 'subtract') {
            if (amountFloat > updatedBalance[currency]) {
                alert(`Insufficient balance for ${currency}`);
                return;
            }
            updatedBalance[currency] -= amountFloat;
        }

        updateWallet(amountFloat * (type === 'add' ? 1 : -1), currency);  // تحديث الرصيد في السياق

        const newTransaction = { type, currency, amount, timestamp: new Date().toLocaleString() };
        setTransactionHistory([...transactionHistory, newTransaction]);
    };

    return (
        <div className="container">
            <div className="form-container">
                <h2>Wallet Management</h2>

                {/* Display Wallet Balance */}
                <h3>Wallet Balance</h3>
                <ul>
                    {Object.entries(wallet).map(([currency, balance]) => (
                        <li key={currency}>
                            {currency}: {balance.toFixed(2)} {currency}
                        </li>
                    ))}
                </ul>

                {/* Form for Transactions */}
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        const type = e.target.elements.type.value;
                        const currency = e.target.elements.currency.value;
                        const amount = e.target.elements.amount.value;
                        handleTransaction(type, currency, amount);
                        e.target.reset();
                    }}
                >
                    <div className="input-group">
                        <label>Transaction Type:</label>
                        <select name="type" required>
                            <option value="add">Add Funds</option>
                            <option value="subtract">Deduct Funds</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <label>Currency:</label>
                        <select name="currency" required>
    <option value="CNY">CNY (Chinese Yuan)</option>
    <option value="USD">USD (US Dollar)</option>
    <option value="EUR">EUR (Euro)</option>
    <option value="GBP">GBP (British Pound)</option>
    <option value="BTC">BTC (Bitcoin)</option>
    <option value="ETH">ETH (Ethereum)</option>
    <option value="SYP">SYP (Syrian Pound)</option>
</select>

                    </div>
                    <div className="input-group">
                        <label>Amount:</label>
                        <input type="number" name="amount" placeholder="Enter amount" required />
                    </div>
                    <button type="submit">Submit Transaction</button>
                </form>

                {/* Display Transaction History */}
                <h3>Transaction History</h3>
                <ul>
                    {transactionHistory.map((transaction, index) => (
                        <li key={index}>
                            {transaction.timestamp}: {transaction.type === 'add' ? 'Added' : 'Deducted'} {transaction.amount} {transaction.currency}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default WalletManagement;
