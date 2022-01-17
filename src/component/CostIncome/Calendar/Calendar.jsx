import PropTypes from 'prop-types';
import styles from './Calendar.module.scss';
import CalendarSvg  from './calendar.svg';


const Calendar = () => {
  return (
      <div className={styles.calendar}>
        <img className={styles.calendarImg} src={CalendarSvg} alt='' width='20' />
        <p className={styles.calendarDate}>21.11.2019</p>
      </div >
  );
};

Calendar.propTypes = {
  
};

export default Calendar;