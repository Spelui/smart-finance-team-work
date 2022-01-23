import React, { useContext } from "react";

import { useDispatch, useSelector } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";

import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import { ThemeContext, themes } from "../../context/themeContext";

import sprite from "../../images/svg/symbol-defs.svg";
import s from "./Header.module.scss";

export const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const email = useSelector(authSelectors.getUserEmail);
  const avatarText = email.slice(0, 1).toUpperCase();
  const { theme } = useContext(ThemeContext);

  return (
    <header
      className={`${s.header} ${
        theme === themes.light ? s.lightTheme : s.darkTheme
      }`}
    >
      <div className="container">
        <div className={s.headerWrapper}>
          <a href="./" className={s.headerLink}>
            <svg width="90px" height="31px" className={s.logo}>
              <use href={`${sprite}#logo`}></use>
            </svg>
          </a>
          <ThemeSwitcher />
          {isLoggedIn && (
            <div className={s.userMenu}>
              <div className={s.userAvatar}>
                <p className={s.avatarText}>{avatarText}</p>
              </div>
              <p className={s.userName}>{email}</p>
              <button type="button" className={s.btn}>
                <svg width="16px" height="16px" className={s.logoutIcon} onClick={() => dispatch(authOperations.loginOut())}>
                  <use href={`${sprite}#logout`}></use>
                </svg>
                <p
                  onClick={() => dispatch(authOperations.loginOut())}
                  className={s.logoutText}
                >
                  Выйти
                </p>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
