import React, { Dispatch, SetStateAction } from 'react';
import { AuditDocumentBodyBalanceStyle } from './balance.style';

const AuditDocumentBodyBalance = (props: {
	balance: number;
	setBalance: Dispatch<SetStateAction<number>>;
	isEditting: boolean;
}) => {
	const { balance, setBalance, isEditting } = props;

	return (
		<div className={AuditDocumentBodyBalanceStyle}>
			<div>
				<span>잔 액</span>
			</div>
			<div>
				{isEditting ? (
					<input
						type="text"
						value={balance}
						onChange={event => setBalance(parseInt(event.target.value))}
					/>
				) : (
					<span>{balance}</span>
				)}
			</div>
		</div>
	);
};

export default AuditDocumentBodyBalance;
