import { useEffect, useState } from 'react';
import s from './App.module.css'

const currentWindow = window as any;
const tg = currentWindow.Telegram.WebApp;

export const App = () => {
  const [theme, setTheme] = useState('dark');

  const onToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  useEffect(() => {
    tg.ready();
  }, []);

  console.log(s['dark']);
  console.log(theme, s[theme]);

  return (
    <div className={s[theme]}>
      <button onClick={onToggle}>toggle</button>
    </div>
  );
};
