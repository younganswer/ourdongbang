import React, { Dispatch, SetStateAction, useState } from 'react';
import { AuditDocumentBodyDateStyle } from './date.style';

const AuditDocumentBodyDate = (props: {
	date: string;
	setDate: Dispatch<SetStateAction<string>>;
	isEditting: boolean;
}) => {
	const { date, setDate, isEditting } = props;
	const [currentDate, setCurrentDate] = useState<string>(date);

	return (
		<div className={AuditDocumentBodyDateStyle}>
			<div>
				<span>일 자</span>
			</div>
			<div>
				{isEditting ? (
					<input
						type="text"
						value={currentDate}
						onChange={event => {
							setCurrentDate(event.target.value);
						}}
						onBlur={() => {
							const regex = /^\d{4}-\d{2}-\d{2}$/;

							if (!regex.test(currentDate)) {
								alert('날짜는 yyyy-mm-dd 형식으로 입력해주세요.');
								setCurrentDate(date);
								return;
							}
							setDate(currentDate);
						}}
					/>
				) : (
					<span>{date}</span>
				)}
			</div>
		</div>
	);
};

export default AuditDocumentBodyDate;
