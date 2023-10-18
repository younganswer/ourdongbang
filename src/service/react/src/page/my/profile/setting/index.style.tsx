import { css } from '@emotion/css';

export const ProfileSettingStyle = css({
	width: 477,
	height: 350,
	display: 'grid',
	gridTemplateRows: '85px 1fr',
	border: '1px solid black',
	borderRadius: 20,
});

export const ProfileSettingHeaderStyle = css({
	borderBottom: '1px solid black',
	display: 'flex',
	gap: 15,
	paddingLeft: 33,
	alignItems: 'center',

	'> span': {
		fontSize: 24,
		fontFamily: 'Pretendard-semibold',
	},
});

export const ProfileSettingBodyStyle = css({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',

	'> div': {
		width: '75%',
	},
});
