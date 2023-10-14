import React, { useContext, useState } from 'react';
import { Me } from 'context/AuthContext';
import {
	ProfileBodyStyle,
	ProfileFooterStyle,
	ProfileHeaderStyle,
	ProfileInformationStyle,
	ProfileStyle,
} from './index.style';
import { Modal } from 'component/modal';
import EditProfile from './edit';
import axios from 'axios';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { ProfileImage } from 'component/ProfileImage.component';
import { ClubContext } from 'context/ClubContext';
import {
	ClubIcon,
	EmailIcon,
	InstagramIcon,
	MajorIcon,
	PhoneNumberIcon,
	SchoolIcon,
	StudentIdIcon,
} from './icon';

const Header = (props: { setIsModalOpened: React.Dispatch<React.SetStateAction<boolean>> }) => {
	const { setIsModalOpened } = props;

	return (
		<div className={ProfileHeaderStyle}>
			<span>내 정보</span>
			<div
				onClick={() => {
					setIsModalOpened(true);
				}}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="18"
					height="18"
					viewBox="0 0 18 18"
					fill="none"
				>
					<path
						d="M1.10071 18.3958L1.10393 18.3991C1.18955 18.4853 1.29136 18.5538 1.40352 18.6005C1.51569 18.6473 1.63599 18.6714 1.7575 18.6715C1.85976 18.6714 1.9613 18.6546 2.05809 18.6216L7.32784 16.834L17.4401 6.72166C18.0583 6.10342 18.4056 5.26492 18.4056 4.39062C18.4055 3.51633 18.0582 2.67786 17.4399 2.05967C16.8217 1.44148 15.9832 1.0942 15.1089 1.09424C14.2346 1.09428 13.3961 1.44163 12.7779 2.05987L2.66564 12.1722L0.87816 17.4418C0.821854 17.6056 0.812867 17.7821 0.852228 17.9508C0.89159 18.1196 0.977707 18.2738 1.10071 18.3958ZM13.6177 2.89955C14.0137 2.50653 14.5494 2.28646 15.1073 2.28754C15.6653 2.28861 16.2 2.51073 16.5946 2.90526C16.9891 3.2998 17.2112 3.83459 17.2123 4.39253C17.2133 4.95048 16.9932 5.48611 16.6002 5.88214L15.2704 7.21192L12.2878 4.22932L13.6177 2.89955ZM3.70137 12.8158L11.4482 5.069L14.4308 8.05159L6.68392 15.7984L2.17016 17.3296L3.70137 12.8158Z"
						fill="black"
					/>
				</svg>
				<span>수정</span>
			</div>
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
		<div className={ProfileBodyStyle}>
			<div>
				<ProfileImage src={src} width={128} height={128} isCircle={true} className={null} />
				<div>
					<span>{me.name}</span>
					<span>{'안녕하세요 2023 신입부원 황영서입니다\n 잘 부탁드립니다!'}</span>
				</div>
			</div>
			<div>
				<Information icon={<EmailIcon />} type="이메일" value={me.email} />
				<Information icon={<SchoolIcon />} type="학교" value={'국민대학교'} />
				<Information icon={<MajorIcon />} type="학과" value={me.major} />
				<Information icon={<StudentIdIcon />} type="학번" value={me.studentId} />
				<Information icon={<ClubIcon />} type="동아리" value={club?.name} />
				<Information icon={<PhoneNumberIcon />} type="전화번호" value={me.phoneNumber} />
				<Information icon={<InstagramIcon />} type="인스타그램" value={me.sns} />
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

const Information = (props: {
	icon: JSX.Element | null;
	type: string;
	value: string | undefined;
}) => {
	const { icon, type, value } = props;

	return (
		<div className={ProfileInformationStyle}>
			<div>
				{icon}
				<span>{type}</span>
			</div>
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
				<div>
					<Body me={me} />
					<Footer setMe={setMe} navigate={navigate} />
				</div>
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
