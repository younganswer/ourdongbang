import { css } from '@emotion/css';

export const RuleContentStyle = css({
	display: 'grid',
	gridTemplateRows: '1fr ',
	gridTemplateColumns: '1fr 1fr 1fr',
	borderTop: '1px solid #535766',
});

export const RuleContentContainer = css({
	marginTop: '75.49px',
	marginLeft: '35px',
	marginRight: '35px',
});

export const RuleContentButtonStyle = css({
	border: 'none',
	background: 'none',
	fontWeight: 'bold',
	transition: 'background-color 0.3s',
	fontSize: 14.91,
	marginLeft: '1050px',
	marginBottom: '10px',

	cursor: 'pointer', // 마우스 커서 모양 설정 (옵션)
	'&:hover': {
		// backgroundColor: '#ff0000',
		color: '#fff',
	},
});

export const RuleModalStyle = css({
	display: 'grid',
	gridTemplateRows: '1fr ',
	gridTemplateColumns: '1fr',
});

export const InputTitleStyle = css({
	width: '300px',
	height: '40px',
});

export const InputContentStyle = css({
	width: '300px',
	height: '80px',
});
