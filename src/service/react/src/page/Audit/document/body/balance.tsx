import React, { Dispatch, SetStateAction, useState } from 'react';
import { AuditDocumentBodyBalanceStyle } from './balance.style';

const AuditDocumentBodyBalance = (props: {
	balance: string;
	setBalance: Dispatch<SetStateAction<string>>;
	isEditting: boolean;
}) => {
	const { balance, setBalance, isEditting } = props;
	const [currentBalance, setCurrentBalance] = useState<string>(balance);

	return (
		<div className={AuditDocumentBodyBalanceStyle}>
			<div>
				<span>잔 액</span>
			</div>
			<div>
				{isEditting ? (
					<input
						type="text"
						value={currentBalance}
						onChange={event => setCurrentBalance(event.target.value)}
						onBlur={() => {
							const regex = /\D/;

							if (regex.test(currentBalance)) {
								alert('숫자만 입력해주세요.');
								setCurrentBalance(balance);
								return;
							}
							setBalance(currentBalance);
						}}
					/>
				) : (
					<span>{balance}</span>
				)}
			</div>
		</div>
	);
};

export default AuditDocumentBodyBalance;
