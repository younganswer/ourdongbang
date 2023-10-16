import React from 'react';
import { registerHeaderStyles } from './registerHeader.style';

export const RegisterHeader = () => {
	return (
		<div className={registerHeaderStyles}>
			<span>{'지출 등록'}</span>
		</div>
	);
};
