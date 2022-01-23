import { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import CategoryList from "../../component/CategoryList";
import BackspaceBtn from "../../component/BackspaceBtn";
import ReportSwitcher from "../../component/ReportSwitcher/ReportSwitcher";
import ReportInfo from "../../component/ReportInfo/ReportInfo";
import CurrentPeriod from "../../component/CurrentPeriod/CurrentPeriod";
import GraphicComponent from "../../component/GraphicComponent";
import { getPeriodData } from "../../redux/user/user-operations";
import { utils } from "../../utils";
import { ThemeContext, themes } from "../../context/themeContext";
import s from "./ReportPage.module.scss";

// import { getExpense } from "../../redux/transactions/transactionsOperation";

//

const ReportPage = () => {
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext);
  const [reportTitle, setReportTitle] = useState("расходы");
  const [reportGraphObj, setReportGraphObj] = useState({});
  const [categoryName, setCategoryName] = useState("");
  const [showGraph, setShowGraph] = useState(false);
  const balance = useSelector((state) => state.auth?.user?.balance);
  const date = useSelector((state) => state.transactions.date);
  const months = useSelector((state) => state.transactions.month);
  // console.log("datesCP :>> ", date);
  const dataMonths = months === {} ? null : months;
  const normalizedDate = date ? date.slice(0, 7) : null;
  const currentDate = utils.normalizeDate(new Date());

  const getGraphObj = (obj, name) => {
    setShowGraph(true);
    setReportGraphObj(obj);
    setCategoryName(name);
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
    // window.scrollBy({
    //   top: cardHeight * 2,
    //   behavior: "smooth",
    // });
  };

  const reportTitleChange = () => {
    setReportTitle(reportTitle === "расходы" ? "доходы" : "расходы");
    setShowGraph(false);
  };
  // useEffect(() => {
  //   if (!dataMonts) {
  //   }
  // }, [dataMonts, dispatch]);

  useEffect(() => {
    if (!normalizedDate) {
      dispatch(getPeriodData(currentDate.slice(0, 7)));
    } else dispatch(getPeriodData(normalizedDate));
  }, [currentDate, dispatch, normalizedDate]);
  return (
    <>
      <section
        className={`${s.reportInfo_section} background ${
          theme === themes.light ? "lightTheme" : s.darkTheme
        }`}
      >
        <div className={s.wrap}>
          <div className={s.report_head_wrap}>
            <CurrentPeriod
              monthsStat={dataMonths}
              // date={date === null ? currentDate : date}
            />
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

          <div className={s.graph_dependency_wrap}>
            <GraphicComponent
              obj={reportGraphObj}
              categoryName={categoryName}
              show={showGraph}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ReportPage;
