import React from 'react';
import { AuditDocumentBodyAttachmentStyle } from './attachment.style';

const AuditDocumentBodyAttachment = (props: { attachmentId: string | undefined }) => {
	const { attachmentId } = props;
	const src = `${process.env.REACT_APP_S3_BUCKET_URL}/attachment/w512/${attachmentId}` || '';

	return (
		<div className={AuditDocumentBodyAttachmentStyle}>
			<div>
				<span>첨 부 사 진</span>
			</div>
			<div>{attachmentId ? <img src={src} alt="attachmentId" /> : null}</div>
		</div>
	);
};

export default AuditDocumentBodyAttachment;
