import CostIncomeBtmMob from "./CostIncomeBtmMob/CostIncomeBtmMob";
import styles from "./CostIncome.module.scss";
import CostIncomeItem from "./CostIncomeItem/CostIncomeItem";
import Calendar from "./Calendar/Calendar";
import AddNewProduct from "./AddNewProduct/AddNewProduct";
import AddNewProductBtm from "./AddNewProductBtm/AddNewProductBtm";
import CostIncomeTitle from "./CostIncomeTitle/CostIncomeTitle";
import Summary from "../Summary/Summary";
import CostIncomeBtm from "./CostIncomeBtm/CostIncomeBtm";
import { Link,NavLink } from "react-router-dom";
import Balance from "../Balance";

const CostIncome = () => {
  return (
    <section className="background">
      <Balance />
      <div className={styles.CostIncomeBtmMob}>
        <CostIncomeBtmMob textBtm='Доход'/>
        <CostIncomeBtmMob textBtm='Расход' />
      </div>
      {/* <div className={"container"} ></div> */}
      <div className={styles.CostIncomeConteiner}>
        <div className={styles.AddNewProduc}>
          <div className={styles.CostIncomeForm}>
            {/* <Calendar /> */}
            <AddNewProduct />
          </div>
          {/* <div className={styles.AddNewProductBtm}>
            <AddNewProductBtm textBtm="ВВОД" />
            <AddNewProductBtm textBtm="ОЧИСТИТЬ" />
          </div> */}
        </div>

          <div className={styles.CostIncomeWrapper}>
          <div className={styles.Cost}>
        <CostIncomeTitle />
        <div className={styles.CostIncomeContent}>
          <CostIncomeItem />
          <div className={styles.CostIncomeContentBorder}></div>
        </div>
          </div>

          <div className={styles.SummaryWrapper}>
          <Summary />
          </div>
          </div>


      </div>
    

        </section>
  );
};

export default CostIncome;
