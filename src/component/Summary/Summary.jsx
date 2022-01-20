import { useSelector } from "react-redux";
import s from "./Summary.module.scss";

const Summary = () => {
  // dispatch(getIncome());
  const userMonth = useSelector((state) => state.transactions.month);

  const date = new Date();
  const monthNow = date.getMonth() + 1;

  return (
    <div className={s.summary}>
      <h3 className={s.summary__title}>Сводка</h3>
      <ul className={s.summary__list}>
        {Object.keys(userMonth)
          .splice(0, monthNow)
          .map((month) => (
            <li key={month} className={s.summary__item}>
              <p className={s.summary__text}>
                {month}
                <span>{userMonth[month]}</span>
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Summary;
