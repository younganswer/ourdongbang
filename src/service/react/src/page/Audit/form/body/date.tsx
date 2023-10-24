import React, { Dispatch, SetStateAction } from 'react';
import { AuditFormBodyDateStyle } from './date.style';
import { Audit } from 'context/AuditContext';

const AuditFormBodyDate = (props: {
	newAudit: Audit;
	setNewAudit: Dispatch<SetStateAction<Audit>>;
	isEditting: boolean;
}) => {
	const { newAudit, setNewAudit, isEditting } = props;

	return (
		<div className={AuditFormBodyDateStyle}>
			<div>
				<span>일 자</span>
			</div>
			<div>
				{isEditting ? (
					<input
						type="text"
						value={newAudit.date}
						onChange={event =>
							setNewAudit({
								...newAudit,
								date: event.target.value,
							})
						}
					/>
				) : (
					<span>{newAudit.date}</span>
				)}
			</div>
		</div>
	);
};

export default AuditFormBodyDate;
