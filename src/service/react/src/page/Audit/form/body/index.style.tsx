import { css } from '@emotion/css';

export const AuditFormBodyStyle = css({
	display: 'grid',
	gridTemplateRows: '1fr 1fr 1fr 5fr 5fr 5fr',
	border: '1px solid black',

	'> div: nth-child(2)': {
		display: 'grid',
		gridTemplateColumns: '3fr 2fr',
		borderBottom: '1px solid black',
	},
	'> div: nth-child(3)': {
		display: 'grid',
		gridTemplateColumns: '3fr 2fr',
		borderBottom: '1px solid black',
	},
	'> div: nth-child(5)': {
		display: 'grid',
		gridTemplateColumns: '1fr 1fr',
		borderBottom: '1px solid black',
	},
});
