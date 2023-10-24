import React, { useState } from 'react';
import {
	AuditDocumentPreviewImageStyle,
	AuditDocumentPreviewStyle,
	AuditDocumentPreviewTitleStyle,
} from './index.style';
import { Modal } from 'component/modal';
import AuditForm from 'page/Audit/form';

const AuditDocumentPreviewImage = () => {
	return <div className={AuditDocumentPreviewImageStyle}>이미지</div>;
};

const AuditDocumentPreviewTitle = () => {
	return <div className={AuditDocumentPreviewTitleStyle}>제목</div>;
};

const AuditDocumentPreview = () => {
	const [isModalOpened, setIsModalOpened] = useState(false);

	return (
		<>
			<div className={AuditDocumentPreviewStyle} onClick={() => setIsModalOpened(true)}>
				<AuditDocumentPreviewImage />
				<AuditDocumentPreviewTitle />
			</div>
			{isModalOpened && (
				<Modal setIsModalOpened={setIsModalOpened}>
					<AuditForm />
				</Modal>
			)}
		</>
	);
	console.log(setIsModalOpened);
};

export default AuditDocumentPreview;
