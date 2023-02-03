import * as Dialog from "@radix-ui/react-dialog";
import cn from 'classnames/bind';
import React from "react";

import {LinkIntoView} from '../../base/LinkIntoView/LinkIntoView';

import styles from './Sidebar.module.scss';

const cx = cn.bind(styles);

interface SidebarProp {
  email: string;
  password: string;
}

export const Sidebar = ({isOpen, setOpen, setOpenModal}) => {
  const toggleSidebar = () => setOpen(false)
  const openModal = () => setOpenModal(true)

  return (
      <div className={cx('Sidebar', {SidebarActive: isOpen})}>
        <nav>
          <ul className={cx('SidebarMenu')}>
            <li className={cx('SidebarMenuItem')}>
              <LinkIntoView onClick={toggleSidebar} href="#promo">Новости и акции</LinkIntoView>
            </li>
            <li className={cx('SidebarMenuItem')}>
              <LinkIntoView onClick={toggleSidebar} href="#contacts">Контакты</LinkIntoView>
            </li>
          </ul>
        </nav>
        <div className={cx('SidebarBottom')}>
          <a href="tel:+79256553328">+7-925-655-33-28</a>
          <button onClick={openModal}>Запись на прием</button>
        </div>
      </div>
  );
}
