import { useState } from "react";
import sprite from "../../images/sprite.svg";
import s from "./ReportSwitcher.module.scss";

const ReportSwitcher = () => {
  const incomes = "доходы";
  const expenses = "расходы";
  const [title, setTitle] = useState(incomes);

  const switchIncomesExpenses = () => {
    setTitle(title === incomes ? expenses : incomes);
  };
  return (
    <div className={s.cost_incomes_wrap}>
      <button
        type="button"
        onClick={() => {
          switchIncomesExpenses();
        }}
        className={s.btn}
      >
        <svg viewBox="0 0 28.3 28.3" className={s.arrows}>
          <use href={`${sprite}#arrow_left`} />
        </svg>
      </button>
      <span className={s.cost_incomes}>{title}</span>
      <button
        type="button"
        onClick={() => {
          switchIncomesExpenses();
        }}
        className={s.btn}
      >
        <svg viewBox="0 0 28.3 28.3" className={s.arrows}>
          <use href={`${sprite}#arrow_rigth`} />
        </svg>
      </button>
    </div>
  );
};

export default ReportSwitcher;
