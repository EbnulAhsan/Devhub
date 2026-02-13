// ===================================
// DevHub — Theme Provider (Dark/Light)
// Manages theme state via React Context
// and syncs with localStorage + body attr.
// ===================================

import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

/**
 * Custom hook to access theme context.
 * Returns { theme, toggleTheme, isDark }.
 */
export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) throw new Error("useTheme must be used within ThemeProvider");
    return context;
}

/**
 * ThemeProvider wraps the app and provides
 * dark/light mode toggle functionality.
 */
export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(() => {
        // Read saved preference or default to dark
        const saved = localStorage.getItem("devhub-theme");
        return saved || "dark";
    });

    // Sync body data-theme attribute whenever theme changes
    useEffect(() => {
        document.body.setAttribute("data-theme", theme);
        localStorage.setItem("devhub-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    const isDark = theme === "dark";

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, isDark }}>
            {children}
        </ThemeContext.Provider>
    );
}
