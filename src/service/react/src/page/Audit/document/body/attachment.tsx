import React from 'react';
import { AuditDocumentBodyAttachmentStyle } from './attachment.style';

const AuditDocumentBodyAttachment = (props: { attachment: string }) => {
	const { attachment } = props;

	return (
		<div className={AuditDocumentBodyAttachmentStyle}>
			<div>
				<span>첨 부 사 진</span>
			</div>
			<div>
				<img src={attachment?.toString() || ''} alt="attachment" />
			</div>
		</div>
	);
};

export default AuditDocumentBodyAttachment;
