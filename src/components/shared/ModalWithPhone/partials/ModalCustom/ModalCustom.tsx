import React, { useState } from 'react';

import cx from './index.module.scss';

export const ModalCustom = () => (
	// const openModal = () => setOpenModal(true);
	// const closeModal = () => setOpenModal(false);
	<div className={cx('ModalContent')}>
		{/* <div className={cx('ModalClose')} onClick={closeModal}>
			&cross;
		</div> */}
		<form className={cx('Form')}>
			<h2>Запись на прием</h2>
			<div className={cx('FormField')}>
				<div className={cx('FormFieldLabel')}>Выберите удобную дату</div>
				<select name="hero">
					<option disabled>Выберите героя</option>
					<option value="Чебурашка">Чебурашка</option>
					<option selected value="Крокодил Гена">
						Крокодил Гена
					</option>
					<option value="Шапокляк">Шапокляк</option>
					<option value="Крыса Лариса">Крыса Лариса</option>
				</select>
			</div>
			<div className={cx('FormField')}>
				<div className={cx('FormFieldLabel')}>Выберите услугу</div>
				<input type="date" />
			</div>
			<div className={cx('FormField')}>
				<div className={cx('FormFieldLabel')}>Ваше Имя</div>
				<input type="text" />
			</div>
			<div className={cx('FormField')}>
				<div className={cx('FormFieldLabel')}>Контактный телефон</div>
				<input type="text" />
			</div>
			<button type="submit">Записаться</button>
			<a href="tel:+79256553328">+7-925-655-33-28</a>
		</form>
	</div>
);
