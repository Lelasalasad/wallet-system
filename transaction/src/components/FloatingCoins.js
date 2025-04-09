import { useEffect, useCallback } from 'react';
import '../App.css';

const FloatingCoins = () => {
    const createCoin = useCallback(() => {
        const coin = document.createElement('div');
        coin.className = 'coin';
        coin.style.left = `${Math.random() * 100}vw`;
        coin.style.top = `${Math.random() * 100}vh`;
        coin.style.opacity = (Math.random() * 0.5 + 0.5).toFixed(2); // 0.5 - 1
        coin.style.animationDuration = `${Math.random() * 4 + 4}s`; // دوران 4 - 8 ثواني
        
        document.body.appendChild(coin);

        // إزالة العملة بعد انتهاء التلاشي
        setTimeout(() => {
            coin.remove();
        }, 4000); // بعد 4 ثوانٍ (مدة الأنيميشن)
    }, []);

    useEffect(() => {
        const numCoins = 25;
        // نقوم بإنشاء 25 عملة فقط عند تحميل الصفحة
        for (let i = 0; i < numCoins; i++) {
            createCoin();
        }
    }, [createCoin]);

    return null;
};

export default FloatingCoins;
