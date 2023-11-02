import React, { useContext, useEffect } from 'react';
import {
	ParticipantsContainerStyle,
	SelectButtonStyle,
	SelectContainerStyle,
} from './Participants.style';
import { TitleContainer } from './TitleContainer';
import { ParticipantsIcon } from './icon';
import { Member, MemberContext } from 'context/MemberContext';
import { User } from 'context/AuthContext';
import axios from 'axios';
import { ClubContext } from 'context/ClubContext';

const SelectParticipants = (props: { member: Member }) => {
	const { member } = props;
	const [userInfo, setUserInfo] = React.useState<User | null>(null);

	useEffect(() => {
		axios
			.post(
				`${process.env.REACT_APP_NESTJS_URL}/user`,
				{
					_id: member.userId,
				},
				{
					withCredentials: true,
				},
			)
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
	return <button className={SelectButtonStyle}>{userInfo?.name}</button>;
};

// return (
// 	<div>
// 		{members?.map((member, index) => {
// 			return <div key={index}>{/* member의 userId로 user 검색 */}</div>;
// 		})}
// 	</div>
// );

const Body = (props: {
	members: Member[] | null;
	setMembers: React.Dispatch<React.SetStateAction<Member[] | null>>;
}) => {
	const { members, setMembers } = props;

	return (
		<div className={SelectContainerStyle}>
			<div>
				<div>
					<span>{'모두 선택'}</span>
					<button className={SelectButtonStyle}>{'All'}</button>
				</div>
			</div>
			<div>
				<span>{'운영진'}</span>
				{members?.map((member, index) => {
					if (member.role === 'manager') {
						return <SelectParticipants key={index} member={member} />;
					}
				})}
			</div>
			<div>
				<span>{'부원'}</span>
				{members?.map((member, index) => {
					if (member.role === 'member') {
						return <SelectParticipants key={index} member={member} />;
					}
				})}
			</div>
		</div>
	);
	setMembers(null);
};

const Participants = () => {
	const { club, setClub } = useContext(ClubContext);
	const { members, setMembers } = useContext(MemberContext);

	return (
		<div className={ParticipantsContainerStyle}>
			<>
				<TitleContainer
					titleIcon={<ParticipantsIcon width={27} height={27} />}
					title="참여자"
					subtitle="인원을 선택해주세요"
				/>
			</>
			<Body members={members} setMembers={setMembers} />
		</div>
	);
	console.log(club, setClub);
};

export default Participants;
