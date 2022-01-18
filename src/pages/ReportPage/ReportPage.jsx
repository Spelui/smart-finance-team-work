import sprite from "../../images/sprite.svg";
import CategoryList from "../../component/CategoryList";
import BackspaceBtn from "../../component/BackspaceBtn";
import ReportSwitcher from "../../component/ReportSwitcher/ReportSwitcher";

import s from "./ReportPage.module.scss";
import ReportInfo from "../../component/ReportInfo/ReportInfo";

const ReportPage = () => {
  return (
    <>
      <section className={`${s.reportInfo_section} background`}>
        <div className={s.wrap}>
          <div className={s.backgroundTest}>
            <div className={s.report_head_wrap}>
              <div className={s.current_period}>
                <span className="text">Текущий период:</span>
                <div className={s.current_period_wrap}>
                  <button type="button" className={s.current_period_btn}>
                    <svg
                      viewBox="0 0 28.3 28.3"
                      className={s.current_period_arrow}
                    >
                      <use href={`${sprite}#arrow_left`} />
                    </svg>
                  </button>
                  <span className={s.cost_incomes}>ноябрь 2019</span>
                  <button type="button" className={s.current_period_btn}>
                    <svg
                      viewBox="0 0 28.3 28.3"
                      className={s.current_period_arrow}
                    >
                      <use href={`${sprite}#arrow_rigth`} />
                    </svg>
                  </button>
                </div>
              </div>
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
