import React, { useEffect } from 'react';
import { ModalBackground } from './background.modal';

export const Modal = (props: {
	setIsModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
	children: React.ReactNode;
}) => {
	const { setIsModalOpened, children } = props;

	useEffect(() => {
		document.body.style.cssText = `
		    position: fixed; 
		    top: -${window.scrollY}px;
		    overflow-y: scroll;
		    width: 100%;`;
		return () => {
			const scrollY = document.body.style.top;

			document.body.style.cssText = '';
			window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
		};
	}, []);

	return <ModalBackground setIsModalOpened={setIsModalOpened}>{children}</ModalBackground>;
};
