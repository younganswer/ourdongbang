import React, { useEffect, useState } from 'react';
import { MemberProfileStyle } from './index.style';
import { Member } from 'context/MemberContext';
import axios from 'axios';
import { Me } from 'context/AuthContext';
import { ProfileImage } from 'component/ProfileImage.component';

const MemberProfile = (props: { member: Member }) => {
	const { member } = props;
	const [userInfo, setUserInfo] = useState<Me | null>(null);
	const src = userInfo
		? userInfo.profileImageId
			? `${process.env.REACT_APP_S3_BUCKET_URL}/profile/w512/${userInfo.profileImageId}`
			: undefined
		: undefined;

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_NESTJS_URL}/user/_id/${member.userId}`, {
				withCredentials: true,
			})
			.then(response => {
				setUserInfo({
					_id: response.data._id,
					name: response.data.name,
					id: response.data.id,
					password: response.data.password,
					email: response.data.email,
					major: response.data.major,
					studentId: response.data.studentId,
					phoneNumber: response.data.phoneNumber,
					sns: response.data.sns,
					profileImageId: response.data.profileImageId,
					clubs: response.data.clubs,
				});
			});
	}, []);

	return (
		<div className={MemberProfileStyle}>
			<div>
				<ProfileImage src={src} width={263} height={253.5} isCircle={false} className={null} />
			</div>
			<div>
				<span>{userInfo?.name}</span>
				<span>|</span>
				<span>{member.role}</span>
			</div>
		</div>
	);
};

export default MemberProfile;
