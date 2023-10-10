import { css } from '@emotion/css';

export const HeaderStyle = css({
	borderBottom: '1px solid #000000',
	borderTop: '5px solid #FFFFFF',
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
		backgroundColor: '#FFFFFF',
		fontFamily: 'Pretendard-regular',
		padding: '10px 20px',
		'> span': {
			marginRight: '20px',
		},
	},
});

export const ShowBalanceStyle = css({
	flexShrink: 0,
	fontSize: '20px',
	fontFamily: 'Pretendard-regular',
	borderbottom: '3px solid #D9D9D9',
});

export const searchItem = css({});
