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

export const toolBarBtns = css({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	height: '100%',

	':alt': {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: '100%',
		flexGrow: 1,
		textAlign: 'center',
		paddingRight: 30,
	},
});

export const toolBarBtn = css({
	fontFamily: 'HakgyoansimGaeulsopungB',
	marginLeft: 20,
	fontSize: 16,
	cursor: 'pointer',
	backgroundColor: 'white',
	color: 'black',
	border: 'none',
	borderRadius: 20,
	padding: `10px 10px`,
	transition: `background-color 0.3s, color 0.3s;`,

	':hover': {
		backgroundColor: 'gray',
		color: 'white',
	},
	':active': {
		backgroundColor: 'darkgray',
		color: 'white',
	},
});
