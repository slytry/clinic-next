import cn from 'classnames/bind';
import Image from 'next/image';

import s from './index.module.scss';

const cx = cn.bind(s);

export const Circle = ({ imgSrc, text, rightSide, onClick, subItems }) => (
	<li className={cx('root')} onClick={() => onClick(subItems)}>
		<Image className={cx('image')} alt="picture" src={imgSrc} fill />
		<p className={cx('text', rightSide ? 'right' : 'left')}>{text}</p>
	</li>
);
