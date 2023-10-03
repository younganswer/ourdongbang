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

export const ToolBarBtnWrapperStyle = css({
	display: 'flex',
	height: '100%',
	alignItems: 'center',
	justifyContent: 'center',
	gap: 20,
});

export const ToolBarBtnStyle = css({
	height: '100%',
	margin: 0,
	padding: '8px 12px',
	fontFamily: 'HakgyoansimGaeulsopungB',
	fontSize: 20,
	cursor: 'pointer',
	backgroundColor: 'white',
	color: 'black',
	border: 'none',
	borderRadius: 20,
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
