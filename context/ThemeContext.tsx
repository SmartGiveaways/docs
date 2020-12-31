import { createContext, useState, useEffect, useMemo } from "react";
import { COLORS } from "../constants";

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [theme, rawSetTheme] = useState("light");

  useEffect(() => {
    const root = window.document.documentElement;
    const initialTheme = root.style.getPropertyValue("--initial-theme");
    rawSetTheme(initialTheme);
  }, []);

  const contextValue = useMemo(() => {
    const setTheme = (value) => {
      const root = window.document.documentElement;

      localStorage.setItem("theme", value);

      Object.entries(COLORS).forEach(([name, colors]) => {
        const variable = `--color-${name}`;
        root.style.setProperty(variable, colors[value]);
      });
      rawSetTheme(value);
    };

    return {
      theme,
      setTheme
    };
  }, [theme, rawSetTheme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}