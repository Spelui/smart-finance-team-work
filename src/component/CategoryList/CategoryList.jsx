import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import s from "./CategoryList.module.scss";
import { categories, incomes } from "./categoriesIcons";
import amount from "../../redux/user/user-selectors";
import { ThemeContext, themes } from "../../context/themeContext";

const CategoryList = ({ reportTitle, setGraphObj, active }) => {
  const incomesObj = useSelector(amount.payment);
  const expenseObj = useSelector(amount.expenses);
  const { theme } = useContext(ThemeContext);
  // const [active, setActive] = useState(false);
  // const activeCategoryToggle = () => {
  //   console.log("Click :>> ");
  //   setActive(!active);
  // };

  const incomesListValues =
    incomesObj === undefined ? [] : Object.values(incomesObj);
  const incomesListTitles =
    incomesObj === undefined ? [] : Object.keys(incomesObj);

  const expenseListValues =
    expenseObj === undefined ? [] : Object.values(expenseObj);
  const expenseListTitles =
    expenseObj === undefined ? [] : Object.keys(expenseObj);

  return (
    <ul
      className={`${s.list} ${
        theme === themes.light ? "lightTheme" : s.darkTheme
      }`}
    >
      {reportTitle === "доходы"
        ? incomesListValues
            // .sort((a, b) => b.total - a.total)
            .map((item, index) => {
              const filteredIcon = incomes.find(
                ({ name }) =>
                  incomesListTitles[index].toString() === name.toString()
              );
              return (
                <li
                  key={index}
                  className={`${s.item} ${active ? s.active : ""}`}
                  onClick={() => {
                    console.log("Click2 :>> ");
                    // activeCategoryToggle();
                    setGraphObj(item, incomesListTitles[index]);
                  }}
                >
                  <span>{`${item.total}.00`}</span>
                  <div className={s.link}>
                    <svg viewBox="0 0 32 32" className={s.img}>
                      <use href={filteredIcon.svg} />
                    </svg>
                    <div className={s.rectangle_icon}></div>
                  </div>
                  <span>{incomesListTitles[index]}</span>
                </li>
              );
            })
        : expenseListValues
            // .sort((a, b) => b.total - a.total)
            .map((item, index) => {
              const filteredIcon = categories.find(
                ({ name }) =>
                  expenseListTitles[index].toString() === name.toString()
              );
              return (
                <li
                  key={index}
                  className={s.item}
                  onClick={() => setGraphObj(item, expenseListTitles[index])}
                >
                  <span>{`${item.total}.00`}</span>
                  <div className={s.link}>
                    <svg viewBox="0 0 32 32" className={s.img}>
                      <use href={filteredIcon.svg} />
                    </svg>
                    <div className={s.rectangle_icon}></div>
                  </div>
                  <span>{expenseListTitles[index]}</span>
                </li>
              );
            })}
    </ul>
  );
};

export default CategoryList;
