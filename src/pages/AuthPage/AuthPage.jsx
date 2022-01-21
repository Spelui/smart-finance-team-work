import React from "react";
import { useState, useContext } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../../redux/auth";
import { ThemeContext, themes } from "../../context/themeContext";

import s from "./AuthPage.module.scss";
import sprite from "../../images/sprite.svg";

export const AuthPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { theme } = useContext(ThemeContext);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    await dispatch(authOperations.register({ email, password }));
    dispatch(authOperations.loginIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(authOperations.loginIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <section
      className={`${s.authSection} background ${
        theme === themes.light ? "lightTheme" : s.darkTheme
      }`}
    >
      <div className="container">
        <div className={s.authSectionWrapper}>
          <div className={s.heroTitleWrapper}>
            <svg width="183px" height="46px" className={s.heroTitle}>
              <use href={`${sprite}#mobile-title`}></use>
            </svg>
            <h1 className="visually-hidden">Kapusta</h1>
            <p className={s.heroText}>Smart Finance</p>
          </div>
          <div className={s.authBox}>
            <p className={s.googleAuthText}>
              Вы можете авторизоваться с помощью Google Account:
            </p>
            <button type="button" className={s.googleBtn}>
              <svg width="18px" height="18px" className={s.googleIcon}>
                <use href={`${sprite}#google-logo`}></use>
              </svg>
              <p className={s.googleText}>Google</p>
            </button>
            <p className={s.authText}>
              Или зайти с помощью e-mail и пароля, предварительно
              зарегистрировавшись:
            </p>
            <form
              onSubmit={handleRegister}
              autoComplete="off"
              className={s.authForm}
            >
              <label htmlFor="user-email" className={s.authLabel}>
                Электронная почта:
              </label>
              <input
                id="user-email"
                type="text"
                className={s.authInput}
                placeholder="your@email.com"
                name="email"
                value={email}
                onChange={handleChange}
              />
              <label htmlFor="user-password" className={s.authLabel}>
                Пароль:
              </label>
              <input
                id="user-password"
                type="password"
                className={s.authInput}
                placeholder="Пароль"
                name="password"
                value={password}
                onChange={handleChange}
              />
              <div className={s.btnWrapper}>
                <button onClick={handleLogin} type="button" className={s.btn}>
                  Войти
                </button>
                <button type="submit" className={s.btn}>
                  Регистрация
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
