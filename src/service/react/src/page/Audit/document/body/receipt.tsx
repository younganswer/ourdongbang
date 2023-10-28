import React from 'react';
import { AuditDocumentBodyReceiptStyle } from './receipt.style';

const AuditDocumentBodyReceipt = (props: { receiptId: string }) => {
	const { receiptId } = props;
	const src = `${process.env.REACT_APP_S3_BUCKET_URL}/receipt/w512/${receiptId}` || '';

	return (
		<div className={AuditDocumentBodyReceiptStyle}>
			<div>
				<span>영 수 증</span>
			</div>
			<div>
				<img src={src} alt="receiptId" />
			</div>
		</div>
	);
};

export default AuditDocumentBodyReceipt;
