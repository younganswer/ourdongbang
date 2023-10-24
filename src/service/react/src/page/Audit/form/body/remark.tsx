import React, { Dispatch, SetStateAction } from 'react';
import { AuditFormBodyRemarkStyle } from './remark.style';
import { Audit } from 'context/AuditContext';

const AuditFormBodyRemark = (props: {
	newAudit: Audit;
	setNewAudit: Dispatch<SetStateAction<Audit>>;
	isEditting: boolean;
}) => {
	const { newAudit, setNewAudit, isEditting } = props;

	return (
		<div className={AuditFormBodyRemarkStyle}>
			<div>
				<span>비 고</span>
			</div>
			<div>
				{isEditting ? (
					<textarea
						value={newAudit.remark}
						onChange={event => setNewAudit({ ...newAudit, remark: event.target.value })}
					/>
				) : (
					<span>{newAudit.remark}</span>
				)}
			</div>
		</div>
	);
};

export default AuditFormBodyRemark;
