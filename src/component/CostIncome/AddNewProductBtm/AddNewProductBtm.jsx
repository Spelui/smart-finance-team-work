import styles from './AddNewProductBtm.module.scss';

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

export default AddNewProductBtm;