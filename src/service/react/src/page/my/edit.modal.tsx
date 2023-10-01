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
import { createPortal } from 'react-dom';
import { Me } from 'context/AuthContext';

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

	return (
		<div className={EditProfileHeaderStyle}>
			<span>프로필 편집</span>
			<span onClick={() => setIsModalOpened(false)}>X</span>
		</div>
	);
};

const EditProfileImage = (props: { user: Me }) => {
	const { user } = props;

	return (
		<div className={EditProfileImageStyle}>
			<div>
				<span>프로필 사진</span>
				<span>추가</span>
			</div>
			<div>
				<ProfileImage
					imageId={user.profileImageId}
					width={196}
					height={196}
					isCircle={true}
					className={null}
				/>
			</div>
		</div>
	);
};

const EditInformation = (props: { user: Me }) => {
	const { user } = props;
	const [name, setName] = useState(user.name);
	const [studentId, setStudentId] = useState(user.studentId);

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
				<span>{user.email}</span>
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
	user: Me;
	setIsModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const { user, setIsModalOpened } = props;
	const editModal = (
		<div
			className={EditModalStyle}
			onClick={e => {
				e.stopPropagation();
			}}
		>
			<EditProfileHeader setIsModalOpened={setIsModalOpened} />
			<div>
				<EditProfileImage user={user} />
				<EditInformation user={user} />
			</div>
			<EditButton />
		</div>
	);

	useEffect(() => {
		document.body.style.cssText = `
		    position: fixed; 
		    top: -${window.scrollY}px;
		    overflow-y: scroll;
		    width: 99.15%;`;
		return () => {
			const scrollY = document.body.style.top;
			document.body.style.cssText = '';
			window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
		};
	}, []);

	return createPortal(
		<EditModalBackground setIsModalOpened={setIsModalOpened}>{editModal}</EditModalBackground>,
		document.body,
	);
};
