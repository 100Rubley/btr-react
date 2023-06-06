import React, { useEffect } from 'react';
import Box from './Box/Box';

const tg = window.Telegram.WebApp;

export const App = () => {
  useEffect(() => {
    tg.ready();
  }, []);

  // const title = 'React + Webpack и babel77777777777777777777knletenfgkjdfnbkdfnbldfnbldnfbl/jkdnf/bkjdbgdfnlk';

  // return <h1 className={s.title}>{title}</h1>;
  return <Box />;
};
