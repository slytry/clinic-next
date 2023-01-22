import cn from 'classnames/bind';
import Link from 'next/link';

import { LinkIntoView } from '@/components/base/LinkIntoView';

import Logo from '@/public/icon/headerLogo.svg';

import styles from './Header.module.scss';

const cx = cn.bind(styles);

export const Header = () => (
	<header className={cx('Header')}>
		<Link href="/" className={cx('LogoLink')}>
			<Logo className={cx('LogoPicture')} alt="logo" />

			<p className={cx('LogoText')}>Медицинский центр</p>
			<p className={cx('LogoTextMob')}>Диагностический медицинский центр</p>
		</Link>

		<LinkIntoView href="#promo" className={cx('News')}>
			Новости и акции
		</LinkIntoView>

		<LinkIntoView href="#contacts" className={cx('Contacts')}>
			Контакты
		</LinkIntoView>

		<div className={cx('Number')}>
			<Link href="tel:+79256553328" className={cx('Phone')}>
				+7-925-655-33-28
			</Link>
			<button className={cx('Button')}>Запись на прием</button>
		</div>
	</header>
);
