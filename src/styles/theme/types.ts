export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

export interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (thene: Theme) => void;
}

export interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export interface ThemeProviderProps {
  children: React.ReactNode;
}
