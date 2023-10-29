import React from 'react';
import DateRangePicker from './Daterange';
import Participants from './Participants';
import { ScheduleBodyContainer } from './index.style';
import Dues from './Dues';

const ScheduleBody = () => {
	return (
		<div className={ScheduleBodyContainer}>
			<DateRangePicker />
			<Participants />
			<Dues />
		</div>
	);
};

export default ScheduleBody;
