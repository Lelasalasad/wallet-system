import React, { useState, useContext } from 'react';
import { AppContext } from './AppContext';  // استيراد السياق
import '../App.css';

const Withdraw = () => {
    const { wallet, updateWallet } = useContext(AppContext);  // الوصول إلى المحفظة من السياق
    const [amount, setAmount] = useState('');
    const [currency, setCurrency] = useState('CNY');

    const handleWithdraw = (event) => {
        event.preventDefault();
        const currentBalance = wallet[currency] || 0;  // إذا كانت القيمة غير موجودة، نعتبرها 0
        const withdrawalAmount = parseFloat(amount);

        // تحقق من أن المبلغ الذي تريد سحبه هو أكبر من الرصيد
        if (withdrawalAmount > currentBalance) {
            alert(`Insufficient balance. Current balance: ${currentBalance} ${currency}`);
            return;
        }

        // تحديث الرصيد في السياق
        updateWallet(-withdrawalAmount, currency);

        // مسح المبلغ المدخل
        setAmount('');
        alert(`Withdrew ${amount} ${currency}. New balance: ${wallet[currency] - withdrawalAmount} ${currency}`);
    };

    return (
        <div className="container">
            <div className="form-container">
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

export default Withdraw;
