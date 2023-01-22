import { BgImage } from '@/components/base/BgImage/BgImage';

import footerBackgroundMax from '@/public/bg/footerBackgroundMax.png';

import s from './Footer.module.scss';

export const Footer = () => (
	<footer className={s.footer}>
		<BgImage src={footerBackgroundMax} alt="Синие фигуры" />

		<ul className={s.list}>
			<li className={s.listItem}>
				<a href="#contacts" className={s.link}>
					Контакты
				</a>
			</li>
			<li className={s.listItem}>
				<a href="" className={s.link}>
					Вакансии
				</a>
			</li>
			<li className={s.listItem}>
				<a href="" className={s.link}>
					Запись на прием
				</a>
			</li>
		</ul>
	</footer>
);
