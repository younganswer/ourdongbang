import React, { Dispatch, SetStateAction } from 'react';
import { AuditFormBodyStyle } from './index.style';
import AuditFormBodyTitle from './title';
import AuditFormBodyDate from './date';
import AuditFormBodyFranchise from './franchise';
import AuditFormBodyAmount from './amount';
import AuditFormBodyBalance from './balance';
import AuditFormBodyRemark from './remark';
import AuditFormBodyReceipt from './receipt';
import AuditFormBodyCardReceipt from './card-receipt';
import AuditFormBodyAttachment from './attachment';
import { Audit } from 'context/AuditContext';

const AuditFormBody = (props: {
	newAudit: Audit;
	setNewAudit: Dispatch<SetStateAction<Audit>>;
	isEditting: boolean;
}) => {
	const { newAudit, setNewAudit, isEditting } = props;

	return (
		<div className={AuditFormBodyStyle}>
			<AuditFormBodyTitle newAudit={newAudit} setNewAudit={setNewAudit} isEditting={isEditting} />
			<div>
				<AuditFormBodyDate newAudit={newAudit} setNewAudit={setNewAudit} isEditting={isEditting} />
				<AuditFormBodyFranchise
					newAudit={newAudit}
					setNewAudit={setNewAudit}
					isEditting={isEditting}
				/>
			</div>
			<div>
				<AuditFormBodyAmount
					newAudit={newAudit}
					setNewAudit={setNewAudit}
					isEditting={isEditting}
				/>
				<AuditFormBodyBalance
					newAudit={newAudit}
					setNewAudit={setNewAudit}
					isEditting={isEditting}
				/>
			</div>
			<AuditFormBodyRemark newAudit={newAudit} setNewAudit={setNewAudit} isEditting={isEditting} />
			<div>
				<AuditFormBodyReceipt
					newAudit={newAudit}
					setNewAudit={setNewAudit}
					isEditting={isEditting}
				/>
				<AuditFormBodyCardReceipt
					newAudit={newAudit}
					setNewAudit={setNewAudit}
					isEditting={isEditting}
				/>
			</div>
			<AuditFormBodyAttachment
				newAudit={newAudit}
				setNewAudit={setNewAudit}
				isEditting={isEditting}
			/>
		</div>
	);
	console.log(newAudit, setNewAudit, isEditting);
};

export default AuditFormBody;
