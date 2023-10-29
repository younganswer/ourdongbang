import React, { Dispatch, SetStateAction } from 'react';
import { AuditDocumentStyle } from './index.style';
import AuditDocumentHeader from './header';
import AuditDocumentBody from './body';

const AuditDocument = (props: {
	index: number | null;
	clubName: string;
	auditor: string;
	setAuditor: Dispatch<SetStateAction<string>>;
	created: string;
	setCreated: Dispatch<SetStateAction<string>>;
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
	attachmentId: string;
	isEditting: boolean;
}) => {
	const {
		index,
		clubName,
		auditor,
		setAuditor,
		created,
		setCreated,
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
		<div className={AuditDocumentStyle}>
			<div>
				<AuditDocumentHeader
					index={index}
					clubName={clubName}
					auditor={auditor}
					setAuditor={setAuditor}
					created={created}
					setCreated={setCreated}
					isEditting={isEditting}
				/>
				<AuditDocumentBody
					title={title}
					setTitle={setTitle}
					date={date}
					setDate={setDate}
					franchise={franchise}
					setFranchise={setFranchise}
					amount={amount}
					setAmount={setAmount}
					isExpense={isExpense}
					setIsExpense={setIsExpense}
					balance={balance}
					setBalance={setBalance}
					remark={remark}
					setRemark={setRemark}
					receiptId={receiptId}
					cardSlipId={cardSlipId}
					attachmentId={attachmentId}
					isEditting={isEditting}
				/>
			</div>
		</div>
	);
};

export default AuditDocument;
