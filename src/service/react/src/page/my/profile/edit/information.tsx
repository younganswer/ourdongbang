import React from 'react';
import { EditProfileInformationStyle } from './information.style';
import { Me } from 'context/AuthContext';

const Header = () => {
	return (
		<div>
			<span>개인 정보</span>
		</div>
	);
};

const Name = (props: {
	newMe: Partial<Me>;
	setNewMe: React.Dispatch<React.SetStateAction<Partial<Me>>>;
}) => {
	const { newMe, setNewMe } = props;

	return (
		<div>
			<span>이름</span>
			<input
				type="text"
				value={newMe.name}
				onChange={event => {
					setNewMe({ ...newMe, name: event.target.value });
				}}
			/>
		</div>
	);
};

const Email = (props: { newMe: Partial<Me> }) => {
	const { email } = props.newMe;

	return (
		<div>
			<span>이메일</span>
			<span>{email}</span>
		</div>
	);
};

const StudentId = (props: {
	newMe: Partial<Me>;
	setNewMe: React.Dispatch<React.SetStateAction<Partial<Me>>>;
}) => {
	const { newMe, setNewMe } = props;

	return (
		<div>
			<span>학번</span>
			<input
				type="text"
				value={newMe?.studentId || ''}
				onChange={event => {
					setNewMe({ ...newMe, studentId: event.target.value });
				}}
			/>
		</div>
	);
};

export const EditProfileInformation = (props: {
	newMe: Partial<Me>;
	setNewMe: React.Dispatch<React.SetStateAction<Partial<Me>>>;
}) => {
	const { newMe, setNewMe } = props;

	return (
		<div className={EditProfileInformationStyle}>
			<Header />
			<Name newMe={newMe} setNewMe={setNewMe} />
			<Email newMe={newMe} />
			<StudentId newMe={newMe} setNewMe={setNewMe} />
		</div>
	);
};
