import { css } from '@emotion/css';

export const ShowBalanceStyle = css({
	width: 816,
	height: 69,
	display: 'flex',
	// justifyContent: 'space-around',
	flexShrink: 0,
	backgroundColor: '#D9D9D9',
	marginTop: 49,
	marginBottom: 49,
	'> div:nth-child(1)': {
		width: '45%',
		textAlign: 'center',

		'> span': {
			fontSize: '15px',
		},
	},
});
