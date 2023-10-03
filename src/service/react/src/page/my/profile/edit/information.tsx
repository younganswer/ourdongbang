import React, { useEffect, useRef } from 'react';
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
	me: Me;
	newMe: Partial<Me>;
	setNewMe: React.Dispatch<React.SetStateAction<Partial<Me>>>;
	nameRef: React.RefObject<HTMLInputElement>;
}) => {
	const { me, newMe, setNewMe, nameRef } = props;
	const name = newMe.name ? newMe.name : me.name;

	return (
		<div>
			<span>이름</span>
			<input
				type="text"
				value={name}
				ref={nameRef}
				onChange={event => {
					setNewMe({ ...newMe, name: event.target.value });
				}}
			/>
		</div>
	);
};

const Email = (props: { me: Me; emailRef: React.RefObject<HTMLSpanElement> }) => {
	const { me, emailRef } = props;

	return (
		<div>
			<span>이메일</span>
			<span ref={emailRef}>{me.email}</span>
		</div>
	);
};

const StudentId = (props: {
	me: Me;
	newMe: Partial<Me>;
	setNewMe: React.Dispatch<React.SetStateAction<Partial<Me>>>;
	studentIdRef: React.RefObject<HTMLInputElement>;
}) => {
	const { me, newMe, setNewMe, studentIdRef } = props;
	const studentId = newMe.studentId ? newMe.studentId : me.studentId ? me.studentId : '';

	return (
		<div>
			<span>학번</span>
			<input
				type="text"
				value={studentId}
				ref={studentIdRef}
				onChange={event => {
					setNewMe({ ...newMe, studentId: event.target.value });
				}}
			/>
		</div>
	);
};

const Major = (props: {
	me: Me;
	newMe: Partial<Me>;
	setNewMe: React.Dispatch<React.SetStateAction<Partial<Me>>>;
	majorRef: React.RefObject<HTMLInputElement>;
}) => {
	const { me, newMe, setNewMe, majorRef } = props;
	const major = newMe.major ? newMe.major : me.major ? me.major : '';

	return (
		<div>
			<span>전공</span>
			<input
				type="text"
				value={major}
				ref={majorRef}
				onChange={event => {
					setNewMe({ ...newMe, major: event.target.value });
				}}
			/>
		</div>
	);
};

export const EditProfileInformation = (props: {
	me: Me;
	newMe: Partial<Me>;
	setNewMe: React.Dispatch<React.SetStateAction<Partial<Me>>>;
}) => {
	const { me, newMe, setNewMe } = props;
	const nameRef = useRef<HTMLInputElement>(null);
	const emailRef = useRef<HTMLSpanElement>(null);
	const studentIdRef = useRef<HTMLInputElement>(null);
	const majorRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		const refs = [nameRef, emailRef, studentIdRef, majorRef];
		let maxWidth = 0;

		refs.forEach(ref => {
			if (ref.current) {
				maxWidth = Math.max(maxWidth, ref.current.offsetWidth);
			}
		});
		refs.forEach(ref => {
			if (ref.current) {
				ref.current.style.width = `${maxWidth}px`;
			}
		});
	}, []);

	return (
		<div className={EditProfileInformationStyle}>
			<Header />
			<Name me={me} newMe={newMe} setNewMe={setNewMe} nameRef={nameRef} />
			<Email me={me} emailRef={emailRef} />
			<StudentId me={me} newMe={newMe} setNewMe={setNewMe} studentIdRef={studentIdRef} />
			<Major me={me} newMe={newMe} setNewMe={setNewMe} majorRef={majorRef} />
		</div>
	);
};
