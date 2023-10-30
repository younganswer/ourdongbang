import { css } from '@emotion/css';

export const RulePostStyle = css({
	width: '360px',
	height: '310px',
	overflow: 'hidden', // 내용이 넘어갈 경우 hidden으로 스크롤 할지 아니면
});

export const RulePostContentStyle = css({
	borderTop: '2px solid black',
});

export const PostTitleStyle = css({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
});
