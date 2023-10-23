import { css } from '@emotion/css';
import { PageStyle } from 'page/page.style';

export const RegisterPageStyle = css(PageStyle, {
	height: 800,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',

	'> div': {
		width: 400,
		display: 'grid',
		gridTemplateRows: 'repeat(3, auto)',
		rowGap: '6rem',
	},
});

export const RegisterPageHeaderStyle = css({
	margin: '0 auto',
	fontSize: 40,
	fontFamily: 'Pretendard-medium',
});

export const GoogleRegisterStyle = css({
	borderBottom: '1px solid #D9D9D9',
	display: 'flex',
	justifyContent: 'center',
	paddingBottom: '4rem',

	'> div': {
		margin: 'auto 0',
	},

	'> span': {
		fontSize: '24px',
		lineHeight: '100px',
	},
});

export const RegisterPageFooterStyle = css({
	display: 'flex',
	justifyContent: 'center',
	gap: '1rem',
	fontSize: 20,
	fontFamily: 'Pretendard-regular',

	'> a': {
		color: 'black',
		textDecoration: 'none',
		' > span': {
			textDecoration: 'underline',
			textUnderlinePosition: 'under',
			cursor: 'pointer',
		},
	},
});
