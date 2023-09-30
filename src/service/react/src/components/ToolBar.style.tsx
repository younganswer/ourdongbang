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

export const topToolbar = css({
	position: 'sticky',
	margin: 'auto',
	top: 0,
	left: 0,
	right: 0,
	width: '1200px',
	height: '60px',
	backgroundColor: 'white',
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	padding: '0 20px',
	transition: 'background-color 0.3s ease-in-out',
	zIndex: 999,

	'&.scrolled': {
		backgroundColor: 'rgba(255, 255, 255, 0.9)',
	},
});

export const toolbarLink = css({
	textDecoration: 'none',
	color: `#333`,
});

export const toolbarTitle = css({
	fontFamily: 'HakgyoansimGaeulsopungB',
	fontSize: 24,
	fontWeight: 'bold',
});
