import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Calculator from "./calculator.svg";
import styles from "./AddNewProduct.module.scss";
import { authOperations } from "../../../redux/auth";
import {
  getExpense,
  addExpense,
  deleteExpense,
  getCategoriesExpense,
} from "../../../redux/transactions/transactionsOperation.js";
import Calendar from "../../Calendar/Calendar";

const AddNewProduct = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
  const categoriesExpense = useSelector(
    (state) => state.transactions.categoriesExpense
  );
  const date = useSelector((state) => state.transactions.date);

  useEffect(() => {
    dispatch(getCategoriesExpense());
    dispatch(getExpense());
  }, [dispatch]);

  const handleBtnClear = (e) => {
    setAmount("");
    setDescription("");
    setCategory("");
  };

  const handleInputChange = (e) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const newOperation = {
      category,
      description,
      amount: Number(amount),
      date,
    };

    dispatch(addExpense(newOperation)).then(() => {
      // console.log("Fetch before actual information :>> ");
      dispatch(authOperations.fetchCurrentUser());
      dispatch(getExpense());
    });
    handleBtnClear();
  };

  const handleChange = (event) => {
    setCategory(event.target.value);
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
          required
        >
          <option value="hide">Категория товара</option>
          {categoriesExpense?.map((categorie) => (
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
        <button type="submit" className={styles.AddNewProductBtm}>
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
