import { NavLink } from "react-router-dom";
import s from "./HeaderTransaction.module.scss";

const HeaderTransaction = () => {
  return (
    <div className={s.header}>
      <NavLink to="expense" className={s.link} exact>
        РАСХОД
      </NavLink>
      <NavLink to="income" className={s.link}>
        ДОХОД
      </NavLink>
    </div>
  );
};

export default HeaderTransaction;
