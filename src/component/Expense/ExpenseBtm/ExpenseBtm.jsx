import styles from './ExpenseBtm.module.scss';
import PropTypes from 'prop-types';

const ExpenseBtm = ({ textBtm }) => {
  return (
    <>
      <button type="button" className={styles.ExpenseButton}>{textBtm}</button>
    </>
  );
};

ExpenseBtm.propTypes = {
  textBtm: PropTypes.string.isRequired,
};
export default ExpenseBtm;