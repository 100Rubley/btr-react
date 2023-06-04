import React from 'react';
import s from './App.module.css';

export const App = () => {
  const title = 'React + Webpack и babel';

  return <h1 className={s.title}>{title}</h1>;
};
