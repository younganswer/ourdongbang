import React from 'react';
// import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import DateRangePicker from './Daterange';

const SchedulerPage: React.FC = () => {
	return (
		<div>
			<DateRangePicker />
		</div>
	);
};

export default SchedulerPage;
