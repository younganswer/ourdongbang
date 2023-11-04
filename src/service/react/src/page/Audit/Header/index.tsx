import React from 'react';
import { AuditPageHeaderStyle } from './index.style';
import { Club } from 'context/ClubContext';
import { PiggyBankIcon } from './icon';

const AuditPageHeader = (props: { club: Club }) => {
	const { club } = props;

	if (!club) {
		return null;
	}

	return (
		<div className={AuditPageHeaderStyle}>
			<div>
				<PiggyBankIcon width={40} height={31} />
				<span>회계</span>
			</div>
			<div>
				<div>
					<span>전체 공금</span>
					<span>{club.totalBudget}원</span>
				</div>
				<div>
					<span>남은 공금</span>
					<span>{club.balance}원</span>
				</div>
			</div>
		</div>
	);
};

export default AuditPageHeader;
