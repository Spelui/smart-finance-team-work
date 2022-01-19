import ExpenseBtmMob from "./ExpenseBtmMob/ExpenseBtmMob";
import styles from "./Expense.module.scss";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import AddNewProduct from "./AddNewProduct/AddNewProduct";
import AddNewProductBtm from "./AddNewProductBtm/AddNewProductBtm";
import ExpenseTitle from "./ExpenseTitle/ExpenseTitle";
import ExpenseBtm from "./ExpenseBtm/ExpenseBtm";
import Summary from "../Summary/Summary";

const Expense = () => {
  return (
    <div>
      {/* <div className={`container`}> */}
      <div className={styles.ExpenseConteiner}>
        {/* <div className={styles.ExpenseBtm}>
          <ExpenseBtm textBtm="РАСХОД" />
          <ExpenseBtm textBtm="ДОХОД" />
        </div> */}
        <div className={styles.AddNewProduc}>
          <div className={styles.ExpenseForm}>
            <AddNewProduct />
          </div>
        </div>

        <div className={styles.ExpenseWrapper}>
          <div className={styles.Exp}>
            <ExpenseTitle />
            <div className={styles.ExpenseContent}>
              <ExpenseItem />
              <div className={styles.ExpenseContentBorder}></div>
            </div>
          </div>
          <div className={styles.SummaryWrapper}>
            <Summary />
          </div>
        </div>
      </div>
      <div className={styles.ExpenseBtmMob}>
        <ExpenseBtmMob textBtm="Доход" />
        <ExpenseBtmMob textBtm="Расход" />
      </div>
      {/* </div> */}
    </div>
  );
};

export default Expense;
