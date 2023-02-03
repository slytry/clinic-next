import cn from 'classnames/bind';
import React, {useState} from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import Modal from 'react-modal';

import styles from './ModalCustom.module.scss';

const cx = cn.bind(styles);

const ModalCustom = ({isOpenModal, setOpenModal}) => {
  const openModal = () => setOpenModal(true);
  const closeModal = () =>  setOpenModal(false);
  return (
      <div>
        <Modal
            isOpen={isOpenModal}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            className={cx('Modal')}
            overlayClassName={cx('Overlay')}
        >
          <div className={cx('ModalContent')}>
          <div className={cx('ModalClose')} onClick={closeModal}>

            &cross;
          </div>
            <form className={cx('Form')}>
              <h2>Запись на прием</h2>
              <div className={cx('FormField')}>
                <div className={cx('FormFieldLabel')}>
                  Выберите удобную дату
                </div>
                <select name="hero">
                  <option disabled>Выберите героя</option>
                  <option value="Чебурашка">Чебурашка</option>
                  <option selected value="Крокодил Гена">Крокодил Гена</option>
                  <option value="Шапокляк">Шапокляк</option>
                  <option value="Крыса Лариса">Крыса Лариса</option>
                </select>
              </div>
              <div className={cx('FormField')}>
                <div className={cx('FormFieldLabel')}>
                  Выберите услугу
                </div>
                <input type="date"/>
              </div>
              <div className={cx('FormField')}>
                <div className={cx('FormFieldLabel')}>
                  Ваше Имя
                </div>
                <input type="text"/>
              </div>
              <div className={cx('FormField')}>
                <div className={cx('FormFieldLabel')}>
                  Контактный телефон
                </div>
                <input type="text"/>
              </div>
              <button type='submit'>
                Записаться
              </button>
              <a href="tel:+79256553328">+7-925-655-33-28</a>
            </form>
          </div>
        </Modal>
      </div>

  );
};

export default ModalCustom;