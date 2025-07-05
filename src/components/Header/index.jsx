import React, { useContext } from "react";

import Button from "../Button";

import styles from './style.module.css';
import { ThemeContext } from "../contexts/ThemeProvider";

function Header({title}){

    const { theme, handleToggleTheme } = useContext(ThemeContext);

    return(
        <div className={styles.header}>
            <h2>{title}</h2>
            <Button
                onClick={handleToggleTheme}
            >
                {theme === 'dark'?
                "🔦"
                :
                "🌙"
                }
            </Button>
        </div>
    );
}

export default Header;