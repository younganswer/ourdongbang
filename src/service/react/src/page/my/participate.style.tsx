import { css } from '@emotion/css';

export const ParticipateStyle = css({
	width: 764,
	height: 789,
	gridColumn: '2',
	display: 'grid',
	gridTemplateRows: '147px 613px',
	rowGap: '29px',
});

export const ParticipationStyle = css({
	width: '100%',
	height: 147,
	gridRow: '1',
	display: 'grid',
	gridTemplateRows: '1fr 50px 20px 1fr',
	backgroundColor: 'white',

	'> *': {
		width: '90%',
		margin: '0 auto 0 auto',
	},

	'div:nth-child(1)': {
		gridRow: '2',
		'span:nth-child(1)': {
			fontSize: '24px',
			fontWeight: 900,
			lineHeight: '150%' /* 36px */,
			letterSpacing: '-0.528px',
		},
		'span:nth-child(2)': {
			marginLeft: '1rem',
			fontSize: '16px',
			fontWeight: 400,
			lineHeight: '150%' /* 24px */,
			letterSpacing: '-0.352px',
		},
	},

	'div:nth-child(2)': {
		gridRow: '3',
		border: '1px solid black',
	},
});

export const ParticipatedStyle = css({
	width: '100%',
	height: 613,
	gridRow: '2',
	display: 'grid',
	gridTemplateRows: '36px 36px 36px 1fr',
	backgroundColor: 'white',

	'> *': {
		width: '90%',
		margin: '0 auto 0 auto',
	},

	'> span': {
		gridRow: '2',
		fontSize: '24px',
		fontWeight: 900,
		lineHeight: '150%' /* 36px */,
		letterSpacing: '-0.528px',
	},

	'> div': {
		gridRow: '4',

		'> div': {
			height: 84,
			display: 'grid',
			gridTemplateColumns: '84px 1fr 112px',
			marginBottom: '37px',

			'> div:nth-child(1)': {
				gridColumn: '1',
				height: '84px',
				backgroundColor: '#D9D9D9',
				fontSize: '20px',
				fontWeight: 500,
				lineHeight: '84px',
				letterSpacing: '-0.44px',
				textAlign: 'center',
			},

			'> div:nth-child(2)': {
				gridColumn: '2',
				height: '84px',
				fontSize: '20px',
				fontWeight: 500,
				lineHeight: '84px',
				letterSpacing: '-0.44px',
				margin: '0 2rem 0 2rem',
			},

			'> div:nth-child(3)': {
				height: '50px',
				margin: '17px 0 17px 0',
				gridColumn: '3',
				fontSize: '20px',
				fontWeight: 700,
				lineHeight: '50px',
				letterSpacing: '-0.44px',
				textAlign: 'center',
				border: '1px solid black',
				backgroundColor: '#D9D9D9',
			},
		},
	},
});
