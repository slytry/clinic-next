import cn from 'classnames/bind';

import { Card } from '@/base/Card/Card';
import { Heading } from '@/base/Heading';
import { Region } from '@/base/Region';

import { SERVICES_LIST, TITLE } from './constants';

import styles from './index.module.scss';

const cx = cn.bind(styles);

export const Services = () => (
	<main className={cx('main', 'container')}>
		<Region className={cx('title')}>
			<Heading className={cx('title__head')}> {TITLE.first}</Heading>
			<Heading className={cx('title__head')}> {TITLE.second}</Heading>
			<hr className={cx('hr')} />
			<hr className={cx('hr')} />
		</Region>
		<Region className={cx('services')}>
			<div className={cx('services__list')}>
				{SERVICES_LIST.map((elem) => (
					<Card key={elem.href} href={elem.href} descr={elem.link} />
				))}
			</div>
		</Region>
	</main>
);
