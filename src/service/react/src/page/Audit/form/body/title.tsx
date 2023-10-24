import React, { Dispatch, SetStateAction } from 'react';
import { AuditFormBodyTitleStyle } from './title.style';
import { Audit } from 'context/AuditContext';

const AuditFormBodyTitle = (props: {
	newAudit: Audit;
	setNewAudit: Dispatch<SetStateAction<Audit>>;
	isEditting: boolean;
}) => {
	const { newAudit, setNewAudit, isEditting } = props;

	return (
		<div className={AuditFormBodyTitleStyle}>
			<div>
				<span>제 목</span>
			</div>
			<div>
				{isEditting ? (
					<input
						type="text"
						value={newAudit.title}
						onChange={event => setNewAudit({ ...newAudit, title: event.target.value })}
					/>
				) : (
					<span>{newAudit.title}</span>
				)}
			</div>
		</div>
	);
};

export default AuditFormBodyTitle;
