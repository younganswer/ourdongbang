import { css } from '@emotion/css';

export const ScheduleHeaderContainer = css({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	borderBottom: '1px solid black',
});

export const BackAndInputTitleContainer = css({
	display: 'flex',
	alignItems: 'center',
	gap: '10px',
	'> input': {
		backgroundColor: 'transparent',
		border: 'none',
		fontSize: '20px',
	},
	padding: '20px',
});

export const ScheduleRegisterButtonStyle = css({
	display: 'inline-flex',
	padding: '20px',
	justifyContent: 'center',
	alignItems: 'center',
	gap: '10px',
	'> button': {
		color: '#000',
		fontFamily: 'Pretendard',
		fontSize: '20px',
		fontWeight: 500,
		lineHeight: '150%',
		letterSpacing: '-0.44px',
		border: 'none',
	},
});
