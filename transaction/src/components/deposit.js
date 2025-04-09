import React, { useState, useContext } from 'react';
import { AppContext } from './AppContext';  // استيراد السياق
import '../App.css';

const Deposit = () => {
    const { wallet, updateWallet } = useContext(AppContext);  // الوصول إلى المحفظة من السياق
    const [amount, setAmount] = useState('');
    const [currency, setCurrency] = useState('CNY');

    const handleDeposit = (event) => {
        event.preventDefault();
        const depositAmount = parseFloat(amount);

        // تحديث الرصيد في السياق
        updateWallet(depositAmount, currency);

        // مسح المبلغ المدخل
        setAmount('');
        alert(`Deposited ${amount} ${currency}. New balance: ${wallet[currency] + depositAmount} ${currency}`);
    };

    return (
        <div className="container">
            <div className="form-container">
                <h2>Deposit Funds</h2>
                <form onSubmit={handleDeposit}>
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

                    <button type="submit">Deposit</button>
                </form>

                <h3>Your Balance</h3>
                <ul>
                    {Object.entries(wallet).map(([key, value]) => (
                        <li key={key}>
                            {key}: {typeof value === 'number' ? value.toFixed(2) : 'Invalid value'} {key}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Deposit;
