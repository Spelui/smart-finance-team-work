import React from 'react';
import { Routes, Route, Navigate, NavLink, Link } from "react-router-dom";
import sprite from '../../images/sprite.svg'
import Balance from '../../component/Balance'

import s from './HomePage.module.scss'

export const HomePage = () => {
    return <section>
      <div className={s.transaction__header}>
          <Balance />
          <Link to="/report" className={s.transaction__report}>
            Перейти к отчетам
            <svg width="24" height="24" className={s.transaction__logo}>
              <use href={`${sprite}#chart`}></use>
            </svg>
          </Link>
        </div>
  </section>;
};
