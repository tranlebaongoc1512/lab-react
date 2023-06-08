import React, { useState, useEffect } from "react";

const themes = {
    dark: {
        background: '#18232c',
        navBackground: 'linear-gradient(to bottom, #18232c, transparent)',
        inputBackground: 'rgba(62, 84, 102, 0.9)',
        cardBackground: '#222e3d',
        color: 'white',
    },
    light: {
        background: '#ebeff4',
        navBackground: 'linear-gradient(to bottom, white, transparent)',
        inputBackground: 'rgba(177, 194, 208, 0.5)',
        cardBackground: 'white',
        color: 'black',
    }
};

const initialState = {
    light: false,
    theme: themes.dark,
    toggle: () => { }
};

const ThemeContext = React.createContext(initialState);

function ThemeProvider({ children }) {
    const [light, setLight] = useState(false);
    useEffect(() => {
        const isLight = localStorage.getItem('light') === 'true';
        setLight(isLight);
    }, [light]);
    const toggle = () => {
        const isLight = !light;
        localStorage.setItem('light', JSON.stringify(isLight));
        setLight(isLight);
    };
    const theme = light ? themes.light : themes.dark;
    return (
        <ThemeContext.Provider value={{ theme, light, toggle }}>
            {children}
        </ThemeContext.Provider>
    )
}
export { ThemeProvider, ThemeContext }
