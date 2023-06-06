import React from 'react';
import s from './Box.module.css';

export default function Box() {
  return (
    <div>
      <div className={s.box1}></div>;<div className={s.box2}></div>;<div className={s.box3}></div>;
      <div className={s.box4}></div>;
    </div>
  );
}
