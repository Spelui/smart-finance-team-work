import React from 'react';
import s from './CategoryList.module.scss';
import { categories } from './categoriesIcons';
const CategoryList = () => {
  return (
    <ul className={s.list}>
      {categories.map(({ name, svg }) => (
        <li className={s.item}>
          <span>5000.00</span>
          <div className={s.link}>
            <svg viewBox="0 0 32 32" className={s.img}>
              <use href={svg} />
            </svg>
            <div className={s.rectangle_icon}></div>
          </div>
          <span>{name}</span>
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
