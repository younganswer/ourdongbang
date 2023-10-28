import React from 'react';
import { AuditDocumentBodyCardReceiptStyle } from './card-receipt.style';

const AuditDocumentBodyCardReceipt = (props: { cardReceipt: string }) => {
	const { cardReceipt } = props;

	return (
		<div className={AuditDocumentBodyCardReceiptStyle}>
			<div>
				<span>카 드 전 표</span>
			</div>
			<div>
				<img src={cardReceipt?.toString() || ''} alt="card-receipt" />
			</div>
		</div>
	);
};

export default AuditDocumentBodyCardReceipt;
