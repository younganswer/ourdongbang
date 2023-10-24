import React, { Dispatch, SetStateAction } from 'react';
import { AuditFormBodyReceiptStyle } from './receipt.style';
import { Audit } from 'context/AuditContext';

const AuditFormBodyReceipt = (props: {
	newAudit: Audit;
	setNewAudit: Dispatch<SetStateAction<Audit>>;
	isEditting: boolean;
}) => {
	const { newAudit, setNewAudit, isEditting } = props;

	return (
		<div className={AuditFormBodyReceiptStyle}>
			<div>
				<span>영 수 증</span>
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
								//	setNewAudit({ ...newAudit, receipt: reader.result as string });
								//};
							}
						}}
					/>
				) : (
					<img src={newAudit.receipt?.toString() || ''} alt="receipt" />
				)}
			</div>
		</div>
	);
	console.log(newAudit, setNewAudit, isEditting);
};

export default AuditFormBodyReceipt;
