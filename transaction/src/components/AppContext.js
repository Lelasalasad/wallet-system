import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [wallet, setWallet] = useState({
        CNY: 0,
        USD: 0,
        EUR: 0,
        GBP: 0,
        SYP: 0,
        BTC: 0,
        ETH: 0, // إذا بدك تضيف كمان عملات
    });

    const updateWallet = (amount, currency) => {
        setWallet(prevWallet => {
            const currentBalance = prevWallet[currency] || 0;
            const newBalance = currentBalance + amount;

            // إذا الرصيد الجديد سلبي، منرفض العملية
            if (newBalance < 0) {
                console.error(`Insufficient funds in ${currency}. Current balance: ${currentBalance}, trying to deduct: ${-amount}`);
                alert(`Insufficient funds in ${currency}.`);
                return prevWallet; // بدون تغيير
            }

            // العملية مقبولة، منحدث الرصيد
            return {
                ...prevWallet,
                [currency]: newBalance,
            };
        });
    };

    return (
        <AppContext.Provider value={{ user, setUser, wallet, updateWallet }}>
            {children}
        </AppContext.Provider>
    );
};
