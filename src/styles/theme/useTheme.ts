import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { Theme, UseThemeResult } from "./types";
import { LOCAL_STORAGE_THEME_KEY } from "utils/constants";

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;

    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme, toggleTheme };
}
