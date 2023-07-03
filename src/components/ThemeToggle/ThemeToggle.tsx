import { useTheme } from "../../styles/theme/useTheme";
import s from "./ThemeToggle.module.scss";
import Moon from "../../assets/toggle_dark.svg";
import Sun from "../../assets/toggle_light.svg";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  const currentIcon =
    theme === "dark" ? (
      <Sun onClick={toggleTheme} className={s.sun} />
    ) : (
      <Moon onClick={toggleTheme} className={s.moon} />
    );

  const containerTheme = theme === "dark" ? s[theme] : "";

  return (
    <div className={`${s.toggleContainer} ${containerTheme}`}>
      {currentIcon}
    </div>
  );
};
