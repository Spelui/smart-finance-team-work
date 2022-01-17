import sprite from "../../images/sprite.svg";
import s from "./BackspaceBtn.module.scss";

const BackspaceBtn = () => {
  return (
    <div className={s.btnBackspace_wrap}>
      <button className={s.btn_backspace} type="button">
        <svg viewBox="0 0 28.3 28.3" className={s.img}>
          <use href={`${sprite}#backspace`} />
        </svg>
        <span className={s.text + " " + s.hidden_text}>
          Вернуться на главную
        </span>
      </button>
    </div>
  );
};

export default BackspaceBtn;
