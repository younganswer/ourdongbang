import { css } from '@emotion/css';

export const ProfileStyle = css({
	width: 408,
	height: 789,
	gridColumn: '1',
	display: 'grid',
	gridTemplateRows: '100px 1fr 64px',
	backgroundColor: 'white',
});

export const ProfileHeaderStyle = css({
	display: 'flex',
	justifyContent: 'space-between',
	padding: '1rem 2rem 1rem 2rem',
});

export const ProfileContentStyle = css({
	width: 290,
	margin: '0 auto 0 auto',
	gridRow: '2',
	display: 'grid',
	gridTemplateRows: '238px 60px 1fr',
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
	margin: '1rem 0 1rem 0',
});
//fontSize: '24px',
//fontWeight: 500,
//lineHeight: '150%' /* 36px */,
//letterSpacing: '-0.528px',

export const ProfileFooterStyle = css({
	padding: '1rem 2rem 1rem 2rem',
});
