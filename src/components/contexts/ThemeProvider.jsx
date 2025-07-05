import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

function ThemeProvider({children}){
    const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'dark');
    
    function handleToggleTheme(){
        setTheme(prevState => (
            prevState === 'dark'?
            'light'
            :
            'dark'
        ))
    }

    useEffect(() => {
        localStorage.setItem('theme', theme)
        document.body.setAttribute('data-theme', theme);

        return () => {
            document.body.removeAttribute('data-theme');
        }
    }, [theme])

    return(
        <ThemeContext.Provider value={{theme, handleToggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;