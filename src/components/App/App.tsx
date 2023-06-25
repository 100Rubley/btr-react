import { useEffect, useState } from 'react';
import s from './App.module.scss'
import { LevelSelector } from '../LevelSelector/LevelSelector';

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

  return (
    <div className={s[theme]}>
      <LevelSelector />
      <button onClick={onToggle}>toggle</button>
    </div>
  );
};
