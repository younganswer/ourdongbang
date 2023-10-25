import { css } from '@emotion/css';

export const SearchBoxBodyClubProfileStyle = css({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',

	'> div': {
		width: '100%',
	},
	'> div:nth-child(1)': {
		height: 100,
		display: 'flex',
		alignItems: 'center',
		gap: 15,
		'> span': {
			fontSize: 16,
			fontFamily: 'Pretendard-regular',
		},
		'> svg': {
			cursor: 'pointer',
			marginTop: 2,
		},
	},
	'> div:nth-child(2)': {
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fill, minmax(228px, 1fr))',
		gap: 50,

		'> div': {
			width: '100%',
			height: 332,
			display: 'grid',
			gridTemplateRows: '228px auto',
			border: '1px solid black',

			'> div:nth-child(1)': {
				backgroundColor: '#D9D9D9',
				borderBottom: '1px solid black',
			},

			'> div:nth-child(2)': {
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				gap: 10,
				'> *': {
					width: '80%',
				},
				'> div:nth-child(1)': {
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					'> span': {
						fontSize: 20,
						fontFamily: 'Pretendard-medium',
					},
				},
				'> span': {
					fontSize: 16,
					fontFamily: 'Pretendard-regular',
				},
			},
		},
	},
});
