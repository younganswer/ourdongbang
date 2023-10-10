import { css } from '@emotion/css';

export const RuleTitleStyle = css({
	display: 'flex',
	alignItems: 'center',
});

export const RuleTitleButtonStyle = css({
	border: 'none',
	background: 'none',
	fontWeight: 'bold',
	transition: 'background-color 0.3s',
	fontSize: 20.55,

	cursor: 'pointer', // 마우스 커서 모양 설정 (옵션)
	'&:hover': {
		// backgroundColor: '#ff0000',
		color: '#fff',
	},
});
