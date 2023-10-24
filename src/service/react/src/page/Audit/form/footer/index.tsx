import { AuthContext } from 'context/AuthContext';
import { MemberContext } from 'context/MemberContext';
import { ExportIcon } from 'page/Audit/AuditDoc/icon';
import { EditIcon } from 'page/my/profile/icon';
import React, { Dispatch, SetStateAction, useContext } from 'react';
import { AuditFormFooterStyle } from './index.style';

const AuditFormFooter = (props: { setIsEditting: Dispatch<SetStateAction<boolean>> }) => {
	const { setIsEditting } = props;
	const { me } = useContext(AuthContext);
	const { members } = useContext(MemberContext);

	if (!me || !members) {
		return null;
	}

	return (
		<div className={AuditFormFooterStyle}>
			{members.filter(member => member.userId === me._id)[0].role === 'manager' ? (
				<div
					onClick={() => {
						setIsEditting(true);
					}}
				>
					<span>수정하기</span>
					<EditIcon width={16} height={16} />
				</div>
			) : null}
			<div>
				<span>내보내기</span>
				<ExportIcon width={22} height={22} />
			</div>
		</div>
	);
};

export default AuditFormFooter;
