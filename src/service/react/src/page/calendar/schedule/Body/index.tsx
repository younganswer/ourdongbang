import React from 'react';
import DateRangePicker from './Daterange';
import Participants from './Participants';
import { ScheduleBodyContainer } from './index.style';
import Dues from './Dues';
import { Types } from 'mongoose';

// const ScheduleBody = (props: {setStartDate: }) => {
// 	return (
// 		<div className={ScheduleBodyContainer}>
// 			<DateRangePicker />
// 			<Participants />
// 			<Dues />
// 		</div>
// 	);
// };

const ScheduleBody = (props: {
	setStartDate: React.Dispatch<React.SetStateAction<Date | null>>;
	setEndDate: React.Dispatch<React.SetStateAction<Date | null>>;
	setDescription: React.Dispatch<React.SetStateAction<string>>;
	setFeeAmount: React.Dispatch<React.SetStateAction<number>>;
	setAttendances: React.Dispatch<React.SetStateAction<Types.ObjectId[]>>;
}) => {
	const { setStartDate, setEndDate, setDescription, setFeeAmount, setAttendances } = props;
	console.log(setDescription, setFeeAmount);
	return (
		<div className={ScheduleBodyContainer}>
			<DateRangePicker setStartDate={setStartDate} setEndDate={setEndDate} />
			<Participants setAttendances={setAttendances} />
			<Dues />
		</div>
	);
};

export default ScheduleBody;
