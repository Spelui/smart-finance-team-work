import PropTypes from "prop-types";
import styles from "./Calendar.module.scss";
import CalendarSvg from "./calendar.svg";
import  { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarNew = () => {
  const [value, onChange] = useState(new Date());
  const [show, setShow] = useState(false);
  const date = new Date();
  const padNum = (num) => String(num).padStart(2, 0);
  const day = padNum(date.getDate());
  const month = padNum(date.getMonth() + 1);
  const year = padNum(date.getFullYear());

   function clickHandle (){
     return setShow(!show)
  }
  
  return (
    <div className={styles.calendar}>
      <img className={styles.calendarImg} onClick={clickHandle} src={CalendarSvg} alt="" width="20" />
      <p className={styles.calendarDate} onClick={clickHandle}>{`${day}.${month}.${year}`}</p>
      {show && <Calendar
        onChange={onChange}
        value={value}
        maxDate={new Date()}
        className="react-calendar-style"
      />}
    </div>
  );

};

Calendar.propTypes = {};

export default CalendarNew;
