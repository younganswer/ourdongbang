import React, { Dispatch, SetStateAction, useContext, useState } from 'react';
import { AuditFormStyle } from './index.style';
import { ClubContext } from 'context/ClubContext';
import AuditFormHeader from './header';
import AuditFormBody from './body';
import { Audit } from 'context/AuditContext';
import AuditFormFooter from './footer';

const AuditForm = (props: {
	index: number;
	newAudit: Audit;
	setNewAudit: Dispatch<SetStateAction<Audit>>;
}) => {
	const { index, newAudit, setNewAudit } = props;
	const [isEditting, setIsEditting] = useState(false);
	const { club } = useContext(ClubContext);
	if (!club) {
		return null;
	}

	return (
		<div className={AuditFormStyle}>
			<div>
				<div>
					<AuditFormHeader
						index={index}
						club={club}
						newAudit={newAudit}
						setNewAudit={setNewAudit}
						isEditting={isEditting}
					/>
					<AuditFormBody newAudit={newAudit} setNewAudit={setNewAudit} isEditting={isEditting} />
				</div>
			</div>
			<AuditFormFooter setIsEditting={setIsEditting} />
		</div>
	);
};

export default AuditForm;
