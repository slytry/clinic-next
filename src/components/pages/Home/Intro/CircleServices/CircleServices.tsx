import Image from 'next/image';
import { useState } from 'react';

import intro7 from '@/public/7.png';
import tea from '@/public/intro/tea.png';

import { Circle } from '../Circle';
import { services } from '../constants';

import s from './index.module.scss';

export const CircleServices = () => {
	const [uslugi, setUslugi] = useState(services);

	const deeep = (uuu) => {
		setUslugi(uuu);
	};

	return (
		<div className={s.Root}>
			<ul className={s.circle}>
				{uslugi.map((item) => (
					<Circle
						onClick={deeep}
						subItems={item.subItems}
						key={item.id}
						imgSrc={tea}
						text={item.text}
						rightSide={item.rightSide}
					/>
				))}
			</ul>
		</div>
	);
};
