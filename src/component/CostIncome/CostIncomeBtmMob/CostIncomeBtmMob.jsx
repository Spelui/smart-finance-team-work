import styles from './CostIncomeBtmMob.module.scss';
import PropTypes from 'prop-types';

const CostIncomeBtmMob = ({ textBtm }) => {
  return (
    <>
      <button type="button" className={styles.CostIncomeButton}>{textBtm}</button>
      {/* <button type="button">Расход</button>
      <button type="button">Доход</button> */}
    </>
  );
};

CostIncomeBtmMob.propTypes = {
  textBtm: PropTypes.string.isRequired,
};

export default CostIncomeBtmMob;