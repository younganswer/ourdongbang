import React from 'react';
import { AuditDocumentBodyReceiptStyle } from './receipt.style';

const AuditDocumentBodyReceipt = (props: { receipt: string }) => {
	const { receipt } = props;

	return (
		<div className={AuditDocumentBodyReceiptStyle}>
			<div>
				<span>영 수 증</span>
			</div>
			<div>
				<img src={receipt?.toString() || ''} alt="receipt" />
			</div>
		</div>
	);
};

export default AuditDocumentBodyReceipt;
