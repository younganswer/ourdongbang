import { css } from '@emotion/css';

export const fontFace = css`
	@font-face {
		font-family: 'HakgyoansimGaeulsopungB';
		src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2307-2@1.0/HakgyoansimGaeulsopungB.woff2')
			format('woff2');
		font-weight: 700;
		font-style: normal;
	}
`;

export const ToolBarStyle = css({
	position: 'sticky',
	top: 0,
	left: 0,
	width: '100%',
	height: '60px',
	backgroundColor: 'white',
	transition: 'background-color 0.3s ease-in-out',
	zIndex: 999,

	'&.scrolled': {
		backgroundColor: 'rgba(255, 255, 255, 0.9)',
	},

	'> div': {
		width: '1200px',
		height: '100%',
		margin: '0 auto',
		padding: '0',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',

		'> div': {
			margin: '0 1rem',
		},
	},
});

export const ToolBarTitleStyle = css({
	'> *:nth-child(1)': {
		textDecoration: 'none',
		color: `#333`,

		'> span': {
			fontFamily: 'HakgyoansimGaeulsopungB',
			fontSize: 30,
			fontWeight: 'bold',
		},
	},
});
