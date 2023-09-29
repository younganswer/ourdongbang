import React from 'react';
import { Me } from 'context/AuthContext';
import { Types } from 'mongoose';
import {
	ProfileContentStyle,
	ProfileFooterStyle,
	ProfileHeaderStyle,
	ProfileImageStyle,
	ProfileInformationStyle,
	ProfileNameStyle,
	ProfileStyle,
} from './profile.style';

const ProfileImage = (props: { imageId: Types.ObjectId | null }) => {
	const { imageId } = props;

	{
		/*임시 이미지*/
	}
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="218"
			height="218"
			viewBox="0 0 218 218"
			fill="none"
			className={ProfileImageStyle}
		>
			<circle cx="109" cy="109" r="109" fill="#D9D9D9" />
		</svg>
	);
	{
		/*임시 이미지*/
	}
	return <div>{imageId?.toString()}</div>;
};

const Information = (props: { type: string; value: string }) => {
	const { type, value } = props;

	return (
		<div className={ProfileInformationStyle}>
			<span>{type}</span>
			<span>{value}</span>
		</div>
	);
};

const Profile = (props: { user: Me }) => {
	const { user } = props;

	return (
		<div className={ProfileStyle}>
			<div className={ProfileHeaderStyle}>
				<span>Setting</span>
				<span>Edit</span>
			</div>
			<div className={ProfileContentStyle}>
				<ProfileImage imageId={user.profileImageId} />
				<span className={ProfileNameStyle}>{user.name}</span>
				<div>
					<Information type="Email" value={user.email} />
				</div>
			</div>
			<div className={ProfileFooterStyle}>
				<span style={{ float: 'right' }}>Logout</span>
			</div>
		</div>
	);
};

export default Profile;
