import { useEffect } from "react";
import s from "./App.module.scss";
import Rampa from "../../asset/rampa.svg";
import Toggle from "../../asset/toggle.svg";
import { useTheme } from "../../theme/useTheme";

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
      <Rampa />
    </div>
  );
};
