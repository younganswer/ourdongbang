import React from 'react';
import { ModalBackgroundStyle } from './background.modal.style';
import { createPortal } from 'react-dom';

export const ModalBackground = (props: {
	setIsModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
	children: React.ReactNode;
}) => {
	const { setIsModalOpened, children } = props;

	return createPortal(
		<div className={ModalBackgroundStyle} onClick={() => setIsModalOpened(false)}>
			{children}
		</div>,
		document.body,
	);
};
