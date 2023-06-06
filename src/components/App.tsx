import { useEffect } from 'react';
import Box from './Box/Box';

const currentWindow = window as any;
const tg = currentWindow.Telegram.WebApp;

export const App = () => {
  useEffect(() => {
    tg.ready();
  }, []);

  // const title = 'React + Webpack и babel77777777777777777777knletenfgkjdfnbkdfnbldfnbldnfbl/jkdnf/bkjdbgdfnlk';

  // return <h1 className={s.title}>{title}</h1>;
  return <Box />;
};
