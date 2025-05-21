
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Theme = "light" | "dark" | "ocean";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  accentColor: string;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Try to get the theme from localStorage
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    return savedTheme || "light";
  });

  // Determine accent color based on theme
  const accentColor = theme === "light" 
    ? "#3b82f6" // blue for light theme
    : theme === "dark" 
    ? "#818cf8" // indigo for dark theme
    : "#06b6d4"; // cyan for ocean theme

  useEffect(() => {
    // Update localStorage when theme changes
    localStorage.setItem("theme", theme);
    
    // Update document class for theme
    const root = document.documentElement;
    root.classList.remove("theme-light", "theme-dark", "theme-ocean");
    root.classList.add(`theme-${theme}`);
    
    // Add transition class for smooth theme change
    root.classList.add("theme-transition");
    
    // Remove transition class after animation completes
    const timeoutId = setTimeout(() => {
      root.classList.remove("theme-transition");
    }, 500);
    
    return () => clearTimeout(timeoutId);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(current => {
      if (current === "light") return "dark";
      if (current === "dark") return "ocean";
      return "light";
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme, accentColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
