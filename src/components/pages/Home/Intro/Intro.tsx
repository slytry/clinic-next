import introGBg from 'public/bg/introBg.jpg';

import { BgImage } from '@/components/base/BgImage';
import { Heading } from '@/components/base/Heading';
import { Region } from '@/components/base/Region';

import { CircleServices } from './CircleServices/CircleServices';

import cx from './index.module.scss';

export const Intro = () => (
	<Region className={cx('Intro')}>
		<Heading hidden>Каталог услуг</Heading>
		<CircleServices />
		<BgImage className={cx('Image')} src={introGBg} alt="background" />
	</Region>
);
