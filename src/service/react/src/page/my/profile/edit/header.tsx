import React from 'react';
import { EditProfileHeaderStyle } from './header.style';

export const EditProfileHeader = (props: {
	setIsModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const { setIsModalOpened } = props;

	return (
		<div className={EditProfileHeaderStyle}>
			<span>프로필 편집</span>
			<span onClick={() => setIsModalOpened(false)}>X</span>
		</div>
	);
};
