import React, { useState, useContext } from 'react';
import { AppContext } from './AppContext';  // استيراد السياق
import '../App.css';

const FundsTransfer = () => {
    const { wallet, updateWallet } = useContext(AppContext);  // الوصول إلى المحفظة من السياق
    const [amount, setAmount] = useState('');
    const [fromCurrency, setFromCurrency] = useState('CNY');
    const [toCurrency, setToCurrency] = useState('BTC'); 
    const [exchangeRates] = useState({ 
        CNY: 6.5,
        SYP: 2000,
        USD: 1.0,
        EUR: 0.85,
        GBP: 0.75,
        BTC: 0.000022, 
        ETH: 0.00035, 
    });
    const [calculatedAmount, setCalculatedAmount] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    
        if (parseFloat(amount) <= 0) {
            setErrorMessage('Amount must be greater than zero.');
            return;
        }
    
        const fromRate = exchangeRates[fromCurrency];
        const toRate = exchangeRates[toCurrency];
    
        // حساب المبلغ المحول بناءً على سعر الصرف
        const resultAmount = (amount * fromRate / toRate).toFixed(6); 
    
        // التحقق من وجود رصيد كافٍ في العملة المصدر
        if (parseFloat(amount) > wallet[fromCurrency]) {
            setErrorMessage(`Insufficient balance in ${fromCurrency}`);
            return;
        }

        // تحديث المحفظة هنا بشكل فوري
        const fromAmount = parseFloat(amount);
        const toAmount = parseFloat(resultAmount);

        // خصم المبلغ من العملة المصدر وإضافة المبلغ المحول للعملة الهدف
        updateWallet(-fromAmount, fromCurrency);  // خصم من المحفظة المصدر
        updateWallet(toAmount, toCurrency);  // إضافة إلى المحفظة الهدف
        
        // هنا يتم طباعة المحفظة في الـ console للتحقق من التحديثات
        console.log('Updated Wallet:', wallet);
    
        setCalculatedAmount(resultAmount);
        setErrorMessage('');  // تنظيف الرسالة في حالة نجاح التحويل
        alert(`You will receive ${resultAmount} ${toCurrency}`);
    };

    return (
        <div className="container">
            <div className="form-container">
                <h2>Funds Transfer</h2>
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

                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                    
                    <h5>Estimated Amount: {calculatedAmount} {toCurrency}</h5>
                    <button type="submit">Convert</button>
                </form>
            </div>
        </div>
    );
};

export default FundsTransfer;
