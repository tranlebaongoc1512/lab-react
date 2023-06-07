import React, { useState, useEffect } from "react";

const themes = {
    dark: {
        background: 'linear-gradient(to right, #18232c, #18232c 80%)',
        navBackground: 'linear-gradient(to bottom, #18232c, transparent)',
        searchBarBackground: 'rgba(62, 84, 102, 0.9)',
        color: 'white',
    },
    light: {
        background: 'white',
        navBackground: 'linear-gradient(to bottom, white, transparent)',
        searchBarBackground: 'rgba(177, 194, 208, 0.9)',
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
