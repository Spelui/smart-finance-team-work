import Calculator from "./calculator.svg";
import styles from "./AddNewProduct.module.scss";
import { useState, useEffect } from "react";
import {
  getIncome,
  addIncome,
  getCategories,
} from "../../../redux/transactions/transactionsOperation.js";
import { useDispatch, useSelector } from "react-redux";
import Calendar from "../Calendar/Calendar";

const AddNewProduct = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.transactions.categories);

  // console.log("AddNewProduct ~ categories", categories)

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getIncome());
  }, [dispatch]);

  const handelSubmit = (e) => {
    e.preventDefault();
  };

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
      date: "2020-12-31",
    };

    dispatch(addIncome(newOperation));
    setAmount("");
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
        />
        <select
          className={styles.formSelect}
          value={category}
          label="Category"
          onChange={handleChange}
        >
          <option value="hide">Категория товара</option>
          {categories.map((categorie) => (
            <option key={categorie} value={categorie}>
              {categorie}
            </option>
          ))}
        </select>
        <input
          type="number"
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
