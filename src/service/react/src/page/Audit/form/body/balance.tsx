import React, { Dispatch, SetStateAction } from 'react';
import { AuditFormBodyBalanceStyle } from './balance.style';
import { Audit } from 'context/AuditContext';

const AuditFormBodyBalance = (props: {
	newAudit: Audit;
	setNewAudit: Dispatch<SetStateAction<Audit>>;
	isEditting: boolean;
}) => {
	const { newAudit, setNewAudit, isEditting } = props;

	return (
		<div className={AuditFormBodyBalanceStyle}>
			<div>
				<span>잔 액</span>
			</div>
			<div>
				{isEditting ? (
					<input
						type="text"
						value={newAudit.balance}
						onChange={event => setNewAudit({ ...newAudit, balance: parseInt(event.target.value) })}
					/>
				) : (
					<span>{newAudit.balance}</span>
				)}
			</div>
		</div>
	);
};

export default AuditFormBodyBalance;
