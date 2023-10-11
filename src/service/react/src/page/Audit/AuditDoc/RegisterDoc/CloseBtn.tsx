import React from 'react';
import { ReactComponent as CloseIcomImg } from '../../../../assets/CloseIcon.svg';
import { CloseBtnStyle } from './CloseBtn.style';

export const CloseBtn = (props: {
	setIsModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const { setIsModalOpened } = props;

	return (
		<div className={CloseBtnStyle}>
			<div onClick={() => setIsModalOpened(false)}>
				<CloseIcomImg width={35} height={37} />
			</div>
		</div>
	);
};
