import React, { useState, useContext } from 'react';
import { AppContext } from './AppContext';  // استيراد السياق
import '../App.css';

const WalletTransfer = () => {
    const { wallet, updateWallet } = useContext(AppContext);  // الوصول إلى المحفظة من السياق
    const [amount, setAmount] = useState('');
    const [fromWallet, setFromWallet] = useState('Wallet1');
    const [toWallet, setToWallet] = useState('Wallet2');
    const [calculatedAmount, setCalculatedAmount] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // تحقق من وجود رصيد كافٍ في المحفظة المصدر
        const fromBalance = wallet[fromWallet];
        if (parseFloat(amount) > fromBalance) {
            alert(`Insufficient balance in ${fromWallet}`);
            return;
        }

        // خصم المبلغ من المحفظة المصدر وإضافته إلى المحفظة الهدف
        updateWallet(-parseFloat(amount), fromWallet);  // خصم من المحفظة المصدر
        updateWallet(parseFloat(amount), toWallet);  // إضافة إلى المحفظة الهدف

        setCalculatedAmount(amount);
        alert(`Transferred ${amount} from ${fromWallet} to ${toWallet}`);
    };

    return (
        <div className="container">
            <div className="form-container">
                <h2>Wallet Transfer</h2>
                <p>Transfer funds between different wallets.</p>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>Amount to Transfer:</label>
                        <input 
                            type="number" 
                            placeholder="Enter amount" 
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)} 
                            required 
                        />
                    </div>
                    
                    <div className="input-group">
                        <label>From Wallet:</label>
                        <select 
                            value={fromWallet} 
                            onChange={(e) => setFromWallet(e.target.value)} 
                            required
                        >
                            <option value="Wallet1">Wallet 1</option>
                            <option value="Wallet2">Wallet 2</option>
                            <option value="Wallet3">Wallet 3</option>
                        </select>
                    </div>

                    <div className="input-group">
                        <label>To Wallet:</label>
                        <select 
                            value={toWallet} 
                            onChange={(e) => setToWallet(e.target.value)} 
                            required
                        >
                            <option value="Wallet1">Wallet 1</option>
                            <option value="Wallet2">Wallet 2</option>
                            <option value="Wallet3">Wallet 3</option>
                        </select>
                    </div>

                    <h5>Estimated Amount: {calculatedAmount} (to be transferred)</h5>
                    <button type="submit">Transfer</button>
                </form>
            </div>
        </div>
    );
};

export default WalletTransfer;
