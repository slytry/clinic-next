import { IBM_Plex_Sans, Roboto } from '@next/font/google';
import Head from 'next/head';
import {type PropsWithChildren, useState} from 'react';

import ModalCustom from "@/layout/ModalCustom/ModalCustom";
import { cn } from '@/services/classNames';

import { Burger } from '../Burger';
import { Header } from '../Header';

import s from './AppLayout.module.scss';

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
	const [isOpenModal, setOpenModal] = useState(false);

	return (
		<>
			<Head>
				<title>Семья</title>
			</Head>
			<div
				className={cn(s.AppLayout, fontIBM.variable, fontRoboto.variable)}
				id="page-wrap"
				style={{ height: '100%', overflow: 'auto' }}
			>
				<Header isOpenModal={isOpenModal} setOpenModal={setOpenModal} />
				{children}
				<ModalCustom isOpenModal={isOpenModal} setOpenModal={setOpenModal}/>
			</div>
		</>
	);
}
