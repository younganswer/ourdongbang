import React from 'react';
import Calendar from 'components/Calendar';
import styled from 'styled-components';
import { PageStyle } from './page.style';

const events = [
	{ title: '이벤트 1', date: '2023-09-23' },
	{ title: '이벤트 2', date: '2023-09-25' },
	// 더 많은 이벤트 추가
];

// const Wrapper = styled.div`
// 	display: flex;
// 	width: 1200px;
// 	margin: auto
// 	justify-content: center;
//     align-items: center;
// 	`;

const CalendarContainer = styled.div`
	width: 894px;
	height: 789px;
`;

const InfoContainer = styled.div`
	width: 282px;
	margin-left: 6px;
`;

const CalendarPage: React.FC = () => {
	return (
		<div className={PageStyle}>
			<CalendarContainer>
				<Calendar events={events} />
			</CalendarContainer>
			<InfoContainer></InfoContainer>
		</div>
	);
};

export default CalendarPage;
