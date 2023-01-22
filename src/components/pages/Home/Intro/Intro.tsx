import cn from 'classnames/bind';
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
import introGBg from '@/public/bg/introBg.jpg';

import { type Category } from '@/types/http/homePage.type';

import styles from './Intro.module.scss';

const cx = cn.bind(styles);

export const Intro = () => (
	<Region className={cx('Intro')}>
		<Heading hidden>Каталог услуг</Heading>
		<CategoryList className={cx('CategoryList')} />
		<BgImage className={cx('Image')} src={introGBg} alt="" />
	</Region>
);

export interface CategoryListProps {
	// categories: string[];
	className: string;
}

export const CategoryList = ({ className }: CategoryListProps) => {
	const { categories } = useDataContext();

	const [currentBlock, setCurrentBlock] = useState('main');
	// const [label, setLabel] = useState('');

	let currentCategories: string[];
	if (currentBlock === 'main') {
		currentCategories = categories.map(({ name }) => name);
	} else {
		const selectedItem = categories.find(({ name }) => name === currentBlock);
		currentCategories = selectedItem?.subCategories ?? [];
	}

	return (
		<>
			<button
				className={cx('HomeBtn')}
				onClick={() => {
					setCurrentBlock('main');
				}}
			>
				label
			</button>
			<ul className={cx(className)}>
				{currentCategories.map((el, idx) => (
					<CategoryItem text={el} key={idx} setCurrentBlock={setCurrentBlock} />
				))}
			</ul>
		</>
	);
};

export interface CategoryItemProps {
	text: string;
	type?: string;
	setCurrentBlock: Dispatch<SetStateAction<string>>;
}

export const CategoryItem = ({
	text,
	setCurrentBlock,
}: PropsWithChildren<CategoryItemProps>) => (
	<li>
		<button
			onClick={() => {
				setCurrentBlock(text);
			}}
		>
			{text}
		</button>
	</li>
);
