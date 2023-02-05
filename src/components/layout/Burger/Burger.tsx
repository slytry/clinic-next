import { slide as Menu } from 'react-burger-menu';

import { LinkIntoView } from '../../base/LinkIntoView/LinkIntoView';

import cx from './index.module.scss';

export const Burger = () => (
	<Menu
		right
		outerContainerId={'__next'}
		pageWrapId={'page-wrap'}
		className={cx('Root')}
	>
		<ul className={cx('Menu')}>
			<li className={cx('MenuItem')}>
				<LinkIntoView href="#promo">Новости и акции</LinkIntoView>
			</li>
			<li className={cx('MenuItem')}>
				<LinkIntoView href="#contacts">Контакты</LinkIntoView>
			</li>
			<button className={cx('Button')}>Запись на прием</button>
		</ul>
	</Menu>
);
