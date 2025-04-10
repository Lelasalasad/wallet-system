import React, { useState } from 'react';
import '../App.css';

const WalletTransfer = () => {
    const [amount, setAmount] = useState('');
    const [fromCurrency, setFromCurrency] = useState('CNY');
    const [toCurrency, setToCurrency] = useState('USD');
    const [exchangeRates] = useState({ 
        CNY: 6.5,
        SYP: 2000,
        USD: 1.0,
        EUR: 0.85,
        GBP: 0.75,
    });
    const [calculatedAmount, setCalculatedAmount] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const fromRate = exchangeRates[fromCurrency];
        const toRate = exchangeRates[toCurrency];
        const resultAmount = (amount * fromRate / toRate).toFixed(2);
        setCalculatedAmount(resultAmount);
        alert(`You will receive ${resultAmount} ${toCurrency}`);
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
                    <label>From Currency:</label>
                    <select 
                        value={fromCurrency} 
                        onChange={(e) => setFromCurrency(e.target.value)} 
                        required
                    >
                        {Object.keys(exchangeRates).map((currencyKey) => (
                            <option key={currencyKey} value={currencyKey}>
                                {currencyKey}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="input-group">
                    <label>To Currency:</label>
                    <select 
                        value={toCurrency} 
                        onChange={(e) => setToCurrency(e.target.value)} 
                        required
                    >
                        {Object.keys(exchangeRates).map((currencyKey) => (
                            <option key={currencyKey} value={currencyKey}>
                                {currencyKey}
                            </option>
                        ))}
                    </select>
                </div>

                <h5>Estimated Amount: {calculatedAmount} {toCurrency}</h5>
                <button type="submit">Transfer</button>
            </form>
            </div>
        </div>
    );
};

export default WalletTransfer;