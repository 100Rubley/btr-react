import { useEffect } from "react";
import s from "./App.module.scss";
import Rampa from "../../assets/rampa.svg";
import { useTheme } from "../../styles/theme/useTheme";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import { Checkbox } from "../Checkbox/Checkbox";

const currentWindow = window as any;
const tg = currentWindow.Telegram.WebApp;

export const App = () => {
  const { theme } = useTheme();

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className={`${s[theme]} ${s.container}`}>
      <div className={s.box}>
        <div className={s.title}>
          <h2>Select level</h2>
        </div>
        <ThemeToggle />
      </div>
      <Checkbox text={"Tops"} isChecked={"off"} />
      <Rampa />
    </div>
  );
};
