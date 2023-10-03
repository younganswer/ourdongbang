import React, { useRef, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
// import '@fullcalendar/core/main.css'; // FullCalendar CSS

interface CalendarProps {
	events: Event[];
}

interface Event {
	title: string;
	date: string;
}

const Calendar: React.FC<CalendarProps> = ({ events }) => {
	const calendarRef = useRef<FullCalendar>(null);

	const handleAddEventClick = () => {
		// TODO: 이벤트 추가 로직을 여기에 구현
		console.log('일정 추가 버튼이 클릭되었습니다.');
	};

	const customButtons = {
		myCustomButton: {
			text: '일정등록',
			click: handleAddEventClick,
		},
	};

	useEffect(() => {
		if (calendarRef.current) {
			calendarRef.current.getApi().addEventSource(events);
		}
	}, [events]);

	return (
		<FullCalendar
			ref={calendarRef}
			plugins={[dayGridPlugin]}
			initialView="dayGridMonth"
			events={events}
			customButtons={customButtons}
			buttonText={{
				today: '오늘날짜', // "Today" 버튼 텍스트를 한국어로 변경
			}}
			headerToolbar={{
				left: 'prev,next',
				center: 'title',
				right: 'today myCustomButton',
			}}
			locale="ko"
		/>
	);
};

export default Calendar;
