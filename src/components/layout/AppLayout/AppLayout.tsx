// import { IBM_Plex_Sans, Roboto } from '@next/font/google';
import Head from 'next/head';
import { type PropsWithChildren } from 'react';

import { cn } from '@/services/classNames';

import { Burger } from '../Burger';
import { Header } from '../Header';

import s from './AppLayout.module.scss';

// const fontIBM = IBM_Plex_Sans({
// 	weight: ['400', '500', '600', '700'],
// 	variable: '--next-font-IBM',
// 	subsets: ['latin', 'cyrillic'],
// });
// const fontRoboto = Roboto({
// 	weight: ['400', '500', '700'],
// 	variable: '--next-font-Roboto',
// 	subsets: ['latin', 'cyrillic'],
// });

// fontIBM.variable, fontRoboto.variable

export function AppLayout({
	children,
}: PropsWithChildren<Record<string, unknown>>) {
	return (
		<>
			<Head>
				<title>Семья</title>
			</Head>

			<Burger />

			<div
				className={cn(s.AppLayout)}
				id="page-wrap"
				style={{ height: '100%', overflow: 'auto' }}
			>
				<Header />
				{children}
			</div>
		</>
	);
}
