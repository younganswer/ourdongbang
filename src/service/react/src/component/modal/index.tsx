import React from 'react';
import { ModalBackground } from './background.modal';

export const Modal = (props: {
	setIsModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
	children: React.ReactNode;
}) => {
	const { setIsModalOpened, children } = props;

	return <ModalBackground setIsModalOpened={setIsModalOpened}>{children}</ModalBackground>;
};
