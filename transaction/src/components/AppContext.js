// AppContext.js
import React, { createContext, useState } from 'react';

// إنشاء سياق جديد
export const AppContext = createContext();

// إنشاء مكون Provider
export const AppProvider = ({ children }) => {
    const [user, setUser] = useState(null); // مثال على حالة المستخدم

    return (
        <AppContext.Provider value={{ user, setUser }}>
            {children}
        </AppContext.Provider>
    );
};