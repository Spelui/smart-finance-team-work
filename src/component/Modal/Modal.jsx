import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useLockBodyScroll } from 'react-use';
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { authOperations } from "../../redux/auth";
import styles from './Modal.module.css';
import Close from "./Close.svg";


const modalRootRef = document.querySelector('#modal-root');

const Modal = ({ onClose, title, onDelete, deleteId, shouldLogOut = false }) => {

  useLockBodyScroll(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const onEscPress = e => {
      if (e.code === 'Escape') {
      onClose();
      }
    };
    window.addEventListener('keydown', onEscPress);
    return () => {
      window.removeEventListener('keydown', onEscPress);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal (
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <div className={styles.modal}>
        <img src={Close} alt="" width="12" onClick={onClose} className={styles.imgClose}/>
        <h3 className={styles.content}>{title}</h3>
        <div className={styles.modalBtm}>
          <button
            type="button"
            className={styles.btn}
            onClick={shouldLogOut ? () => dispatch(authOperations.loginOut()) : onDelete(deleteId)}
            //onClick={() => onDelete(deleteId)}
            //onClick={() => console.log(onDelete)}
          >
            ДА
          </button>
          <button
            type="button"
            className={styles.btn}
            onClick={onClose}
          >
            НЕТ
          </button>
        </div>
      </div>
    </div>,
    modalRootRef,
  );
};

Modal.propTypes = {
  onClose: PropTypes.func,
  title: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
  deleteId: PropTypes.string,
};

export default Modal;
