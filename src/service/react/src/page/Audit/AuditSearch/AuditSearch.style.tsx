import { css } from '@emotion/css';

export const AuditSearchStyle = css({
	borderBottom: '3px solid #D9D9D9',
	borderTop: '3px solid #FFFFFF',
	display: 'flex',
	justifyContent: 'space-between',
	'& > h2': {
		fontSize: '32px',
		fontWeight: 'bold',
		margin: '10px 10px',
	},
});

export const SearchBoxStyle = css({
	WebkitAppearance: 'none',
	margin: '10px 10px',
	outline: 'none',
	padding: '10px',
	width: '500px',
	lineHeight: '20px',
	borderRadius: '5px',
});

export const searchItem = css({});
