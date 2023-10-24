import React, { Dispatch, SetStateAction } from 'react';
import { AuditFormBodyAmountStyle } from './amount.style';
import { Audit } from 'context/AuditContext';

const AuditFormBodyAmount = (props: {
	newAudit: Audit;
	setNewAudit: Dispatch<SetStateAction<Audit>>;
	isEditting: boolean;
}) => {
	const { newAudit, setNewAudit, isEditting } = props;

	return (
		<div className={AuditFormBodyAmountStyle}>
			<div>
				<span>금 액</span>
			</div>
			<div>
				{isEditting ? (
					<input
						type="text"
						value={newAudit.amount}
						onChange={event => setNewAudit({ ...newAudit, amount: parseInt(event.target.value) })}
					/>
				) : (
					<span>{newAudit.amount}</span>
				)}
			</div>
			<div>
				<div>
					<span>지 출</span>
					{isEditting ? (
						<input
							type="radio"
							name="amount"
							onClick={() => {
								setNewAudit({ ...newAudit, isExpense: true });
							}}
						/>
					) : newAudit.isExpense ? (
						<input type="radio" name="amount" checked />
					) : (
						<input
							type="radio"
							name="amount"
							onClick={event => {
								event.preventDefault();
							}}
						/>
					)}
				</div>
				<div>
					<span>수 입</span>
					{isEditting ? (
						<input
							type="radio"
							name="amount"
							onClick={() => {
								setNewAudit({ ...newAudit, isExpense: false });
							}}
						/>
					) : newAudit.isExpense ? (
						<input
							type="radio"
							name="amount"
							onClick={event => {
								event.preventDefault();
							}}
						/>
					) : (
						<input type="radio" name="amount" checked />
					)}
				</div>
			</div>
		</div>
	);
};

export default AuditFormBodyAmount;
