import React, { useEffect } from 'react';
import Box from './Box/Box';

const tg = window.Telegram.WebApp;

export const App = () => {
  useEffect(() => {
    tg.ready();
  }, []);

  // const [theme, setTheme] = useState();
  return (
    <div>
      <Box />
      <button> toggle</button>
    </div>
  );
};
