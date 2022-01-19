import PropTypes from "prop-types";
import styles from "./Calendar.module.scss";
import CalendarSvg from "./calendar.svg";

const Calendar = () => {
  const date = new Date();
  const padNum = (num) => String(num).padStart(2, 0);
  const day = padNum(date.getDate());
  const month = padNum(date.getMonth() + 1);
  const year = padNum(date.getFullYear());
  return (
    <div className={styles.calendar}>
      <img className={styles.calendarImg} src={CalendarSvg} alt="" width="20" />
      <p className={styles.calendarDate}>{`${day}.${month}.${year}`}</p>
    </div>
  );
};

Calendar.propTypes = {};

export default Calendar;
