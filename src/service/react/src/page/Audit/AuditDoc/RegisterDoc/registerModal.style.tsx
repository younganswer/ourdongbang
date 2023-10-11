import { css } from '@emotion/css';

export const modalContentStyles = css({
	backgroundColor: 'white',
	width: '500px',
	height: '600px',
	textAlign: 'center',
	borderRadius: '5px',
	fontcolor: 'black',
});

// 제일 바깥 div transparent, row 1, 2 / 1번째 div에 x 두고 / 2번째 div에 실제 내용
export const registerModalStyle = css({
	position: 'absolute',
	width: '500px',
	height: '600px',
	backgroundColor: 'white',
	borderRadius: '10px',
	boxShadow: '0 2px 3px 0 rgba(34, 36, 38, 0.15)',
});
