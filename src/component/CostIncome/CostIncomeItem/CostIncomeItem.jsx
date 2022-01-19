// import PropTypes from 'prop-types';
import styles from './CostIncomeItem.module.scss';
import Delete from './delete.svg';
import { useDispatch, useSelector } from "react-redux";
import { deleteIncom } from '../../../redux/transactions/transactionsOperation';
import { useState, useEffect } from 'react';
import { getIncome, addIncome, getCategories } from '../../../redux/transactions/transactionsOperation.js';

  



const CostIncomeItem = () => {
  const dispatch = useDispatch()
  const incomes = useSelector(state => state.transactions.items)

  useEffect(() => {
    dispatch(getIncome());
  }, [dispatch])
  
  const onDelete = (id) => () => {
  dispatch(deleteIncom(id));
  };
  return (
  <>
      {incomes?.map(({ _id, category,date, amount, description}) =>   
    <div key={_id} className={styles.item}>
      <div  className={styles.itemTransaction}>
        <p className={styles.productCategoryItemMob}>{category}</p>
        <div className={styles.dateType}>
          <p className={styles.productDate}>{date}</p>
          <p className={styles.productCategoryItem}>{description}</p>
          <p className={styles.productCategory}>{category}</p>
        </div>
      </div>
      <p className={styles.productSum}>{amount} грн.</p>
      <img src={Delete} alt='' width='18' onClick={onDelete(_id)}/>
    </div>
      )}
      </>
  );
};

CostIncomeItem.propTypes = {
  
};

export default CostIncomeItem;