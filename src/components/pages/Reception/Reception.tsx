import cn from 'classnames/bind';
import parse from 'html-react-parser';

import { DoctorCardsList } from '@/components/base/DoctorCardsList';
import { Heading } from '@/components/base/Heading';
import { Region } from '@/components/base/Region';
import { ServicesList } from '@/components/base/ServicesList';

import { HEADING } from './constants/constants';

import styles from './index.module.scss';

const cx = cn.bind(styles);

export const Reception = () => (
	<main className={cx('main')}>
		<Region className={cx('title')}>
			<Heading className={cx('title__head')}>{HEADING.title}</Heading>
			<hr className={cx('hr')} />
			<hr className={cx('hr')} />
			<p className={cx('title__desc')}>{parse(HEADING.descr)}</p>

			<a href="/service" className={cx('title__btn', 'button')}>
				Прескурант{' '}
				<span className={cx('title__btn-subtext')}>Подробнее...</span>
			</a>
		</Region>

		<section className={cx('specialists')}>
			<h2 className={cx('title__head', 'specialists__head')}>
				Ведущие специалисты
			</h2>
			<DoctorCardsList />
		</section>
		<ServicesList />
	</main>
);
