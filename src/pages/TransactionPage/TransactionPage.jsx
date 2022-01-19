// import styles from "./Expense.module.scss";
import { Routes, Route, Navigate, NavLink, Link } from "react-router-dom";
import CostIncome from "../../component/CostIncome/CostIncome";
import Expense from "../../component/Expense/Expense";
import CostIncomeBtm from "../../component/CostIncome/CostIncomeBtm/CostIncomeBtm";
import styles from "./TransactionPage.module.scss";

const TransactionPage = () => {
  return (
    <section className="background">
      <div className={`container  `}>
        <Link to="/report">Перейти к отчетам</Link>
        <div className={styles.TransactionPageBtm}>
          <NavLink to="expense">
            <CostIncomeBtm textBtm="РАСХОД" />
          </NavLink>
          <NavLink to="income">
            <CostIncomeBtm textBtm="ДОХОД" />
          </NavLink>
        </div>

        <div>
          <Routes>
            <Route path="/income" element={<CostIncome />} />
            <Route path="/expense" element={<Expense />} />
          </Routes>
        </div>
      </div>
    </section>
  );
};

export default TransactionPage;
