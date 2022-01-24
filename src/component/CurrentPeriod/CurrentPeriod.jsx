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
import { utils } from "../../redux/utils";

// { date, monthsStat }
const CurrentPeriod = () => {
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext);
  const incomes = useSelector((state) => state?.transactions?.items);
  const expenses = useSelector((state) => state?.transactions?.itemsExpense);
  const date = useSelector((state) => state.transactions.date);
  const dates = utils.convertDate(incomes, expenses);

  const dateSelected = dates.find((item, i) => {
    return item === date.slice(0, 7);
  });
  // setCurrentDate(dateSelected);
  // setI(dates.indexOf(dateSelected));
  const inf = dates.indexOf(dateSelected);
  console.log("inf :>> ", inf);
  const [i, setI] = useState(inf);
  const [currentDate, setCurrentDate] = useState(date);
  const [disabledPrev, setDisabledPrev] = useState(false);
  const [disabledNext, setDisabledNext] = useState(false);
  console.log("currentDate :>> ", currentDate);
  // console.log("incomes :>> ", incomes);
  // console.log("expenses :>> ", expenses);
  const beginDate = dates.length ? null : utils.transDate();
  console.log("dates :>> ", dates);

  console.log("dateSelected :>> ", dateSelected);
  const convertMonths = utils.transformCurrentDate(
    dates.map((item) => item.slice(-2))
  );
  const getYears = dates.map((item) => item.slice(0, 4));

  // useEffect(() => {
  //   dispatch(getPeriodData(date.slice(0, 7)));
  //   console.log("date :>> ", date);
  //   setCurrentDate(date);
  //   console.log("useeffect :>> ");
  // }, [date, dispatch]);

  useEffect(() => {
    // setI(inf);
    if (!currentDate) return;
    setCurrentDate(dateSelected);
    // }
    // setCurrentDate(date.slice(0, 7));
    dispatch(getIncome());
    dispatch(getExpense());
    dispatch(getPeriodData(currentDate));
  }, [currentDate, dateSelected, dispatch]);

  const prev = () => {
    setI(i + 1);
    setCurrentDate(dates[i + 1] ? dates[i + 1] : dates[i]);
    if (i - 1 !== 0) {
      setDisabledNext(false);
    }

    if (i === dates.length - 1) {
      setI(dates.length - 1);
      setDisabledPrev(!disabledPrev);
      setCurrentDate(dates[dates.length - 1]);
    }
  };
  const next = () => {
    setI(i - 1);
    if (i !== dates.length - 1) {
      setDisabledPrev(false);
    }

    if (i === 0) {
      setI(0);
      setCurrentDate(dates[0]);
      setDisabledNext(!disabledNext);
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
          disabled={dates.length ? disabledPrev : true}
        >
          <svg viewBox="0 0 28.3 28.3" className={s.current_period_arrow}>
            <use href={`${sprite}#arrow_left`} />
          </svg>
        </button>
        <span className={s.cost_incomes}>
          {dates.length && inf !== -1
            ? ` ${convertMonths[i]} ${getYears[i]}`
            : beginDate}
        </span>
        <button
          type="button"
          onClick={() => next(i)}
          className={s.current_period_btn}
          disabled={dates.length ? disabledNext : true}
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
