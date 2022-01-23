import PropTypes from "prop-types";
import styles from "./Calendar.module.scss";
import CalendarSvg from "./calendar.svg";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { setDate } from "../../redux/transactions/transactionsSlice";
import { useDispatch } from "react-redux";
import "react-calendar/dist/Calendar.css";
import { utils } from "../../utils";

const CalendarNew = () => {
  const dispatch = useDispatch();
  const [date, onChange] = useState(new Date());
  const [show, setShow] = useState(false);
  const data = utils.normalizeDate(date);

  const keyCloseCalendar = (e) => {
    if (e.code === "Escape") {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", keyCloseCalendar);
    return () => {
      window.removeEventListener("keydown", keyCloseCalendar);
    };
  }, []);

  useEffect(() => {
    dispatch(setDate(data));
  }, [data, dispatch]);

  function toggleCalendar() {
    return setShow(!show);
  }

  return (
    <div className={styles.calendar}>
      <img
        className={styles.calendarImg}
        onClick={toggleCalendar}
        src={CalendarSvg}
        alt=""
        width="20"
      />
      <p className={styles.calendarDate} onClick={toggleCalendar}>
        {data}
      </p>
      {show && (
        <Calendar
          onChange={onChange}
          value={date}
          maxDate={new Date("2022-12-31")}
          className="react-calendar-style"
        />
      )}
    </div>
  );
};

Calendar.propTypes = {};

export default CalendarNew;
