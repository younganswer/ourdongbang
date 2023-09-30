import { css } from '@emotion/css';

export const EditModalBackgroundStyle = css({
	position: 'fixed',
	top: 0,
	left: 0,
	width: '100%',
	height: '100%',
	backgroundColor: 'rgba(0, 0, 0, 0.5)',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	zIndex: 10000,
});

export const EditModalStyle = css({
	position: 'absolute',
	width: 408,
	height: 789,
	backgroundColor: 'white',
	borderRadius: '10px',
	boxShadow: '0 2px 3px 0 rgba(34, 36, 38, 0.15)',

	display: 'grid',
	gridTemplateRows: '50px 1fr 50px',
});

export const EditProfileHeaderStyle = css({
	gridRow: 1,
	marginTop: '0.5rem',
	display: 'grid',
	gridTemplateColumns: '50px 1fr 50px',
	textAlign: 'center',

	'> span': {
		lineHeight: '50px',
	},
	'> span:nth-child(1)': {
		gridColumn: 2,
		fontSize: '20px',
	},
	'> span:nth-child(2)': {
		gridColumn: 3,
		fontSize: '20px',
		':hover': {
			cursor: 'pointer',
		},
	},
});

export const EditProfileImageStyle = css({
	gridRow: 2,
	margin: '4rem auto 0 auto',
	width: '90%',

	'> div:nth-child(1)': {
		display: 'flex',
		justifyContent: 'space-between',

		'> span:nth-child(2)': {
			color: '#0000FF',
			':hover': {
				cursor: 'pointer',
			},
		},
	},

	'> div:nth-child(2)': {
		marginTop: '1rem',
		display: 'flex',

		'> svg': {
			margin: 'auto',
		},
	},
});

export const EditInformationStyle = css({
	width: '90%',
	margin: '4rem auto 0 auto',

	'> div:nth-child(1)': {
		marginBottom: '2rem',
	},

	'> div:nth-child(n+2)': {
		width: '90%',
		margin: '0 auto',
		marginBottom: '1rem',
		display: 'flex',
		justifyContent: 'space-between',

		'> span:nth-child(2)': {
			width: '50%',
			textAlign: 'right',
		},

		'> input:nth-child(2)': {
			width: '48%',
			textAlign: 'right',
		},
	},
});

export const EditButtonStyle = css({
	width: '90%',
	margin: '0 auto',

	'> button': {
		width: '100%',
		':hover': {
			cursor: 'pointer',
		},
	},
});
