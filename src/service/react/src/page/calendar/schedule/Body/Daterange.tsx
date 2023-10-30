import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { DateContainerStyle, datePickerStyle } from './Daterange.style';
import { ko } from 'date-fns/locale';
import { CalendarIcon } from './icon';
import { TitleContainer } from './TitleContainer';

const DateRangePicker: React.FC = () => {
	const [startDate, setStartDate] = useState<Date | null>(null);
	const [endDate, setEndDate] = useState<Date | null>(null);

	return (
		<div className={DateContainerStyle}>
			<>
				<TitleContainer
					titleIcon={<CalendarIcon height={25} width={25} />}
					title="기간"
					subtitle="달력에서 선택해주세요"
				/>
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
