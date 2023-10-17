import { css } from '@emotion/css';

export const ModalBackgroundStyle = css({
	position: 'fixed',
	top: 0,
	left: 0,
	width: '100%',
	height: '100%',
	backgroundColor: 'rgba(0, 0, 0, 0.5)',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	zIndex: 10000,

	'> :nth-child(1)': {
		position: 'absolute',
		display: 'grid',
		gridTemplateRows: '32px auto',
		'> :nth-child(1)': {
			display: 'flex',
			justifyContent: 'flex-end',
			backgroundColor: 'transparent',
			'> svg': {
				'&:hover': {
					cursor: 'pointer',
				},
			},
		},
		'> :nth-child(2)': {
			'> :nth-child(1)': {
				backgroundColor: '#EFEEEA',
				boxShadow: '0 2px 3px 0 rgba(34, 36, 38, 0.15)',
			},
		},
	},
});
