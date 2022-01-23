const normalizeDate = (dateToFormat) => {
  const padNum = (num) => String(num).padStart(2, 0);
  const day = padNum(dateToFormat.getDate());
  const month = padNum(dateToFormat.getMonth() + 1);
  const year = padNum(dateToFormat.getFullYear());
  const date = `${year}-${month}-${day}`;
  return date;
};
const months = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];
const transDate = () => {
  const currentYear = new Date().getFullYear().toString();
  const newDateMonth = new Date().getMonth();
  const transMonts = months.find((item, index) => index === newDateMonth);
  return `${transMonts} ${currentYear}`;
};

const utils = { normalizeDate, months, transDate };
export default utils;
//
