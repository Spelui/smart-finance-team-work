import { useSelector } from "react-redux";
import s from "./ReportInfo.module.scss";
import amount from "../../redux/user/user-selectors";

const ReportInfo = () => {
  const incomeTotal = useSelector(amount.incomesTotal);
  const expenseTotal = useSelector(amount.expenseTotal);

  return (
    <div className={s.reportInfo_wrap}>
      <div className={s.costIncomes_report}>
        <div className={s.report_item + " " + s.line}>
          <p>Расходы:</p>
          <span className={s.numberCosts}>
            - {`${expenseTotal}.00` || "0.00"} грн.
          </span>
        </div>
        <div className={s.report_item}>
          <p>Доходы:</p>
          <span className={s.numberIncomes}>
            + {`${incomeTotal}.00` || "0.00"} грн.
          </span>
        </div>
      </div>
    </div>
  );
};

export default ReportInfo;
