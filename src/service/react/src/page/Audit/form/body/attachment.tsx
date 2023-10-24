import React, { Dispatch, SetStateAction } from 'react';
import { AuditFormBodyAttachmentStyle } from './attachment.style';
import { Audit } from 'context/AuditContext';

const AuditFormBodyAttachment = (props: {
	newAudit: Audit;
	setNewAudit: Dispatch<SetStateAction<Audit>>;
	isEditting: boolean;
}) => {
	const { newAudit, setNewAudit, isEditting } = props;

	return (
		<div className={AuditFormBodyAttachmentStyle}>
			<div>
				<span>첨 부 사 진</span>
			</div>
			<div>
				{/* upload image when is editting */}
				{isEditting ? (
					<input
						type="file"
						onChange={event => {
							if (event.target.files) {
								//const file = event.target.files[0];
								//const reader = new FileReader();
								//reader.readAsDataURL(file);
								//reader.onloadend = () => {
								//	setNewAudit({ ...newAudit, attachment: reader.result as string });
								//};
							}
						}}
					/>
				) : (
					<img src={newAudit.attachment?.toString() || ''} alt="attachment" />
				)}
			</div>
		</div>
	);
	console.log(newAudit, setNewAudit, isEditting);
};

export default AuditFormBodyAttachment;
