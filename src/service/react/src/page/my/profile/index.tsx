import React, { Dispatch, SetStateAction, useContext, useState } from 'react';
import { User } from 'context/AuthContext';
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
import { ProfileImage } from 'component/ProfileImage.component';
import { Club, ClubContext } from 'context/ClubContext';
import {
	ClubIcon,
	EditIcon,
	EmailIcon,
	HumanIcon,
	InstagramIcon,
	MajorIcon,
	PhoneNumberIcon,
	SchoolIcon,
	SettingIcon,
	StudentIdIcon,
} from './icon';
import ProfileSetting from './setting';
import { Member } from 'context/MemberContext';

const Header = (props: {
	me: User;
	setMe: Dispatch<SetStateAction<User | null>>;
	members: Member[];
	setMembers: Dispatch<SetStateAction<Member[] | null>>;
	club: Club;
}) => {
	const { me, setMe, members, setMembers, club } = props;
	const [isModalOpened, setIsModalOpened] = useState(false);

	return (
		<div className={ProfileHeaderStyle}>
			<div>
				<HumanIcon width={28} height={28} />
				<span>내 정보</span>
			</div>
			<div
				onClick={() => {
					setIsModalOpened(true);
				}}
			>
				<EditIcon width={18} height={18} />
				<span>수정</span>
			</div>
			{isModalOpened ? (
				<Modal setIsModalOpened={setIsModalOpened}>
					<EditProfile
						me={me}
						setMe={setMe}
						members={members}
						setMembers={setMembers}
						club={club}
						setIsModalOpened={setIsModalOpened}
					/>
				</Modal>
			) : null}
		</div>
	);
};

const Body = (props: { me: User; members: Member[] | null; club: Club }) => {
	const { me, members, club } = props;
	const src = me.profileImageId
		? `${process.env.REACT_APP_S3_BUCKET_URL}/profile/w512/${me.profileImageId}`
		: undefined;
	const myMemberProfile = members?.find(member => member.userId === me._id);

	return (
		<div className={ProfileBodyStyle}>
			<div>
				<ProfileImage src={src} width={128} height={128} isCircle={true} className={null} />
				<div>
					<span>{me.name}</span>
					<span>{myMemberProfile?.introduction}</span>
				</div>
			</div>
			<div>
				<Information icon={<EmailIcon width={22} height={22} />} type="이메일" value={me.email} />
				<Information
					icon={<SchoolIcon width={22} height={22} />}
					type="학교"
					value={'국민대학교'}
				/>
				<Information icon={<MajorIcon width={22} height={22} />} type="학과" value={me.major} />
				<Information
					icon={<StudentIdIcon width={22} height={22} />}
					type="학번"
					value={me.studentId}
				/>
				<Information icon={<ClubIcon width={22} height={22} />} type="동아리" value={club?.name} />
				<Information
					icon={<PhoneNumberIcon width={22} height={22} />}
					type="전화번호"
					value={me.phoneNumber}
				/>
				<Information
					icon={<InstagramIcon width={22} height={22} />}
					type="인스타그램"
					value={me.sns}
				/>
			</div>
		</div>
	);
};

const Footer = (props: {
	me: User;
	setMe: Dispatch<SetStateAction<User | null>>;
	members: Member[];
	setMembers: Dispatch<SetStateAction<Member[] | null>>;
}) => {
	const { me, setMe } = props;
	const [isModalOpened, setIsModalOpened] = useState(false);
	const changePassword = async () => {
		axios
			.patch(`${process.env.REACT_APP_NESTJS_URL}/user/me`, { withCredentials: true })
			.then(response => {
				setMe(response.data);
			})
			.catch(error => {
				console.error(error);
				alert(error.response.data.message);
			});
	};
	//const logout = async () => {
	//	await axios
	//		.delete(`${process.env.REACT_APP_NESTJS_URL}/auth/signout`, { withCredentials: true })
	//		.then(() => {
	//			setMe(null);
	//			navigate('/');
	//		})
	//		.catch(error => {
	//			alert(error.response.data.message);
	//		});
	//};

	return (
		<div className={ProfileFooterStyle}>
			<SettingIcon
				width={28}
				height={28}
				onClick={() => {
					setIsModalOpened(true);
				}}
			/>
			{isModalOpened ? (
				<Modal setIsModalOpened={setIsModalOpened}>
					<ProfileSetting me={me} setMe={setMe} setIsModalOpened={setIsModalOpened} />
				</Modal>
			) : null}
		</div>
	);
	changePassword();
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

const Profile = (props: {
	me: User;
	setMe: Dispatch<SetStateAction<User | null>>;
	members: Member[];
	setMembers: Dispatch<SetStateAction<Member[] | null>>;
}) => {
	const { me, setMe, members, setMembers } = props;
	const { club } = useContext(ClubContext);
	if (!club) {
		return null;
	}

	return (
		<>
			<div className={ProfileStyle}>
				<Header me={me} setMe={setMe} members={members} setMembers={setMembers} club={club} />
				<div>
					<Body me={me} members={members} club={club} />
					<Footer me={me} setMe={setMe} members={members} setMembers={setMembers} />
				</div>
			</div>
		</>
	);
};

export default Profile;
