import React, { useContext } from 'react';
import { ShowBalanceStyle, HeaderStyle } from './index.style';
import { ClubContext } from 'context/ClubContext';

const ShowBalance = (props: { totalBudget: number; balance: number }) => {
	// totalBudget(총 예산[회비]), balance (잔액)은 현준이 API와 연동 후 변경되도록 할 예정 -> 수정 필요
	// 일단 입력값을 주어서 임의로 잔액 설정
	const { totalBudget, balance } = props;

	return (
		<div className={ShowBalanceStyle}>
			<div>
				<span>전체 공금</span>
				<span>{totalBudget}원</span>
			</div>
			<div>
				<span>남은 공금</span>
				<span>{balance}원</span>
			</div>
		</div>
	);
};

const AuditDocumentHeader = () => {
	const { club } = useContext(ClubContext);

	if (!club) {
		return null;
	}

	return (
		<div className={HeaderStyle}>
			<span>회계</span>
			<ShowBalance totalBudget={club.totalBudget} balance={club.balance} />
		</div>
	);
};

export default AuditDocumentHeader;
