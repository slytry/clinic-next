import { IBM_Plex_Sans, Roboto } from '@next/font/google';
import Head from 'next/head';
import { type PropsWithChildren } from 'react';

import { Header } from '../Header';
import { Burger } from '../Header/Burger';

import cx from './index.module.scss';

const fontIBM = IBM_Plex_Sans({
	weight: ['400', '500', '600', '700'],
	variable: '--next-font-IBM',
	subsets: ['latin', 'cyrillic'],
});
const fontRoboto = Roboto({
	weight: ['400', '500', '700'],
	variable: '--next-font-roboto',
	subsets: ['latin', 'cyrillic'],
});

export function AppLayout({
	children,
}: PropsWithChildren<Record<string, unknown>>) {
	return (
		<>
			<Head>
				<title>Семья</title>
			</Head>

			<div
				className={cx('Root', fontIBM.variable, fontRoboto.variable)}
				id="page-wrap"
			>
				<Header />
				{children}
			</div>
		</>
	);
}
