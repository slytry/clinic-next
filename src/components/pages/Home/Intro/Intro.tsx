import cn from 'classnames/bind';
import introGBg from 'public/bg/introBg.png';
import {
	type Dispatch,
	type PropsWithChildren,
	type SetStateAction,
	useState,
} from 'react';


import { BgImage } from '@/components/base/BgImage';
import { Heading } from '@/components/base/Heading';
import { Region } from '@/components/base/Region';

import { useDataContext } from '@/context/DataContext';

import { type Category } from '@/types/http/homePage.type';

import { CircleServices } from './CircleServices/CircleServices';

import styles from './Intro.module.scss';

const cx = cn.bind(styles);

export const Intro = () => (
	<Region className={cx('Intro')}>
		<Heading hidden>Каталог услуг</Heading>
		<CircleServices />
		<BgImage className={cx('Image')} src={introGBg} alt="background" />
	</Region>
);
