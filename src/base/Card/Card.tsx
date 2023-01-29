import cn from 'classnames/bind';

import styles from './index.module.scss';

const cx = cn.bind(styles);

interface CardProps {
	href: string;
	className?: string;
	descr: string;
}

export const Card = ({ href, className, descr }: CardProps) => (
	<a href={href} className={cx(className, 'item', 'link')}>
		{descr}
	</a>
);
