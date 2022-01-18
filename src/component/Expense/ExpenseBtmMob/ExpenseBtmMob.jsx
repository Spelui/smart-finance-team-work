import styles from './ExpenseBtmMob.module.scss';
import PropTypes from 'prop-types';

const ExpenseBtmMob = ({ textBtm }) => {
  return (
    <>
      <button type="button" className={styles.ExpenseButton}>{textBtm}</button>
      {/* <button type="button">Расход</button>
      <button type="button">Доход</button> */}
    </>
  );
};

ExpenseBtmMob.propTypes = {
  textBtm: PropTypes.string.isRequired,
};

export default ExpenseBtmMob;