import React, { Dispatch, SetStateAction, useContext, useState } from 'react';
import { InfoPageMemberBodyStyle, InfoPageMemberStyle } from './index.style';
import { Member, MemberContext } from 'context/MemberContext';
import MemberProfile from './profile';
import InfoPageMemberHeader from './header';

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
	const { members, setMembers } = useContext(MemberContext);
	const [isOpened, setIsOpened] = useState(false);

	return (
		<div className={InfoPageMemberStyle}>
			<div>
				<InfoPageMemberHeader isOpened={isOpened} setIsOpened={setIsOpened} />
				{isOpened && <Body members={members} setMembers={setMembers} />}
			</div>
		</div>
	);
};

export default InfoPageMember;
