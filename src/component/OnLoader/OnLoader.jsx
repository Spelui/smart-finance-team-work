import s from "./OnLoader.module.scss";

const OnLoader = () => {
  return (
    <div className={s.backDrop}>
      <div className={s.loader}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default OnLoader;
