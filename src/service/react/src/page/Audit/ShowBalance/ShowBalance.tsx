import React from 'react';
import { ShowBalanceStyle, items } from './ShowBalance.style';

interface ShowBalanceData {
	totalBudget: number;
	balance: number;
}

export const ShowBalance: React.FC<ShowBalanceData> = ({ totalBudget, balance }) => {
	// totalBudget(총 예산[회비]), balance (잔액)은 현준이 API와 연동 후 변경되도록 할 예정 -> 수정 필요
	// 일단 입력값을 주어서 임의로 잔액 설정

	return (
		<div className={ShowBalanceStyle}>
			<div className={items}>
				<h2>전체회비 : {totalBudget}원</h2>
			</div>
			<div className={items}>
				<h2>남은 공금 : {balance}원</h2>
			</div>
		</div>
	);
};
