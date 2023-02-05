import { LinkIntoView } from '@/components/base/LinkIntoView';
import { LogoWithName } from '@/components/shared/LogoWithName';
import { ModalWithPhone } from '@/components/shared/ModalWithPhone';

import { Burger } from './Burger';

import cx from './index.module.scss';

export const Header = () => (
	<header className={cx('Header')}>
		<LogoWithName />

		<LinkIntoView href="#promo" className={cx('News')}>
			Новости и акции
		</LinkIntoView>

		<LinkIntoView href="#contacts" className={cx('Contacts')}>
			Контакты
		</LinkIntoView>

		<ModalWithPhone />

		<Burger />
	</header>
);
