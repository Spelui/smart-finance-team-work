import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import s from "./CategoryList.module.scss";
import { categories, incomes } from "./categoriesIcons";

const CategoryList = () => {
  const incomesList = useSelector((state) => state.user.incomeCategories);
  const expenseList = useSelector((state) => state.user.expenseCategories);
  // amount: 100;
  // category: "Продукты";
  // date: "2020-12-31";
  // description: "Expense description";
  // _id: "61e5f96d38e99a6e6d8ac442";

  return (
    <ul className={s.list}>
      {
        expenseList &&
          expenseList.map((item, index) => {
            // const svg = categories.map;
            return (
              <li key={index} className={s.item}>
                <span>5000.00</span>
                <div className={s.link}>
                  <svg viewBox="0 0 32 32" className={s.img}>
                    <use href={categories[index].svg} />
                  </svg>
                  <div className={s.rectangle_icon}></div>
                </div>
                <span>{item}</span>
              </li>
            );
          })
        // : incomesList.map((item, index) => {
        //     return (
        //       <li key={index} className={s.item}>
        //         <span>5000.00</span>
        //         <div className={s.link}>
        //           <svg viewBox="0 0 32 32" className={s.img}>
        //             <use href={incomes[index].svg} />
        //           </svg>
        //           <div className={s.rectangle_icon}></div>
        //         </div>
        //         <span>{item}</span>
        //       </li>
        //     );
        //   })
      }
    </ul>
  );
};

export default CategoryList;
