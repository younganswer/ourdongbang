import React, { Dispatch, SetStateAction } from 'react';
import { AuditFormBodyAttachmentStyle } from './attachment.style';
import { Audit } from 'context/AuditContext';

const AuditFormBodyAttachment = (props: {
	newAudit: Audit;
	setNewAudit: Dispatch<SetStateAction<Audit>>;
	isEditting: boolean;
}) => {
	const { newAudit, setNewAudit, isEditting } = props;

	return (
		<div className={AuditFormBodyAttachmentStyle}>
			<div>
				<span>첨 부 사 진</span>
			</div>
			<div>
				<img src={newAudit.attachment?.toString() || ''} alt="attachment" />
			</div>
		</div>
	);
	console.log(newAudit, setNewAudit, isEditting);
};

export default AuditFormBodyAttachment;
