import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { DateContainerStyle, DateTitleStyle, datePickerStyle } from './Daterange.style';
import { ko } from 'date-fns/locale';
import { CalendarIcon } from './icon';

export const DateTitle = () => {
	return (
		<div className={DateTitleStyle}>
			<div>
				<CalendarIcon height={25} width={25} />
				<span>기간</span>
			</div>
			<span>달력에서 선택해주세요.</span>
		</div>
	);
};

const DateRangePicker: React.FC = () => {
	const [startDate, setStartDate] = useState<Date | null>(null);
	const [endDate, setEndDate] = useState<Date | null>(null);

	return (
		<div className={DateContainerStyle}>
			<>
				<DateTitle />
			</>
			<div className={datePickerStyle}>
				<DatePicker
					selected={startDate}
					onChange={(dates: [Date | null, Date | null]) => {
						const [start, end] = dates;
						setStartDate(start);
						setEndDate(end);
					}}
					startDate={startDate}
					endDate={endDate}
					selectsRange={true}
					locale={ko}
					inline={true}
				/>
			</div>
		</div>
	);
};

export default DateRangePicker;
