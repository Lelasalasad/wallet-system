import React, { useState } from 'react';
import '../App.css';

const Withdraw = () => {
    const [amount, setAmount] = useState('');
    const [currency, setCurrency] = useState('CNY');
    const [balance, setBalance] = useState({ CNY: 0, USD: 0, EUR: 0, GBP: 0, SYP: 0 });

    const handleWithdraw = (event) => {
        event.preventDefault();
        
        const currentBalance = balance[currency];
        const withdrawalAmount = parseFloat(amount);

        // Check if there are sufficient funds
        if (withdrawalAmount > currentBalance) {
            alert(`Insufficient balance. Current balance: ${currentBalance} ${currency}`);
            return;
        }

        // Update balance logic
        const newBalance = currentBalance - withdrawalAmount;
        setBalance(prevBalance => ({
            ...prevBalance,
            [currency]: newBalance,
        }));

        // Clear the amount input after withdrawal
        setAmount('');
        alert(`Withdrew ${amount} ${currency}. New balance: ${newBalance} ${currency}`);
    };

    return (
        <div className="container">
             <div className='form-container'>
            <h2>Withdraw Funds</h2>
            <form onSubmit={handleWithdraw}>
                <div className="input-group">
                    <label>Amount:</label>
                    <input 
                        type="number" 
                        placeholder="Enter amount" 
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)} 
                        required 
                    />
                </div>
                
                <div className="input-group">
                    <label>Currency:</label>
                    <select 
                        value={currency} 
                        onChange={(e) => setCurrency(e.target.value)} 
                        required
                    >
                        <option value="CNY">CNY (Chinese Yuan)</option>
                        <option value="USD">USD (US Dollar)</option>
                        <option value="EUR">EUR (Euro)</option>
                        <option value="GBP">GBP (British Pound)</option>
                        <option value="SYP">SYP (Syrian Pound)</option>
                    </select>
                </div>

                <button type="submit">Withdraw</button>
            </form>

            <h3>Your Balance</h3>
            <ul>
                {Object.entries(balance).map(([key, value]) => (
                    <li key={key}>{key}: {value.toFixed(2)} {key}</li>
                ))}
            </ul>
            </div>
        </div>
    );
};

export default Withdraw;