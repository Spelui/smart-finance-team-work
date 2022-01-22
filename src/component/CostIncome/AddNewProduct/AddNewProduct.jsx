import Calculator from "./calculator.svg";
import styles from "./AddNewProduct.module.scss";
import { useState, useEffect } from "react";
import {
  getIncome,
  addIncome,
  getCategories,
} from "../../../redux/transactions/transactionsOperation.js";
import { useDispatch, useSelector } from "react-redux";
import Calendar from "../../Calendar/Calendar";

const AddNewProduct = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.transactions.categories);
  const date = useSelector(
  (state) => state.transactions.date
  );
  const [disabledBtn, setDisabledBtn] = useState(true);


  useEffect(() => {
    dispatch(getCategories());
    dispatch(getIncome());
  }, [dispatch]);

  const handleBtnClear = (e) => {
    setAmount("");
    setDescription("");
    setCategory("");
    setDisabledBtn(true)

  };

  const handleInputChange = (e) => {
  if (description.length !== 0 && category !== "" ){
      setDisabledBtn(false)
    }
    const { name, value } = e.currentTarget;
    switch (name) {
      case "product":
        return setDescription(value);
      case "price":
        return setAmount(value);
      default:
        return;
    }
  };

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description === "" || amount === 0 || category === "")
      return;

    const newOperation = {
      category,
      description,
      amount: Number(amount),
      date,
    };

    dispatch(addIncome(newOperation)).then(() => dispatch(getIncome()));
    handleBtnClear();
    setDisabledBtn(true)

  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.imputForm}>
        <Calendar />
        <input
          className={styles.formInput}
          type="text"
          value={description}
          name="product"
          onChange={handleInputChange}
          placeholder="Описание товара"
          maxLength="20"
          minLength="3"
          size="20"
          required
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"

        />
        <select
          className={styles.formSelect}
          value={category}
          label="Category"
          onChange={handleChange}
          name="category"
          required
        >
          <option value="">Категория дохода</option>
          {categories.map((categorie) => (
            <option key={categorie} value={categorie}>
              {categorie}
            </option>
          ))}
        </select>
        <input
          type="number"
          required
          min="1"
          className={styles.formSpan}
          name="price"
          onWheelCapture={(e) => {
            e.target.blur();
          }}
          onChange={handleInputChange}
          value={amount}
          placeholder="0.00"
        />

        <img
          className={styles.formCalculator}
          src={Calculator}
          alt=""
          width="20"
        />
      </div>
      <div className={styles.AddNewProductBtmDiv}>
        <button type="submit" disabled={ disabledBtn} className={styles.AddNewProductBtm}>
          <span className={styles.AddNewProductBtmSpan}>ВВОД</span>
        </button>
        <button
          type="button"
          onClick={handleBtnClear}
          className={styles.AddNewProductBtm}
        >
          <span className={styles.AddNewProductBtmSpan}>ОЧИСТИТЬ</span>
        </button>
      </div>
    </form>
  );
};

export default AddNewProduct;
