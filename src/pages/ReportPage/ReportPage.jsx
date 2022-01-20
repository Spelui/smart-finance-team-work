// import sprite from "../../images/sprite.svg";
import CategoryList from "../../component/CategoryList";
import BackspaceBtn from "../../component/BackspaceBtn";
import ReportSwitcher from "../../component/ReportSwitcher/ReportSwitcher";
import ReportInfo from "../../component/ReportInfo/ReportInfo";
import CurrentPeriod from "../../component/CurrentPeriod/CurrentPeriod";
import GraphicComponent from "../../component/GraphicComponent";

import s from "./ReportPage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getPeriodData } from "../../redux/user/user-operations";
//

const ReportPage = () => {
  const [reportTitle, setReportTitle] = useState("расходы");
  const [reportGraphObj, setReportGraphObj] = useState({});

  const balance = useSelector((state) => state.auth?.user?.balance);

  const getGraphObj = (obj) => {
    setReportGraphObj(obj);
  };

  const reportTitleChange = () => {
    setReportTitle(reportTitle === "расходы" ? "доходы" : "расходы");
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPeriodData("2022-01"));
  }, [dispatch]);
  return (
    <>
      <section className={`${s.reportInfo_section} background`}>
        <div className={s.wrap}>
          <div className={s.backgroundTest}>
            <div className={s.report_head_wrap}>
              <CurrentPeriod />
              <div className={s.reportBalance_wrap}>
                <span className={s.balanceText}>Баланс:</span>
                <span className={s.balanceNumber}>{`${balance}.00`} uah</span>
              </div>
              <BackspaceBtn />
            </div>
            <ReportInfo />
            <div className={s.section_categories}>
              <div className={s.report_switch_wrap}>
                <ReportSwitcher
                  reportTitle={reportTitle}
                  change={reportTitleChange}
                />
                <CategoryList
                  reportTitle={reportTitle}
                  setGraphObj={getGraphObj}
                />
              </div>
            </div>
          </div>
          <div className={s.graph_dependency_wrap}>
            <GraphicComponent obj={reportGraphObj} />
          </div>
        </div>
      </section>
    </>
  );
};

export default ReportPage;
