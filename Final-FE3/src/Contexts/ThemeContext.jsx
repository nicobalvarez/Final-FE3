import { createContext, useState } from "react";

export const ThemeContext = createContext();

function ThemeProvider(props){
    const [theme, setTheme] = useState('')

    function toggleTheme(){
        setTheme(theme ===''? "dark":'')
    }
    
    const exposedValue = {
        theme,
        toggleTheme
    }

    return(
        <ThemeContext.Provider value={exposedValue}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;