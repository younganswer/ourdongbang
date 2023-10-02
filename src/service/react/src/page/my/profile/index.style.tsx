import { css } from '@emotion/css';

export const ProfileStyle = css({
	width: 408,
	height: 789,
	gridColumn: '1',
	display: 'grid',
	gridTemplateRows: '60px 1fr 60px',
	backgroundColor: 'white',
});

export const ProfileHeaderStyle = css({
	display: 'flex',
	justifyContent: 'space-between',
	width: '90%',
	margin: '0 auto',

	'> span': {
		fontSize: '20px',
		fontWeight: 300,
		lineHeight: '60px',
		':hover': {
			cursor: 'pointer',
		},
	},
});

export const ProfileContentStyle = css({
	width: 290,
	margin: '2rem auto 0 auto',
	gridRow: '2',
	display: 'grid',
	gridTemplateRows: '238px 60px 1fr',
	gridRowGap: '0.5rem',

	'> *:nth-child(3)': {
		marginTop: '1rem',
	},
});

export const ProfileImageStyle = css({
	width: 218,
	height: 218,
	margin: '0 auto 0 auto',
	flexShrink: 0,
	alignSelf: 'center',
});

export const ProfileNameStyle = css({
	fontSize: '24px',
	fontWeight: 900,
	lineHeight: '150%' /* 36px */,
	letterSpacing: '-0.528px',
	textAlign: 'center',
	alignSelf: 'center',
});

export const ProfileInformationStyle = css({
	display: 'flex',
	justifyContent: 'space-between',
	margin: '2rem 0',
	height: '30px',

	'> span': {
		fontSize: '20px',
		fontWeight: 300,
		lineHeight: '30px',
	},
});

export const ProfileFooterStyle = css({
	width: '90%',
	margin: '0 auto',

	'> span': {
		fontSize: '20px',
		fontWeight: 300,
		lineHeight: '60px',
		':hover': {
			cursor: 'pointer',
		},
	},
});
