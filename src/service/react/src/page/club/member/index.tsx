import { ClubContext } from 'context/ClubContext';
import React, { Dispatch, SetStateAction, useContext } from 'react';
import {
	InfoPageMemberBodyStyle,
	InfoPageMemberHeaderStyle,
	InfoPageMemberStyle,
} from './index.style';
import { Member, MemberContext } from 'context/MemberContext';
import MemberProfile from './profile';
// import { AuthContext } from 'context/AuthContext';

const Header = () => {
	return (
		<div className={InfoPageMemberHeaderStyle}>
			<span>{'< 부원 >'}</span>
		</div>
	);
};

const Body = (props: {
	members: Member[] | null;
	setMembers: Dispatch<SetStateAction<Member[] | null>>;
}) => {
	const { members, setMembers } = props;
	const managers = members?.filter(member => member.role === 'manager');

	return (
		<div className={InfoPageMemberBodyStyle}>
			<div>
				<div>
					<span>{'< 임원 >'}</span>
					<span>총 {managers?.length || 0}명</span>
				</div>
				<div>
					{members?.map((member, index) => {
						if (member.role === 'manager') {
							return <MemberProfile key={index} member={member} />;
						}
					})}
				</div>
			</div>
			<div>
				<div>
					<span>{'< 부원 >'}</span>
					<span>총 {(members?.length || 0) - (managers?.length || 0)}명</span>
				</div>
				<div>
					{members?.map((member, index) => {
						if (member.role === 'member') {
							return <MemberProfile key={index} member={member} />;
						}
					})}
				</div>
			</div>
		</div>
	);
	setMembers(null);
};

const InfoPageMember = () => {
	const { club, setClub } = useContext(ClubContext);
	const { members, setMembers } = useContext(MemberContext);

	console.log(club);
	console.log(members);
	// 부원 정보를 표시하기 위한 데이터 가져오기 또는 렌더링 로직 추가

	return (
		<div className={InfoPageMemberStyle}>
			<div>
				<Header />
				<Body members={members} setMembers={setMembers} />
			</div>
			{/* 부원 정보를 JSX로 표시합니다. */}
			{/* <p>부원 정보 내용...</p> */}
		</div>
	);
	console.log(setClub);
	console.log(setMembers);
};

export default InfoPageMember;
