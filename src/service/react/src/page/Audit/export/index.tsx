import React, { useContext } from 'react';
import AuditExportStyle from './index.style';
import { RefObject } from '@fullcalendar/core/preact';
import { ClubContext } from 'context/ClubContext';
import { Audit, AuditContext } from 'context/AuditContext';
import AuditDocument from '../document';

const Title = (props: { clubName: string }) => {
	const { clubName } = props;

	return (
		<div>
			<span>( {clubName} ) 회계 장부</span>
		</div>
	);
};

const MetaData = (props: { clubName: string }) => {
	const { clubName } = props;
	const year = new Date().getFullYear();
	const month = new Date().getMonth() + 1;
	const date = new Date().getDate();

	return (
		<div>
			<div>
				<div>
					<span>동아리 명</span>
				</div>
				<div>
					<span>{clubName}</span>
				</div>
			</div>
			<div>
				<div>
					<span>책 임 자</span>
				</div>
				<div>
					<span>장시아</span>
				</div>
			</div>
			<div>
				<div>
					<span>작성일자</span>
				</div>
				<div>
					<span>
						{year}년 {month}월 {date}일
					</span>
				</div>
			</div>
		</div>
	);
};

const Header = () => {
	return (
		<div>
			<div>
				<div>
					<span>번호</span>
				</div>
				<div>
					<span>날 짜</span>
				</div>
				<div>
					<span>회 계 명</span>
				</div>
				<div>
					<span>상 호 명</span>
				</div>
				<div>
					<span>지 출</span>
				</div>
				<div>
					<span>수 입</span>
				</div>
				<div>
					<span>잔 액</span>
				</div>
			</div>
			<div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};

const Summary = (props: { index: number | null; audit: Audit | null }) => {
	const { index, audit } = props;

	if (!index || !audit) {
		return (
			<div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		);
	}

	return (
		<div>
			<div>
				<span>{index}</span>
			</div>
			<div>
				<span>{audit.created}</span>
			</div>
			<div>
				<span>{audit.title}</span>
			</div>
			<div>
				<span>{audit.franchise}</span>
			</div>
			<div>
				<span>{audit.isExpense ? audit.amount : ''}</span>
			</div>
			<div>
				<span>{!audit.isExpense ? audit.amount : ''}</span>
			</div>
			<div>
				<span>{audit.balance}</span>
			</div>
		</div>
	);
};

const AuditExport = (props: { divRef: RefObject<HTMLDivElement> }) => {
	const { divRef } = props;
	const { club } = useContext(ClubContext);
	const { audits } = useContext(AuditContext);
	const rowNum = 26;

	return (
		<div ref={divRef} className={AuditExportStyle}>
			<div>
				<div></div>
				<Title clubName={club?.name || ''} />
				<MetaData clubName={club?.name || ''} />
			</div>
			<div>
				<Header />
				{audits?.map((audit, index) => {
					return <Summary key={index} index={index} audit={audit} />;
				})}
				{[...Array(rowNum - (audits?.length || 0))].map((_, index) => {
					return <Summary key={index} index={null} audit={null} />;
				})}
			</div>
			{audits?.map((audit, index) => {
				return (
					<AuditDocument
						key={index}
						index={index}
						clubName={club?.name || ''}
						auditor={''}
						setAuditor={() => {}}
						created={audit.created}
						setCreated={() => {}}
						title={audit.title}
						setTitle={() => {}}
						date={audit.date}
						setDate={() => {}}
						franchise={audit.franchise}
						setFranchise={() => {}}
						amount={audit.amount}
						setAmount={() => {}}
						isExpense={audit.isExpense}
						setIsExpense={() => {}}
						balance={audit.balance}
						setBalance={() => {}}
						remark={audit.remark}
						setRemark={() => {}}
						receiptId={audit.receiptId.toString()}
						cardSlipId={audit.cardSlipId?.toString() || ''}
						attachmentId={audit.attachmentId?.toString() || ''}
						isEditting={false}
					/>
				);
			})}
		</div>
	);
};

export default AuditExport;
