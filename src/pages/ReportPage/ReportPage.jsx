// import { NavLink } from 'react-router-dom';
import CategoryList from "../../component/CategoryList";
import Balance from "../../component/Balance";
import BackspaceBtn from "../../component/BackspaceBtn";
import sprite from "../../images/sprite.svg";

import s from "./ReportPage.module.scss";

const ReportPage = () => {
  return (
    <>
      <div className={s.wrap}>
        <section className={s.reportInfo_section}>
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

            <div className={s.section_categories}>
              <div className={s.report_switch_wrap}>
                <div className={s.cost_incomes_wrap}>
                  <button type="button" className={s.btn}>
                    <svg viewBox="0 0 28.3 28.3" className={s.arrows}>
                      <use href={`${sprite}#arrow_left`} />
                    </svg>
                  </button>
                  <span className={s.cost_incomes}>Расходы</span>
                  <button type="button" className={s.btn}>
                    <svg viewBox="0 0 28.3 28.3" className={s.arrows}>
                      <use href={`${sprite}#arrow_rigth`} />
                    </svg>
                  </button>
                </div>
                <CategoryList />
              </div>
            </div>
          </div>
          <div className={s.graph_dependency_wrap}></div>
        </section>
      </div>
    </>
  );
};

export default ReportPage;
