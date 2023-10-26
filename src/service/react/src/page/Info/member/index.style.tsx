import { css } from '@emotion/css';

export const InfoPageMemberStyle = css({
	display: 'grid',
	gridTemplateRows: 'auto 1fr',
	border: '1px solid black',
});

export const InfoPageMemberHeaderStyle = css({
	gridRow: 1,
	width: 'auto',
	height: '100px',
	display: 'flex',
	alignItems: 'center',
	padding: '0 30px',
	borderBottom: '1px solid black',

	'> span': {
		fontSize: '30px',
		fontFamily: 'Pretendard-medium',
	},
});

export const InfoPageMemberBodyStyle = css({
	gridRow: 2,
	display: 'grid',
	gridTemplateRows: 'auto auto',

	'> div': {
		margin: '0 30px',
		display: 'grid',
		gridTemplateRows: '100px auto',

		'> div:nth-child(1)': {
			display: 'flex',
			height: '50px',
			margin: '17px 0 33px 0',
			padding: '0 30px',
			justifyContent: 'space-between',

			'> span': {
				marginTop: 'auto',
			},
			'> span:nth-child(1)': {
				fontSize: '25px',
				fontFamily: 'Pretendard-medium',
			},
			'> span:nth-child(2)': {
				fontSize: '20px',
				fontFamily: 'Pretendard-regular',
			},
		},
		'> div:nth-child(2)': {
			display: 'grid',
			gridTemplateColumns: 'repeat(auto-fill, 263px)',
			gap: 38.5,
			overflowY: 'auto',
			'&::-webkit-scrollbar': {
				display: 'none',
			},
			'> div': {
				width: '100%',
			},
		},
	},
	'> div:nth-child(1)': {
		// manager
		paddingBottom: '30px',
		borderBottom: '1px solid black',
	},
	'> div:nth-child(2)': {
		// member
	},
});
