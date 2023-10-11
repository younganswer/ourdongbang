import React, { useContext, useEffect, useRef, useState } from 'react';
import { EditProfileInformationStyle } from './information.style';
import { Me } from 'context/AuthContext';
import { ClubContext } from 'context/ClubContext';

const Header = () => {
	return (
		<div>
			<span>개인 정보</span>
		</div>
	);
};

const Information = (props: {
	label: string;
	info: string;
	setInfo:
		| null
		| React.Dispatch<React.SetStateAction<string>>
		| React.Dispatch<React.SetStateAction<string | undefined>>;
}) => {
	const { label, info, setInfo } = props;

	return (
		<div>
			<span>{label}</span>
			{setInfo ? (
				<input
					type="text"
					value={info}
					onChange={event => {
						setInfo(event.target.value);
					}}
				/>
			) : (
				<span>{info}</span>
			)}
		</div>
	);
};

export const EditProfileInformation = (props: {
	me: Me;
	newMe: Partial<Me>;
	setNewMe: React.Dispatch<React.SetStateAction<Partial<Me>>>;
}) => {
	const { me, newMe, setNewMe } = props;
	const divRef = useRef<HTMLDivElement>(null);
	const [name, setName] = useState<string>(me.name);
	const email = me.email;
	const univ = '국민대학교';
	const { club } = useContext(ClubContext);
	const [major, setMajor] = useState<string | undefined>(me.major);
	const [studentId, setStudentId] = useState<string | undefined>(me.studentId);
	const [phoneNumber, setPhoneNumber] = useState<string | undefined>(me.phoneNumber);
	const [sns, setSns] = useState<string | undefined>(me.sns);

	useEffect(() => {
		setNewMe({
			...newMe,
			name,
			major,
			studentId,
			phoneNumber,
			sns,
		});
		if (divRef.current) {
			const elements = divRef.current.querySelectorAll('span:nth-child(2), input:nth-child(2)');
			let spanMaxWidth = 0,
				inputMaxWidth = 0;

			elements.forEach(element => {
				if (element instanceof HTMLSpanElement) {
					spanMaxWidth = Math.max(spanMaxWidth, element.clientWidth);
				} else if (element instanceof HTMLInputElement) {
					inputMaxWidth = Math.max(inputMaxWidth, element.clientWidth);
				} else {
					throw new Error('Unexpected element');
				}
			});
			elements.forEach(element => {
				if (element instanceof HTMLInputElement) {
					if (spanMaxWidth < inputMaxWidth) {
						element.setAttribute('style', `width: ${inputMaxWidth}px`);
					} else {
						element.setAttribute('style', `width: ${spanMaxWidth - 4}px`);
					}
				}
			});
		}
	}, [name, major, studentId, phoneNumber, sns]);

	return (
		<div className={EditProfileInformationStyle} ref={divRef}>
			<Header />
			<Information label="이름" info={name} setInfo={setName} />
			<Information label="이메일" info={email} setInfo={null} />
			<Information label="학교" info={univ} setInfo={null} />
			<Information label="동아리" info={club?.name || ''} setInfo={null} />
			<Information label="학과" info={major || ''} setInfo={setMajor} />
			<Information label="학번" info={studentId || ''} setInfo={setStudentId} />
			<Information label="전화번호" info={phoneNumber || ''} setInfo={setPhoneNumber} />
			<Information label="SNS" info={sns || ''} setInfo={setSns} />
		</div>
	);
};
