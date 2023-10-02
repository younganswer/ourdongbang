import React, { useState } from 'react';
import { Me } from 'context/AuthContext';
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
import EditProfile from './edit';
import axios from 'axios';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { ProfileImage } from 'components/ProfileImage.component';

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
			<ProfileImage
				src={`${process.env.REACT_APP_S3_BUCKET_URL}/` + me.profileImageId?.toString() || null}
				width={218}
				height={218}
				isCircle={true}
				className={ProfileImageStyle}
			/>
			<span className={ProfileNameStyle}>{me.name}</span>
			<div>
				<Information type="Email" value={me.email} />
				<Information type="학번" value={me.studentId} />
			</div>
		</div>
	);
};

const Footer = (props: {
	setMe: React.Dispatch<React.SetStateAction<Me | null>>;
	navigate: NavigateFunction;
}) => {
	const { setMe, navigate } = props;
	const logout = async () => {
		await axios
			.delete(`${process.env.REACT_APP_NESTJS_URL}/auth/signout`, { withCredentials: true })
			.then(() => {
				setMe(null);
				navigate('/');
			})
			.catch(error => {
				throw new Error(error.response.data.message);
			});
	};

	return (
		<div className={ProfileFooterStyle}>
			<span
				style={{ float: 'right' }}
				onClick={() => {
					logout();
				}}
			>
				Logout
			</span>
		</div>
	);
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
	const navigate = useNavigate();

	return (
		<>
			<div className={ProfileStyle}>
				<Header setIsModalOpened={setIsModalOpened} />
				<Body me={me} />
				<Footer setMe={setMe} navigate={navigate} />
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
