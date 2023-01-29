import cn from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';

import s from './index.module.scss';

const cx = cn.bind(s);

export const CircleWithIcon = ({ imgSrc, text, rightSide, href }: any) => (
	<li className={cx('root')}>
		<Link href={href}>
			<Image className={cx('image')} alt="picture" src={imgSrc} fill />
			<p className={cx('text', rightSide ? 'right' : 'left')}>{text}</p>
		</Link>
	</li>
);
