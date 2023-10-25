import React, { Dispatch, SetStateAction } from 'react';
import { AuditFormBodyReceiptStyle } from './receipt.style';
import { Audit } from 'context/AuditContext';

const AuditFormBodyReceipt = (props: {
	newAudit: Audit;
	setNewAudit: Dispatch<SetStateAction<Audit>>;
	isEditting: boolean;
}) => {
	const { newAudit, setNewAudit, isEditting } = props;

	return (
		<div className={AuditFormBodyReceiptStyle}>
			<div>
				<span>영 수 증</span>
			</div>
			<div>
				<img src={newAudit.receipt?.toString() || ''} alt="receipt" />
			</div>
		</div>
	);
	console.log(newAudit, setNewAudit, isEditting);
};

export default AuditFormBodyReceipt;
