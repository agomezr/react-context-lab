import { useContext, createContext, useState } from "react";

const ThemeContext = createContext(undefined);

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light");

    function toggleTheme(){
        if(theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }

    return (
        <>
            <ThemeContext.Provider value={{ theme, toggleTheme } }>
                { children }
            </ThemeContext.Provider>
        </>
    )
}

export function useTheme() {
    return useContext(ThemeContext);
}
