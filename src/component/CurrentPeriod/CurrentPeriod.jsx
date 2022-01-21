import { useEffect, useContext } from "react";
import { useDispatch } from "react-redux";
import sprite from "../../images/sprite.svg";
import s from "./CurrentPeriod.module.scss";
import { getPeriodData } from "../../redux/user/user-operations";
import { ThemeContext, themes } from "../../context/themeContext";

const CurrentPeriod = () => {
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext);
  // useEffect(() => {
  //   dispatch(getPeriodData("2020-12"));
  // }, [dispatch]);
  // const perodData =
  const changePeriod = () => {
    dispatch(getPeriodData("2020-12"));
  };
  return (
    <div
      className={`${s.current_period} ${
        theme === themes.light ? "lightTheme" : s.darkTheme
      }`}
    >
      <span className={s.text}>Текущий период:</span>
      <div className={s.current_period_wrap}>
        <button
          type="button"
          onClick={changePeriod}
          className={s.current_period_btn}
        >
          <svg viewBox="0 0 28.3 28.3" className={s.current_period_arrow}>
            <use href={`${sprite}#arrow_left`} />
          </svg>
        </button>
        <span className={s.cost_incomes}>ноябрь 2019</span>
        <button
          type="button"
          onClick={changePeriod}
          className={s.current_period_btn}
        >
          <svg viewBox="0 0 28.3 28.3" className={s.current_period_arrow}>
            <use href={`${sprite}#arrow_rigth`} />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CurrentPeriod;
