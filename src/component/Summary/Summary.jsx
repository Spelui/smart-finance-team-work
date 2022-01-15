import s from "./Summary.module.scss";

const Summary = () => {
  return (
    <div className={s.summary}>
      <h3 className={s.summary__title}>Сводка</h3>
      <ul className={s.summary__list}>
        <li className={s.summary__item}>
          <p className={s.summary__text}>
            Ноябрь
            <span>10 000.00</span>
          </p>
        </li>
        <li className={s.summary__item}>
          <p className={s.summary__text}>
            Октябрь
            <span>30 000.00</span>
          </p>
        </li>
        <li className={s.summary__item}>
          <p className={s.summary__text}>
            Сентябрь
            <span>30 000.00</span>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Summary;
