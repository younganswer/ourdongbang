import { css } from '@emotion/css';

export const datePickerStyle = css`
	.react-datepicker {
		width: 352px;
		background-color: transparent;
	}

	.react-datepicker__month-container {
		width: 352px;
		height: 333px;
		background-color: transparent;
	}
	.react-datepicker__week {
		width: 340px;
		height: 50px;
	}

	.react-datepicker__header {
	}

	.react-datepicker__day-name {
		width: 40px;
		font-size: 0;
	}
	/* 기존 요일 이름을 숨김 */
	.react-datepicker__day-name:nth-child(1)::after {
		content: 'SUN';
		font-size: 16px;
	}

	.react-datepicker__day-name:nth-child(2)::after {
		content: 'MON';
		font-size: 16px;
	}

	.react-datepicker__day-name:nth-child(3)::after {
		content: 'TUE';
		font-size: 16px;
	}

	.react-datepicker__day-name:nth-child(4)::after {
		content: 'WED';
		font-size: 16px;
	}

	.react-datepicker__day-name:nth-child(5)::after {
		content: 'THU';
		font-size: 16px;
	}

	.react-datepicker__day-name:nth-child(6)::after {
		content: 'FRI';
		font-size: 16px;
	}

	.react-datepicker__day-name:nth-child(7)::after {
		content: 'SAT';
		font-size: 16px;
	}

	.react-datepicker__day-names {
		margin-top: 10px;
		font-color: gray;
		font-size: 16px;
	}
	.react-datepicker__day {
		font-size: 16px;
		height: 24px;
		width: 40px;
		margin: 5px 5px 1px 1px;
	}
	.react-datepicker__day--outside-month {
		color: #a9a9a9;
	}
`;
