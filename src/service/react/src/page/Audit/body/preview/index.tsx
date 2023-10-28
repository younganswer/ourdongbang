import React, { Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import {
	AuditDocumentPreviewImageStyle,
	AuditDocumentPreviewStyle,
	AuditDocumentPreviewTitleStyle,
} from './index.style';
import { Modal } from 'component/modal';
import AuditDocumentViewer from '../viewer';
import { Audit } from 'context/AuditContext';
import { Types } from 'mongoose';
import axios from 'axios';
import { ClubContext } from 'context/ClubContext';

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
	const { club } = useContext(ClubContext);

	useEffect(() => {
		if (!isModalOpened || !isEditting) {
			setIsEditting(false);

			const parsedAudit = {
				...newAudit,
				amount: parseInt(newAudit.amount),
				balance: parseInt(newAudit.balance),
			};

			axios
				.patch(
					`${process.env.REACT_APP_NESTJS_URL}/club/${club?._id}/audit/${newAudit._id}`,
					parsedAudit,
					{ withCredentials: true },
				)
				.then(response => {
					if (response.data) {
						setAudits(
							audits?.map(audit => {
								if (audit._id === newAudit._id) {
									return newAudit;
								} else {
									return audit;
								}
							}),
						);
					}
				})
				.catch(err => {
					console.log(err);
				});
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
