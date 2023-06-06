import { useEffect } from "react";
import Box from "../Box/Box";
import "./app.scss";

const currentWindow = window as any;
const tg = currentWindow.Telegram.WebApp;

export const App = () => {

  useEffect(() => {
    tg.ready();
  }, []);
  
  return (
    <>
      <div className="app">asda</div>
      <Box />;
    </>
  );
};
