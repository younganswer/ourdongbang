import React from 'react';
// import { Routes, Route } from 'react-router-dom';
import Calendar from '../component/Calendar';
import styled from 'styled-components';
import { PageStyle } from './page.style';
import NotificationCard from './NotificationCard';
// import SchedulerPage from './SchedulerPage';

const events = [
	{ title: '이벤트 1', date: '2023-09-23' },
	{ title: '이벤트 2', date: '2023-09-25' },
	// 더 많은 이벤트 추가
];

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const CalendarContainer = styled.div`
	width: 894px;
	height: 789px;
	background-color: white;
	padding: 20px;
`;

const InfoContainer = styled.div`
	display: flex;
	width: 282px;
	margin-left: 4px;
	background-color: white;
`;

const CalendarPage: React.FC = () => {
	return (
		<div className={PageStyle}>
			<Wrapper>
				<CalendarContainer>
					<Calendar events={events} />
				</CalendarContainer>
				<InfoContainer>
					{/* 이달의 참여왕 여기 추가 */}
					<NotificationCard />
				</InfoContainer>
			</Wrapper>
		</div>
	);
};

export default CalendarPage;
