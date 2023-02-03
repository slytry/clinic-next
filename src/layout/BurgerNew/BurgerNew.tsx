import cn from 'classnames/bind';

import styles from './BurgerNew.module.scss';

const cx = cn.bind(styles);

export const BurgerNew = ({isOpen, setOpen}) => {
	const handleClick = () => setOpen(!isOpen)
	return (
		<button className={cx('Burger', {BurgerActive: isOpen})} onClick={handleClick}>
			<span></span>
			<span></span>
			<span></span>
		</button>
  );
}
