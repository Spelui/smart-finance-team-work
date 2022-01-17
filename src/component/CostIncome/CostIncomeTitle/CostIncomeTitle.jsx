import styles from './CostIncomeTitle.module.scss';

const CostIncomeTitle = ({ textBtm }) => {
  return (
    <div className={styles.CostIncomeTitle}>
      <p className={styles.CostIncomeTitleDate}>Дата</p>
      <p className={styles.CostIncomeTitleDescription}>Описание</p>
      <p className={styles.CostIncomeTitleCategory}>Категория</p>
      <p className={styles.CostIncomeTitleSum}>Сумма</p>
    </div>
  );
};

export default CostIncomeTitle;