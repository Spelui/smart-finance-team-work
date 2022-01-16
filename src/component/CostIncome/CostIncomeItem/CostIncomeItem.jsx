// import PropTypes from 'prop-types';
import styles from './CostIncomeItem.module.scss';
import Delete  from './delete.svg';


const CostIncomeItem = () => {
  return (
    <div className={styles.item}>
      <div  className={styles.itemTransaction}>
        <p className={styles.productCategoryItemMob}>Метро</p>
        <div className={styles.dateType}>
          <p className={styles.productDate}>05.09.2019</p>
          <p className={styles.productCategoryItem}>Метро</p>
          <p className={styles.productCategory}>Транспорт</p>
        </div>
      </div>
      <p className={styles.productSum}>- 30.00 грн.</p>
      <img src={Delete} alt='' width='18' />
    </div>
  );
};

CostIncomeItem.propTypes = {
  
};

export default CostIncomeItem;