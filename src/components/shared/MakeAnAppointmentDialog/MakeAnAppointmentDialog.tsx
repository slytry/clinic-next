import Link from 'next/link';
import { useRef, useState } from 'react';

import { Dialog, DialogContent, DialogTrigger } from '@/components/base/Dialog';

import { Content } from './partials/Content';

import cx from './index.module.scss';

interface ModalWithPhoneProps {
	className?: string;
}

// const ModalWithPhone = ({ className }: ModalWithPhoneProps) => {
// 	const a = 5;
// 	const ref = useRef<HTMLDivElement>(null);
// 	return (
// 		<div className={cx('Root', className)} ref={ref}>
// 			<Link href="tel:+79256553328" className={cx('Phone')}>
// 				+7-925-655-33-28
// 			</Link>

// 			<MakeAnAppointmentDialog />
// 		</div>
// 	);
// };

// export { ModalWithPhone };

export const MakeAnAppointmentDialog = () => {
	// eslint-disable-next-line no-promise-executor-return
	const wait = async () => new Promise((resolve) => setTimeout(resolve, 1000));
	const [open, setOpen] = useState(false);
	return (
		<Dialog>
			<DialogTrigger asChild>
				<button className={cx('Button')}>Запись на прием</button>
			</DialogTrigger>
			<DialogContent>
				<Content />
			</DialogContent>
		</Dialog>
	);
};
