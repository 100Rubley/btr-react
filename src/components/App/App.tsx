import { useEffect } from 'react';

const currentWindow = window as any;
const tg = currentWindow.Telegram.WebApp;

export const App = () => {
  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div>
      <button>toggle</button>
    </div>
  );
};
