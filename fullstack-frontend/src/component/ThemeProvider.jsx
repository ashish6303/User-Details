import React from 'react';
import { useSelector } from 'react-redux';
import './ThemeProvider.css';

function ThemeProvider({ children }) {
    const theme = useSelector((state) => state.theme.theme);

    return (
        <div className={`app ${theme}`}>
            {children}
        </div>
    );
}

export default ThemeProvider;