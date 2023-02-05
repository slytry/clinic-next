import {
	Close,
	Content,
	Overlay,
	Portal,
	Root,
	Trigger,
} from '@radix-ui/react-dialog';
import { forwardRef, type ReactNode, type Ref } from 'react';

import { CrossIcon } from '../Icons/Cross';

import cx from './index.module.scss';

interface DialogProps {
	className?: string;
	children: ReactNode;
}

type RefDivOrUndefined = Ref<HTMLDivElement> | undefined;

export const DialogContent = forwardRef(
	({ children, ...props }: DialogProps, forwardedRef: RefDivOrUndefined) => (
		<Portal>
			<Overlay />
			<Content {...props} ref={forwardedRef}>
				{children}
				<Close aria-label="Close">
					<CrossIcon />
				</Close>
			</Content>
		</Portal>
	)
);

DialogContent.displayName = 'DialogContent';

export const Dialog = Root;
export const DialogTrigger = Trigger;
