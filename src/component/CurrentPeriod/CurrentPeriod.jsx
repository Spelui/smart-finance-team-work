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
// { date, monthsStat }
const CurrentPeriod = () => {
  const date = useSelector((state) => state.transactions.date);
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext);
  const [currentDate, setCurrentDate] = useState(date.slice(0, 7));

  const [i, setI] = useState(0);
  const incomes = useSelector((state) => state.transactions.items);
  const expenses = useSelector((state) => state.transactions.itemsExpense);

  const dates = utils.convertDate(incomes, expenses);
  const convertMonths = utils.transformCurrentDate(
    dates.map((item) => item.slice(-2))
  );
  const getYears = dates.map((item) => item.slice(0, 4));

  const beginDate = dates.length ? "" : utils.transDate();

  useEffect(() => {
    dispatch(getIncome());
    dispatch(getExpense());
    dispatch(getPeriodData(currentDate));
  }, [currentDate, dispatch]);

  const prev = () => {
    setI(i - 1);

    if (i === 0) {
      setI(dates.length - 1);
      setCurrentDate(dates[0]);
    }
    setCurrentDate(dates[i - 1] ? dates[i - 1] : dates[0]);
  };
  const next = () => {
    setI(i + 1);

    if (i === dates.length - 1) {
      setI(0);
      setCurrentDate(dates[0]);
    }
    setCurrentDate(dates[i + 1] ? dates[i + 1] : dates[0]);
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
          onClick={() => prev(i)}
          className={s.current_period_btn}
          disabled={dates.length ? false : true}
        >
          <svg viewBox="0 0 28.3 28.3" className={s.current_period_arrow}>
            <use href={`${sprite}#arrow_left`} />
          </svg>
        </button>
        <span className={s.cost_incomes}>
          {dates.length ? ` ${convertMonths[i]} ${getYears[i]}` : beginDate}
        </span>
        <button
          type="button"
          onClick={() => next(i)}
          className={s.current_period_btn}
          disabled={dates.length ? false : true}
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
