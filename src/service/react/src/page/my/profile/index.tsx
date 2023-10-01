import React, { useState } from 'react';
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
} from './index.style';
import { Modal } from 'components/modal';
import { EditProfile } from './edit';

const Header = (props: { setIsModalOpened: React.Dispatch<React.SetStateAction<boolean>> }) => {
	const { setIsModalOpened } = props;

	return (
		<div className={ProfileHeaderStyle}>
			<span>Setting</span>
			<span
				onClick={() => {
					setIsModalOpened(true);
				}}
			>
				Edit
			</span>
		</div>
	);
};

const Body = (props: { me: Me }) => {
	const { me } = props;

	return (
		<div className={ProfileContentStyle}>
			<ProfileImage imageId={me.profileImageId} />
			<span className={ProfileNameStyle}>{me.name}</span>
			<div>
				<Information type="Email" value={me.email} />
				<Information type="학번" value={me.studentId} />
			</div>
		</div>
	);
};

const Footer = () => {
	return (
		<div className={ProfileFooterStyle}>
			<span style={{ float: 'right' }}>Logout</span>
		</div>
	);
};

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

const Profile = (props: { me: Me; setMe: React.Dispatch<React.SetStateAction<Me | null>> }) => {
	const { me, setMe } = props;
	const [isModalOpened, setIsModalOpened] = useState(false);

	return (
		<>
			<div className={ProfileStyle}>
				<Header setIsModalOpened={setIsModalOpened} />
				<Body me={me} />
				<Footer />
			</div>
			{isModalOpened ? (
				<Modal setIsModalOpened={setIsModalOpened}>
					<EditProfile me={me} setMe={setMe} setIsModalOpened={setIsModalOpened} />
				</Modal>
			) : null}
		</>
	);
};

export default Profile;
