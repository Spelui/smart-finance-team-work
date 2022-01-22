// import PropTypes from 'prop-types';
import styles from "./CostIncomeItem.module.scss";
import Delete from "./delete.svg";
import { useDispatch, useSelector } from "react-redux";
import { deleteIncom } from "../../../redux/transactions/transactionsOperation";
import { useState, useEffect } from "react";
import { getIncome } from "../../../redux/transactions/transactionsOperation.js";
import Modal from "../../Modal/Modal";

const CostIncomeItem = () => {
  const dispatch = useDispatch();
  const incomes = useSelector((state) => state.transactions.items);
  const [isOpenedModal, setisOpenedModal] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const selectedDate = useSelector((state) => state.transactions.date);

  useEffect(() => {
    dispatch(getIncome());
  }, [dispatch]);

  const onDelete = (id) => () => {
    dispatch(deleteIncom(id)).then(() => dispatch(getIncome()));
    closeModal();
  };

  const closeModal = () => {
    setisOpenedModal(false);
    setDeleteId("");
  };

  const openModal = (id) => {
    setisOpenedModal(true);
    setDeleteId(id);
  };

  const filterForDate = () =>
    incomes?.filter(
      ({ _id, category, date, amount, description }) => date === selectedDate
    );

  return (
    <>
      {filterForDate().map(({ _id, category, date, amount, description }) => (
        <div key={_id} className={styles.item}>
          <div className={styles.itemTransaction}>
            <p className={styles.productCategoryItemMob}>{category}</p>
            <div className={styles.dateType}>
              <p className={styles.productDate}>{date}</p>
              <p className={styles.productCategoryItem}>{description}</p>
              <p className={styles.productCategory}>{category}</p>
            </div>
          </div>
          <p className={styles.productSum}>{amount} грн.</p>
          <img src={Delete} alt="" width="18" onClick={() => openModal(_id)} />
        </div>
      ))}
      {isOpenedModal && (
        <Modal
          title="Вы уверены?"
          onClose={closeModal}
          onDelete={onDelete}
          deleteId={deleteId}
        />
      )}
    </>
  );
};

CostIncomeItem.propTypes = {};

export default CostIncomeItem;
