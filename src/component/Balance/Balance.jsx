import s from "./Balance.module.scss";

const Balance = () => {
  return (
    <div className={s.balance}>
      <p className={s.balance__title}>Баланс:</p>
      <form className={s.balance__form}>
        <input
          className={s.balance__input}
          type="number"
          step=".01"
          placeholder="00.00 UAH"
        />
        <button type="submit" className={s.balance__btn}>
          Подтвердить
        </button>
      </form>
    </div>
  );
};

export default Balance;
