import sprite from "../../images/sprite.svg";
import CategoryList from "../../component/CategoryList";
import BackspaceBtn from "../../component/BackspaceBtn";
import ReportSwitcher from "../../component/ReportSwitcher/ReportSwitcher";
import ReportInfo from "../../component/ReportInfo/ReportInfo";
import CurrentPeriod from "../../component/CurrentPeriod/CurrentPeriod";

import s from "./ReportPage.module.scss";

const ReportPage = () => {
  return (
    <>
      <section className={`${s.reportInfo_section} background`}>
        <div className={s.wrap}>
          <div className={s.backgroundTest}>
            <div className={s.report_head_wrap}>
              <CurrentPeriod />
              {/* <Balance /> */}
              <div className={s.reportBalance_wrap}>
                <span className={s.balanceText}>Баланс:</span>
                <span className={s.balanceNumber}>50 000.00 uah</span>
              </div>
              <BackspaceBtn />
            </div>
            <ReportInfo />
            <div className={s.section_categories}>
              <div className={s.report_switch_wrap}>
                <ReportSwitcher />
                <CategoryList />
              </div>
            </div>
          </div>
          <div className={s.graph_dependency_wrap}></div>
        </div>
      </section>
    </>
  );
};

export default ReportPage;
