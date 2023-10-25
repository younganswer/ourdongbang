import React, { Dispatch, SetStateAction } from 'react';
import { AuditFormBodyCardReceiptStyle } from './card-receipt.style';
import { Audit } from 'context/AuditContext';

const AuditFormBodyCardReceipt = (props: {
	newAudit: Audit;
	setNewAudit: Dispatch<SetStateAction<Audit>>;
	isEditting: boolean;
}) => {
	const { newAudit, setNewAudit, isEditting } = props;

	return (
		<div className={AuditFormBodyCardReceiptStyle}>
			<div>
				<span>카 드 전 표</span>
			</div>
			<div>
				<img src={newAudit.cardReceipt?.toString() || ''} alt="card-receipt" />
			</div>
		</div>
	);
	console.log(newAudit, setNewAudit, isEditting);
};

export default AuditFormBodyCardReceipt;
