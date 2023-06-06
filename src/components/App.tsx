import { useEffect } from 'react';
import Box from './Box/Box';

const currentWindow = window as any;
const tg = currentWindow.Telegram.WebApp;

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
