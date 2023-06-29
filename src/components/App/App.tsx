import { useEffect } from "react";
import s from "./App.module.scss";
import Rampa from "../../assets/rampa.svg";
import Toggle from "../../assets/toggle.svg";
import { useTheme } from "../../styles/theme/useTheme";
import { LevelSelector } from "../LevelSelector/LevelSelector";

const currentWindow = window as any;
const tg = currentWindow.Telegram.WebApp;

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className={`${s[theme]} ${s.container}`}>
      <div className={s.box}>
        <div className={s.title}>
          <h2>Select level</h2>
        </div>
        <Toggle onClick={toggleTheme} />
      </div>
      <LevelSelector />
      <Rampa />
    </div>
  );
};
