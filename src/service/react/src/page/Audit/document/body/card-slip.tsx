import React from 'react';
import { AuditDocumentBodyCardSlipStyle } from './card-slip.style';

const AuditDocumentBodyCardSlip = (props: { cardSlip: string }) => {
	const { cardSlip } = props;

	return (
		<div className={AuditDocumentBodyCardSlipStyle}>
			<div>
				<span>카 드 전 표</span>
			</div>
			<div>
				<img src={cardSlip?.toString() || ''} alt="card-receipt" />
			</div>
		</div>
	);
};

export default AuditDocumentBodyCardSlip;
