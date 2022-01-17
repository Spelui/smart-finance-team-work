import styles from './CostIncomeBtm.module.scss';
import PropTypes from 'prop-types';

const CostIncomeBtm = ({ textBtm }) => {
  return (
    <>
      <button type="button" className={styles.CostIncomeButton}>{textBtm}</button>
    </>
  );
};

CostIncomeBtm.propTypes = {
  textBtm: PropTypes.string.isRequired,
};
export default CostIncomeBtm;