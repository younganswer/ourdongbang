import { css } from '@emotion/css';

export const HeaderStyle = css({
	borderBottom: '1px solid #000000',
	display: 'flex',
	justifyContent: 'space-between',
	'& > span: nth-child(1)': {
		fontSize: '20px',
		fontWeight: 'bold',
		color: 'white',
		margin: '10px 10px',
		border: '2px solid #000000',
		borderRadius: '30px',
		backgroundColor: '#000000',
		fontFamily: 'Pretendard-regular',
		padding: '10px 20px',
	},
	'& > span: nth-child(2)': {
		fontSize: '20px',
		fontWeight: 'bold',
		color: '#000000',
		margin: '10px 10px',
		// border: '2px solid #000000',
		// borderRadius: '30px',
		fontFamily: 'Pretendard-regular',
		padding: '10px 20px',
		'> span': {
			marginRight: '20px',
		},
	},
});

export const ShowBalanceStyle = css({
	display: 'flex',
	alignItems: 'center',
	gap: '45px',

	'> div': {
		display: 'flex',
		alignItems: 'center',
		gap: '15px',
		'> span:nth-child(1)': {
			fontSize: '24px',
			fontFamily: 'Pretendard-medium',
		},
		'> span:nth-child(2)': {
			fontSize: '24px',
			fontFamily: 'Pretendard-regular',
		},
	},
});

export const searchItem = css({});
