import { css } from '@emotion/css';

export const fileDropperStyle = css({
	justifyContent: 'center',
	alignItems: 'center',
	border: '2px solid black',
	height: '327px',
	width: '300px',
	backgroundColor: 'transparent',
	margin: 'auto',
	marginTop: '20px',
	display: 'flex',
	'> input': {
		width: '50',
		height: '50%',
		opacity: 0,
		cursor: 'pointer',
		position: 'absolute',
	},
});
