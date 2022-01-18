import { useState } from "react";
import { useDispatch } from "react-redux";
import { balanceOperations } from "../../redux/balance";

import s from "./Balance.module.scss";

const Balance = () => {

  const dispatch = useDispatch();
  const [balance, setBalance] = useState(null);

  const handleChange = ({ target: { value } }) => {
    return setBalance(+value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(balanceOperations.setBalance({ balance }));
  };

  

  return (
    <div className={s.balance}>
      <p className={s.balance__title}>Баланс:</p>
      <form onSubmit={handleSubmit} className={s.balance__form}>
        <input
          className={s.balance__input}
          type="text"
          placeholder={`${balance || '00.00'} UAH`}
          onChange={handleChange}
        />
        <button type='submit' className={s.balance__btn}>Подтвердить</button>
      </form>
    </div>
  );
};

export default Balance;
