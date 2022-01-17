import styles from './AddNewProductBtm.module.scss';
import PropTypes from 'prop-types';


const AddNewProductBtm = ({ textBtm }) => {
  return (
    <>
      <button type="button" className={styles.AddNewProductBtm}>
        <span className={styles.AddNewProductBtmSpan}>{textBtm}</span></button>
      {/* <button type="button">Расход</button>
      <button type="button">Доход</button> */}
    </>
  );
};

AddNewProductBtm.propTypes = {
  textBtm: PropTypes.string.isRequired,
};

export default AddNewProductBtm;