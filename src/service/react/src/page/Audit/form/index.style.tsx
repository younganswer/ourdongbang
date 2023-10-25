import { css } from '@emotion/css';
import { A4PageStyle } from 'page/page.style';

export const AuditFormStyle = css(A4PageStyle, {
	height: 770,
	display: 'grid',
	gridTemplateRows: '726px 44px',

	input: {
		backgroundColor: 'transparent',
		border: 'none',
		padding: 0,
		'&:focus': {
			outline: 'none',
			backgroundColor: 'transparent',
		},
	},

	'> div:nth-child(1)': {
		width: '100%',
		height: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',

		'> div:nth-child(1)': {
			width: '92%',
			height: '90%',
			display: 'grid',
			gridTemplateRows: '1fr 12fr',
		},
	},
});
