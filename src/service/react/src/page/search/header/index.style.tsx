import { css } from '@emotion/css';

export const SearchPageHeaderStyle = css({
	height: 131,
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	padding: '0 3%',
	borderBottom: '1px solid black',

	'> div': {
		display: 'flex',
		alignItems: 'center',
	},
});

export const SearchPageHeaderBookmarkStyle = css({
	cursor: 'pointer',
	'> svg': {
		marginLeft: 8,
	},
	'> span': {
		fontSize: 20,
		fontFamily: 'Pretendard-regular',
		marginLeft: 12,
	},
});

export const SearchPageHeaderSearchBoxStyle = css({
	'> form': {
		width: 532,
		display: 'flex',
		alignItems: 'center',
		border: '1px solid black',
		'&:focus-within': {
			outline: '5px auto -webkit-focus-ring-color',
		},
		'> input': {
			flex: 1,
			height: 53,
			padding: '0 5%',
			backgroundColor: 'transparent',
			border: 'none',
			fontSize: 16,
			fontFamily: 'Pretendard-regular',
			'&:focus': {
				outline: 'none',
			},
		},
		'> button': {
			width: 53,
			height: 53,
			backgroundColor: 'transparent',
			border: 'none',
			padding: 0,
			cursor: 'pointer',
			'> svg': {
				margin: '5px 0 0 5px',
			},
		},
	},
});
