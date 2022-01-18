import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../../redux/auth";

import s from "./Balance.module.scss";

const Balance = () => {

  const dispatch = useDispatch();
  const [newBalance, setBalance] = useState(null);

  const handleChange = ({ target: { value } }) => {
    return setBalance(+value);
  };

  const clickHandle = async (e) => {
    e.preventDefault();
    await dispatch(authOperations.setBalance({ newBalance }));
  };

  

  return (
    <div className={s.balance}>
      <p className={s.balance__title}>Баланс:</p>
      <form  className={s.balance__form}>
        <input
          className={s.balance__input}
          type="text"
          placeholder={`${newBalance || '00.00'} UAH`}
          onChange={handleChange}
        />
        <button onClick={clickHandle} type='button' className={s.balance__btn}>Подтвердить</button>
      </form>
    </div>
  );
};

export default Balance;
