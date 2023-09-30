import React, { useEffect, useState } from 'react';
import {
	EditButtonStyle,
	EditInformationStyle,
	EditModalBackgroundStyle,
	EditModalStyle,
	EditProfileHeaderStyle,
	EditProfileImageStyle,
} from './edit.style';
import { ProfileImage } from 'components/ProfileImage.component';

const EditModalBackground = (props: {
	setIsModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
	children: React.ReactNode;
}) => {
	const { setIsModalOpened, children } = props;

	return (
		<div className={EditModalBackgroundStyle} onClick={() => setIsModalOpened(false)}>
			{children}
		</div>
	);
};

const EditProfileHeader = (props: {
	setIsModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const { setIsModalOpened } = props;

	useEffect(() => {
		document.body.style.cssText = `
    		position: fixed; 
    		top: -${window.scrollY}px;
    		overflow-y: scroll;
    		width: 100%;
		`;
		return () => {
			const scrollY = document.body.style.top;
			document.body.style.cssText = '';
			window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
		};
	}, []);

	return (
		<div className={EditProfileHeaderStyle}>
			<span>프로필 편집</span>
			<span onClick={() => setIsModalOpened(false)}>X</span>
		</div>
	);
};

const EditProfileImage = () => {
	return (
		<div className={EditProfileImageStyle}>
			<div>
				<span>프로필 사진</span>
				<span>추가</span>
			</div>
			<div>
				<ProfileImage imageId={null} width={196} height={196} isCircle={true} className={null} />
			</div>
		</div>
	);
};

const EditInformation = () => {
	const [name, setName] = useState('김연정');
	const [studentId, setStudentId] = useState('20211523');

	return (
		<div className={EditInformationStyle}>
			<div>
				<span>개인 정보</span>
			</div>
			<div>
				<span>이름</span>
				<input
					type="text"
					value={name}
					onChange={e => {
						setName(e.target.value);
					}}
				/>
			</div>
			<div>
				<span>이메일</span>
				<span>yjart332@kookmin.ac.kr</span>
			</div>
			<div>
				<span>학번</span>
				<input
					type="text"
					value={studentId}
					onChange={e => {
						setStudentId(e.target.value);
					}}
				/>
			</div>
		</div>
	);
};

const EditButton = () => {
	return (
		<div className={EditButtonStyle}>
			<button>수정하기</button>
		</div>
	);
};

export const EditModal = (props: {
	setIsModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const { setIsModalOpened } = props;
	const editModal = (
		<div
			className={EditModalStyle}
			onClick={e => {
				e.stopPropagation();
			}}
		>
			<EditProfileHeader setIsModalOpened={setIsModalOpened} />
			<div>
				<EditProfileImage />
				<EditInformation />
			</div>
			<EditButton />
		</div>
	);

	return <EditModalBackground setIsModalOpened={setIsModalOpened}>{editModal}</EditModalBackground>;
};
