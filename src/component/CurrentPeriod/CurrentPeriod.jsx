import { useEffect, useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import sprite from "../../images/sprite.svg";
import s from "./CurrentPeriod.module.scss";
import { getPeriodData } from "../../redux/user/user-operations";
import {
  getExpense,
  getIncome,
} from "../../redux/transactions/transactionsOperation";
import { ThemeContext, themes } from "../../context/themeContext";
import { utils } from "../../utils";

const CurrentPeriod = ({ date, monthsStat }) => {
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext);
  const [currentDate, setCurrentDate] = useState(date.slice(0, 7));
  const [i, setI] = useState(0);
  const beginDate = utils.transDate();

  const getYear = date.slice(0, 4);

  const availableMonthsDate = Object.entries(monthsStat)
    .map(([name, value], index) => ({
      date: `${utils.normalizeDate(
        new Date(`${getYear}-${index + 1 < 12 ? index + 1 : 12}`)
      )}`,
      name,
      value,
    }))
    .filter(({ value }) => value > 0)
    .map(({ name, date }) => ({ name, date: date.slice(0, 7) }));

  const keys = availableMonthsDate;

  useEffect(() => {
    dispatch(getIncome());
    dispatch(getExpense());
    dispatch(getPeriodData(currentDate));
  }, [currentDate, dispatch]);

  const change = () => {
    setI(i + 1);

    if (i === keys.length - 1) {
      setI(0);
      setCurrentDate(keys[0].date);
    }
    setCurrentDate(keys[i + 1]?.date ? keys[i + 1]?.date : keys[0].date);
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
          onClick={() => change(i)}
          className={s.current_period_btn}
          disabled={keys.length ? false : true}
        >
          <svg viewBox="0 0 28.3 28.3" className={s.current_period_arrow}>
            <use href={`${sprite}#arrow_left`} />
          </svg>
        </button>
        <span className={s.cost_incomes}>
          {keys.length
            ? `${keys[i]?.name} ${keys[i]?.date.slice(0, 4)}`
            : beginDate}
        </span>
        <button
          type="button"
          onClick={() => change(i)}
          className={s.current_period_btn}
          disabled={keys.length ? false : true}
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
