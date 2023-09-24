import React from 'react';
import Calendar from 'components/Calendar';

const events = [
	{ title: '이벤트 1', date: '2023-09-23' },
	{ title: '이벤트 2', date: '2023-09-25' },
	// 더 많은 이벤트 추가
];

const CalendarPage: React.FC = () => {
	return (
		<div className="calendar">
			<Calendar events={events} />
		</div>
	);
};

export default CalendarPage;
