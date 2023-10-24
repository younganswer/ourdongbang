import React, { Dispatch, SetStateAction } from 'react';
import { AuditFormBodyFranchiseStyle } from './franchise.style';
import { Audit } from 'context/AuditContext';

const AuditFormBodyFranchise = (props: {
	newAudit: Audit;
	setNewAudit: Dispatch<SetStateAction<Audit>>;
	isEditting: boolean;
}) => {
	const { newAudit, setNewAudit, isEditting } = props;

	return (
		<div className={AuditFormBodyFranchiseStyle}>
			<div>
				<span>상호명</span>
			</div>
			<div>
				{isEditting ? (
					<input
						type="text"
						value={newAudit.franchise}
						onChange={event => setNewAudit({ ...newAudit, franchise: event.target.value })}
					/>
				) : (
					<span>{newAudit.franchise}</span>
				)}
			</div>
		</div>
	);
};

export default AuditFormBodyFranchise;
