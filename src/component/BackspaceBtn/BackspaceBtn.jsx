import { useNavigate } from "react-router-dom";

import sprite from "../../images/sprite.svg";
import s from "./BackspaceBtn.module.scss";

const BackspaceBtn = () => {
  const navigate = useNavigate();
  console.dir(navigate);

  const clickBackBtn = () => {
    navigate("/transaction");
  };
  return (
    <div className={s.btnBackspace_wrap}>
      <button className={s.btn_backspace} type="button" onClick={clickBackBtn}>
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
