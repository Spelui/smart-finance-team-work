import styles from './CostIncomeBtm.module.scss';

const CostIncomeBtm = ({ textBtm }) => {
  return (
    <>
      <button type="button" className={styles.CostIncomeButton}>{textBtm}</button>
    </>
  );
};

export default CostIncomeBtm;