import { css } from '@emotion/css';

export const RuleContentStyle = css({
	display: 'grid',
	gridTemplateRows: '1fr',
	gridTemplateColumns: '1fr 1fr 1fr',
	borderTop: '1px solid #535766',
});

export const RuleContentContainer = css({
	width: '90%',
	height: '80%',
	margin: 'auto',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',

	'> div:nth-child(1)': {
		height: '30px',
		display: 'flex',
		alignSelf: 'flex-end',
	},
	'> div:nth-child(2)': {
		height: '579px',
		overflowY: 'auto',
	},
});

export const RuleContentButtonStyle = css({
	border: 'none',
	background: 'none',
	transition: 'background-color 0.3s',
	fontSize: 14.91,

	cursor: 'pointer', // 마우스 커서 모양 설정 (옵션)
	'&:hover': {
		// backgroundColor: '#ff0000',
		color: '#fff',
	},
});

export const RuleModalStyle = css({
	display: 'grid',
	gridTemplateRows: '1fr',
	gridTemplateColumns: '1fr',
});

export const InputTitleStyle = css({
	width: '300px',
	height: '40px',
	marginTop: '40px',
	marginBottom: '30px',
});

export const InputContentStyle = css({
	width: '300px',
	height: '200px',
	marginBottom: '30px',
});

export const ModalContentStyle = css({
	backgroundColor: '#EFEEEA',
	width: '500px',
	height: '400px',
	borderRadius: '10px',
	display: 'flex',
	flexFlow: 'column',
	alignItems: 'center',
});
