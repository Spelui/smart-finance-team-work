import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authOperations } from "../../redux/auth";
import { authSelectors } from "../../redux/auth";

import s from "./Balance.module.scss";

const Balance = () => {

  const mustBeShown = useSelector(authSelectors.isFirstLogin);
  const balance = useSelector(authSelectors.getBalance);

  const dispatch = useDispatch();
  const [newBalance, setBalance] = useState(null);

  const handleChange = ({ target: { value } }) => {
    return setBalance(+value);
  };

  const clickHandle = async (e) => {
    e.preventDefault();
    await dispatch(authOperations.setBalance({ newBalance }));
  };

  console.log(mustBeShown);
  

  return (
    <div className={s.balance}>
      <p className={s.balance__title}>Баланс:</p>
      <form  className={s.balance__form}>
        {mustBeShown ? <input
          
          className={s.balance__input}
          type="text"
          placeholder={`${balance || '00.00'} UAH`}
          onChange={handleChange}
        /> :
        <input
          disabled
          className={s.balance__input}
          type="text"
          placeholder={`${balance || '00.00'} UAH`}
        />
        }
        {mustBeShown && <button onClick={clickHandle} type='button' className={s.balance__btn}>Подтвердить</button>}
      </form>
    </div>
  );
};

export default Balance;
