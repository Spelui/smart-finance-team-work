import styles from './CostIncomeBtmMob.module.scss';

const CostIncomeBtmMob = ({ textBtm }) => {
  return (
    <>
      <button type="button" className={styles.CostIncomeButton}>{textBtm}</button>
      {/* <button type="button">Расход</button>
      <button type="button">Доход</button> */}
    </>
  );
};

export default CostIncomeBtmMob;