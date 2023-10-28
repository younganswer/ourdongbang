import React, { Dispatch, SetStateAction } from 'react';
import { AuditDocumentBodyAmountStyle } from './amount.style';

const AuditDocumentBodyAmount = (props: {
	amount: number;
	setAmount: Dispatch<SetStateAction<number>>;
	isExpense: boolean;
	setIsExpense: Dispatch<SetStateAction<boolean>>;
	isEditting: boolean;
}) => {
	const { amount, setAmount, isEditting, isExpense, setIsExpense } = props;

	console.log(isExpense);

	return (
		<div className={AuditDocumentBodyAmountStyle}>
			<div>
				<span>금 액</span>
			</div>
			<div>
				{isEditting ? (
					<input
						type="text"
						value={amount}
						onChange={event => setAmount(parseInt(event.target.value))}
					/>
				) : (
					<span>{amount}</span>
				)}
			</div>
			<div>
				<div>
					<span>지 출</span>
					<input
						type="radio"
						checked={isExpense}
						onChange={() => {
							if (isEditting) {
								setIsExpense(true);
							}
						}}
					/>
				</div>
				<div>
					<span>수 입</span>
					<input
						type="radio"
						checked={!isExpense}
						onChange={() => {
							if (isEditting) {
								setIsExpense(false);
							}
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default AuditDocumentBodyAmount;
