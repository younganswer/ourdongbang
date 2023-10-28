import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import {
	AuditDocumentPreviewImageStyle,
	AuditDocumentPreviewStyle,
	AuditDocumentPreviewTitleStyle,
} from './index.style';
import { Modal } from 'component/modal';
import AuditDocumentViewer from '../viewer';
import { Audit } from 'context/AuditContext';
import { Types } from 'mongoose';

const AuditDocumentPreviewImage = (props: { imageId: Types.ObjectId }) => {
	const { imageId } = props;

	return <div className={AuditDocumentPreviewImageStyle}>이미지</div>;
	console.log(imageId);
};

const AuditDocumentPreviewTitle = (props: { title: string }) => {
	const { title } = props;

	return <div className={AuditDocumentPreviewTitleStyle}>{title}</div>;
};

const AuditDocumentPreview = (props: {
	index: number;
	audit: Audit;
	audits: Audit[];
	setAudits: Dispatch<SetStateAction<Audit[] | null>>;
}) => {
	const { index, audit, audits, setAudits } = props;
	const [newAudit, setNewAudit] = useState<Audit>(audit);
	const [isModalOpened, setIsModalOpened] = useState(false);
	const [isEditting, setIsEditting] = useState(false);

	useEffect(() => {
		if (!isModalOpened || !isEditting) {
			//
		}
	}, [isModalOpened, isEditting]);

	return (
		<>
			<div className={AuditDocumentPreviewStyle} onClick={() => setIsModalOpened(true)}>
				<AuditDocumentPreviewImage imageId={audit.attachment || audit.receipt} />
				<AuditDocumentPreviewTitle title={audit.title} />
			</div>
			{isModalOpened && (
				<Modal setIsModalOpened={setIsModalOpened}>
					<AuditDocumentViewer
						index={index}
						newAudit={newAudit}
						setNewAudit={setNewAudit}
						isEditting={isEditting}
						setIsEditting={setIsEditting}
					/>
				</Modal>
			)}
		</>
	);
	console.log(audit, audits, setAudits);
};

export default AuditDocumentPreview;
