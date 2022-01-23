import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getCategoriesExpense, getIncome, getExpense, addExpense, addIncome } from '../../../redux/transactions/transactionsOperation';

import sprite from '../../../images/sprite.svg'
import s from './MobileForm.module.scss'

export const MobileForm = ({transaction}) => {

  const isIncome = transaction === 'income';

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const incomeCategories = useSelector((state) => state.transactions.categories);
  const expenseCategories = useSelector((state) => state.transactions.categoriesExpense);

  const date = useSelector(
    (state) => state.transactions.date
  );

   useEffect(() => {
     dispatch(getCategories());
         dispatch(getCategoriesExpense());
  }, [dispatch]);

  const goBackHandler = () => {
    navigate('/homepage')
  };

  const resetInputs = (e) => {
    setAmount("");
    setDescription("");
    setCategory("");
  };

  const onChangeInput = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "product":
        return setDescription(value);
      case "price":
        return setAmount(value);
      
      default: break;
    }
  };

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (description === "" || amount === "" || category === "Категория товара")
      return;

    const newOperation = {
      category,
      description,
      amount: Number(amount),
      date,
    };

    if (isIncome) {
      dispatch(addIncome(newOperation)).then(() => dispatch(getIncome()));  
    } else {
      dispatch(addExpense(newOperation)).then(() => dispatch(getExpense()));
    }
    resetInputs();
    goBackHandler();
  };

  return <section className='background'>
    <div className='container'>
      <div className={s.transactionadd__wrapper}>
        <button onClick={goBackHandler} className={s.goback}>
        <svg width="24" height="24" className={s.homepage__logo}>
          <use href={`${sprite}#mob-goback`}></use>
        </svg>
        </button>
        <form className={s.transactionadd__form}>
          <input
            className={s.transactionadd__description}
            type="text"
            value={description}
            name="product"
            onChange={onChangeInput}
            placeholder="Описание товара"
            maxLength="20"
            minLength="3"
            size="20"
            required
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          />
          <select
            className={s.transactionadd__select}
            value={category}
            label="Category"
            onChange={handleChange}
            >
            <option value="hide">Категория товара</option>
            {(isIncome ? incomeCategories : expenseCategories).map((categorie) => (
              <option key={categorie} value={categorie}>
                {categorie}
              </option>
            ))}
          </select>
          <div className={s.transactionadd__amountwrapper}>
            <input
              type="number"
              required
              min="1"
              className={s.transactionadd__amount}
              name="price"
              onWheelCapture={(e) => {
                e.target.blur();
              }}
              onChange={onChangeInput}
              value={amount}
              placeholder="00.00 UAH"
            />
            <div className={s.transactionadd__iconwrapper}>
              <svg width="20" height="20" className={s.transactionadd__icon}>
                <use href={`${sprite}#calculator`}></use>
              </svg>
            </div>
          </div>
          
        </form>

        <div className={s.transactionadd__btnwrapper}>
          <button className={s.transactionadd__btn} type='button' onClick={submitHandler}>Ввод</button>
          <button className={s.transactionadd__btn} type='button' onClick={()=> resetInputs()}>Очистить</button>
        </div>
      </div>
    </div>
  </section>;
};
