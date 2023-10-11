import React, { useContext, useState } from 'react';
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
import { Modal } from 'component/modal';
import EditProfile from './edit';
import axios from 'axios';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { ProfileImage } from 'component/ProfileImage.component';
import { ClubContext } from 'context/ClubContext';

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
	const { club } = useContext(ClubContext);
	const src = me.profileImageId
		? `${process.env.REACT_APP_S3_BUCKET_URL}/profile/w512/${me.profileImageId}`
		: undefined;

	return (
		<div className={ProfileContentStyle}>
			<ProfileImage
				src={src}
				width={250}
				height={250}
				isCircle={true}
				className={ProfileImageStyle}
			/>
			<span className={ProfileNameStyle}>{me.name}</span>
			<div>
				<Information type="이메일" value={me.email} />
				<Information type="학교" value={'국민대학교'} />
				<Information type="동아리" value={club?.name} />
				<Information type="학과" value={me.major} />
				<Information type="학번" value={me.studentId} />
				<Information type="전화번호" value={me.phoneNumber} />
				<Information type="SNS" value={me.sns} />
				<div>
					<span>소개</span>
					<span>{'안녕하세요 2023 신입부원 황영서입니다\n 잘 부탁드립니다!'}</span>
				</div>
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
				onClick={() => {
					logout();
				}}
			>
				Logout
			</span>
		</div>
	);
};

const Information = (props: { type: string; value: string | undefined }) => {
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
