import React from 'react';
import { EditProfileInformationStyle } from './information.style';

export const EditProfileInformation = (props: {
	name: string;
	setName: React.Dispatch<React.SetStateAction<string>>;
	studentId: null | string;
	setStudentId: React.Dispatch<React.SetStateAction<null | string>>;
	email: string;
}) => {
	const { name, setName, setStudentId, email } = props;
	const studentId = props.studentId || '';
	const Header = () => {
		return (
			<div>
				<span>개인 정보</span>
			</div>
		);
	};
	const Name = () => {
		return (
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
		);
	};
	const Email = () => {
		return (
			<div>
				<span>이메일</span>
				<span>{email}</span>
			</div>
		);
	};
	const StudentId = () => {
		return (
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
		);
	};

	return (
		<div className={EditProfileInformationStyle}>
			<Header />
			<Name />
			<Email />
			<StudentId />
		</div>
	);
};
