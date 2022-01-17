import Calculator from "./calculator.svg";
import styles from "./AddNewProduct.module.scss";

const AddNewProduct = () => {
  return (
    <form className={styles.form}>
      <input
        className={styles.formInput}
        type="text"
        value=""
        onChange={"0"}
        placeholder="Описание товара"
      />
      <select className={styles.formSelect}>
        <option value="hide">Категория товара</option>
        <option value="hide">Алкоголь</option>
        <option value="hide">Пиво</option>
      </select>
      <p className={styles.formSpan}>0.00</p>
      <img
        className={styles.formCalculator}
        src={Calculator}
        alt=""
        width="20"
      />
    </form>
  );
};

export default AddNewProduct;
