import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { datePickerStyle } from './Daterange.style';
import { enUS } from 'date-fns/locale';
import { registerLocale } from 'react-datepicker';

const customLocale = {
	...enUS,
	localize: {
		...enUS.localize,
		day: (day: number) => ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'][day],
		ordinalNumber: (num: number) => `${num}th`,
		era: (num: number) => (num < 0 ? 'BC' : 'AD'),
		quarter: (quarter: number) => `${quarter}Q`,
		month: (month: number) =>
			['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][month],
		dayPeriod: (period: number) => (period < 12 ? 'AM' : 'PM'),
	},
};

registerLocale('custom', customLocale);

const DateRangePicker: React.FC = () => {
	const [startDate, setStartDate] = useState<Date | null>(null);
	const [endDate, setEndDate] = useState<Date | null>(null);

	return (
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
				locale="custom-en"
				inline={true}
			/>
		</div>
	);
};

export default DateRangePicker;
