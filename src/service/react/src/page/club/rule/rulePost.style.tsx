import { css } from '@emotion/css';

export const RulePostStyle = css({
	margin: '31.95px 0 0 0',
});

export const RulePostContentStyle = css({
	backgroundColor: 'white',
	marginTop: '7.93px',
	width: '1200px',
	height: '233px',
	overflow: 'auto', // 내용이 넘어갈 경우 hidden으로 스크롤 할지 아니면
	// borderRadius: '10px',
});

export const RulePostButtonStyle = css({
	border: 'none',
	background: 'none',
	fontWeight: 'bold',
	transition: 'background-color 0.3s',
	fontSize: 14.91,

	cursor: 'pointer', // 마우스 커서 모양 설정 (옵션)
	'&:hover': {
		// backgroundColor: '#ff0000',
		color: '#fff',
	},
});
