import React from 'react';
import s from './Box.module.css';

export default function Box() {
  return (
    <div>
      <div className={s.box}>
        <h1 className={s.title}> Choose level </h1>
      </div>
    </div>
  );
}
