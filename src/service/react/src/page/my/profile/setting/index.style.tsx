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
});

export const ProfileSettingBeforeAuthorizedStyle = css({
	width: '80%',
	display: 'grid',
	gridTemplateRows: 'repeat(3, auto)',
	rowGap: 36,

	'> span:nth-child(1)': {
		fontSize: 24,
		fontFamily: 'Pretendard-semibold',
	},
	'> span:nth-child(2)': {
		fontSize: 20,
		fontFamily: 'Pretendard-regular',
	},
	'> form': {
		'> *': {
			fontSize: 20,
			fontFamily: 'Pretendard-regular',
		},
		'> input': {
			marginRight: 5,
		},
	},
});

export const ProfileSettingAfterAuthorizedStyle = css({
	width: '80%',
	'> form': {
		display: 'grid',
		gridTemplateRows: 'repeat(5, auto)',
		rowGap: 20,
		'> div': {
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center',

			'> span:nth-child(1)': {
				fontSize: 18,
				fontFamily: 'Pretendard-medium',
			},
			'> span:nth-child(2)': {
				fontSize: 16,
				fontFamily: 'Pretendard-regular',
			},
			'> input:nth-child(2)': {
				textAlign: 'right',
				fontSize: 16,
				fontFamily: 'Pretendard-regular',
			},
		},
		'> button': {
			fontSize: 16,
			fontFamily: 'Pretendard-medium',
		},
	},
});
