import s from "./ReportInfo.module.scss";

const ReportInfo = () => {
  return (
    <div className={s.reportInfo_wrap}>
      <div className={s.costIncomes_report}>
        <div className={s.report_item + " " + s.line}>
          <p>Расходы:</p>
          <span className={s.numberCosts}>- 50 000.00 грн.</span>
        </div>
        <div className={s.report_item}>
          <p>Доходы:</p>
          <span className={s.numberIncomes}>+ 50 000.00 грн.</span>
        </div>
      </div>
    </div>
  );
};

export default ReportInfo;
