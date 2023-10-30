import React, { Dispatch, SetStateAction } from 'react';
import { AuditDocumentBodyStyle } from './index.style';
import AuditDocumentBodyTitle from './title';
import AuditDocumentBodyDate from './date';
import AuditDocumentBodyFranchise from './franchise';
import AuditDocumentBodyAmount from './amount';
import AuditDocumentBodyBalance from './balance';
import AuditDocumentBodyRemark from './remark';
import AuditDocumentBodyReceipt from './receipt';
import AuditDocumentBodyCardSlip from './card-slip';
import AuditDocumentBodyAttachment from './attachment';

const AuditDocumentBody = (props: {
	title: string;
	setTitle: Dispatch<SetStateAction<string>>;
	date: string;
	setDate: Dispatch<SetStateAction<string>>;
	franchise: string;
	setFranchise: Dispatch<SetStateAction<string>>;
	amount: string;
	setAmount: Dispatch<SetStateAction<string>>;
	isExpense: boolean;
	setIsExpense: Dispatch<SetStateAction<boolean>>;
	balance: string;
	setBalance: Dispatch<SetStateAction<string>>;
	remark: string;
	setRemark: Dispatch<SetStateAction<string>>;
	receiptId: string;
	cardSlipId: string;
	attachmentId: string | undefined;
	isEditting: boolean;
}) => {
	const {
		title,
		setTitle,
		date,
		setDate,
		franchise,
		setFranchise,
		amount,
		setAmount,
		isExpense,
		setIsExpense,
		balance,
		setBalance,
		remark,
		setRemark,
		receiptId,
		cardSlipId,
		attachmentId,
		isEditting,
	} = props;

	return (
		<div className={AuditDocumentBodyStyle}>
			<AuditDocumentBodyTitle title={title} setTitle={setTitle} isEditting={isEditting} />
			<div>
				<AuditDocumentBodyDate date={date} setDate={setDate} isEditting={isEditting} />
				<AuditDocumentBodyFranchise
					franchise={franchise}
					setFranchise={setFranchise}
					isEditting={isEditting}
				/>
			</div>
			<div>
				<AuditDocumentBodyAmount
					amount={amount}
					setAmount={setAmount}
					isExpense={isExpense}
					setIsExpense={setIsExpense}
					isEditting={isEditting}
				/>
				<AuditDocumentBodyBalance
					balance={balance}
					setBalance={setBalance}
					isEditting={isEditting}
				/>
			</div>
			<AuditDocumentBodyRemark remark={remark} setRemark={setRemark} isEditting={isEditting} />
			<div>
				<AuditDocumentBodyReceipt receiptId={receiptId} />
				<AuditDocumentBodyCardSlip cardSlipId={cardSlipId} />
			</div>
			<AuditDocumentBodyAttachment attachmentId={attachmentId} />
		</div>
	);
};

export default AuditDocumentBody;
