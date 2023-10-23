import { css } from '@emotion/css';

// 제일 바깥 div transparent, row 1, 2 / 1번째 div에 x 두고 / 2번째 div에 실제 내용
export const registerModalStyle = css({
	backgroundColor: 'white',
	width: '500px',
	height: '600px',
	textAlign: 'center',
	borderRadius: '20px',
	fontcolor: 'black',
	fontFamily: 'pretendard-regular',
	'> button': {
		width: '327px',
		height: '49px',
		backgroundColor: '#FFFFFF',
		border: '1px solid #000000',
		marginTop: '30px',
		fontSize: '15px',
		fontFamily: 'pretendard-Bold',
	},
});

export const registerModalTitleStyle = css({
	marginTop: '80px',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	'> span: nth-child(1)': {
		fontSize: '20px',
		position: 'absolute',
		// left: '45%',
		// right: '45%',
	},
	'> span: nth-child(2)': {
		fontSize: '15px',
		position: 'absolute',
		left: '70%',
	},
});
