import { css } from '@emotion/css';

export const InfoPageRuleStyle = css({
	border: '1px solid black',
	width: '100%',
	height: '760px',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',

	'> div': {
		width: '90%',
		height: '80%',
	},

	overflowY: 'scroll', // overflowY 속성을 사용하여 세로 스크롤바만 표시
});
