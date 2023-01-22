import ReactMarkdown from 'react-markdown';

import { Heading } from '@/components/base/Heading';
import { Region } from '@/components/base/Region';

import { useDataContext } from '@/context/DataContext';

import s from './About.module.scss';

export const About = () => {
	const { about } = useDataContext();

	return (
		<Region className={s.about} withContainer>
			<Heading>О нас</Heading>
			<ReactMarkdown>{about.description}</ReactMarkdown>
		</Region>
	);
};
