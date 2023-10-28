import React from 'react';
import { AuditDocumentBodyCardSlipStyle } from './card-slip.style';

const AuditDocumentBodyCardSlip = (props: { cardSlipId: string }) => {
	const { cardSlipId } = props;
	const src = `${process.env.REACT_APP_S3_BUCKET_URL}/card-slip/w512/${cardSlipId}` || '';

	return (
		<div className={AuditDocumentBodyCardSlipStyle}>
			<div>
				<span>카 드 전 표</span>
			</div>
			<div>
				<img src={src} alt="card-receipt" />
			</div>
		</div>
	);
};

export default AuditDocumentBodyCardSlip;
