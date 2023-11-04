import { css } from '@emotion/css';

export const datePickerStyle = css`
	.react-datepicker {
		width: 352px;
		height: 333px;
		background-color: transparent;
		border: none;
		border-top: 1px solid black;
	}

	.react-datepicker__navigation {
		margin-left: 20px; /* 왼쪽 여백을 줄임 */
		margin-right: 20px; /* 오른쪽 여백을 줄임 */
	}

	.react-datepicker__month-container {
		width: 352px;
		/* 최대 높이 설정 */
		max-height: 400px;
		background-color: transparent;
		overflow: hidden; /* 내용이 벗어나면 숨김 */
	}

	.react-datepicker__current-month {
	}

	.react-datepicker__week {
		width: 340px;
		/* 유동적인 높이 설정 */
		height: calc(100% / 6);
		min-height: 42px; /* 최소 높이 설정 */
		max-height: 50px; /* 최대 높이 설정 */
	}

	.react-datepicker__header {
		background-color: transparent;
		border-bottom: none;
		padding-top: 14px;
	}

	.react-datepicker__day-name {
		width: 40px;
		font-size: 0;
	}
	/* 기존 요일 이름을 숨김 */
	.react-datepicker__day-name:nth-child(1)::after {
		content: 'SUN';
		font-size: 16px;
		color: gray;
	}

	.react-datepicker__day-name:nth-child(2)::after {
		content: 'MON';
		font-size: 16px;
		color: gray;
	}

	.react-datepicker__day-name:nth-child(3)::after {
		content: 'TUE';
		font-size: 16px;
		color: gray;
	}

	.react-datepicker__day-name:nth-child(4)::after {
		content: 'WED';
		font-size: 16px;
		color: gray;
	}

	.react-datepicker__day-name:nth-child(5)::after {
		content: 'THU';
		font-size: 16px;
		color: gray;
	}

	.react-datepicker__day-name:nth-child(6)::after {
		content: 'FRI';
		font-size: 16px;
		color: gray;
	}

	.react-datepicker__day-name:nth-child(7)::after {
		content: 'SAT';
		font-size: 16px;
		color: gray;
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

export const DateTitleStyle = css({
	width: '75%',
	alignItems: 'center',
	paddingTop: '40px',
	paddingBottom: '70px',

	'> div: nth-child(1)': {
		display: 'flex',
		alignItems: 'center',
		padding: '15px',
		gap: '15px',
		fontFamily: 'Pretendard-bold',
		marginBottom: '45px',
	},
	'> div: nth-child(2)': {
		padding: '15px',
		fontFamily: 'Pretendard-bold',
		fontSize: '20px',
	},
});

export const DateContainerStyle = css({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	borderRight: '1px solid black',
});
