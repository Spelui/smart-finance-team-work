import styles from './ExpenseTitle.module.scss';

const ExpenseTitle = ({ textBtm }) => {
  return (
    <div className={styles.ExpenseTitle}>
      <p className={styles.ExpenseTitleDate}>Дата</p>
      <p className={styles.ExpenseTitleDescription}>Описание</p>
      <p className={styles.ExpenseTitleCategory}>Категория</p>
      <p className={styles.ExpenseTitleSum}>Сумма</p>
    </div>
  );
};

export default ExpenseTitle;