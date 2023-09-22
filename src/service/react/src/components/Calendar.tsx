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
    />
  );
};

export default Calendar;
