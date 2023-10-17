import { css } from '@emotion/css';

export const EditProfileStyle = css({
	width: 408,
	height: 789,
	borderRadius: '10px',

	'> div': {
		height: '100%',
		display: 'grid',
		gridTemplateRows: '0.5rem 50px 1fr auto 1rem',

		'> div:nth-child(2)': {
			gridRow: 3,
			margin: '0 auto',
			width: '90%',
			display: 'grid',
			gridTemplateRows: '1fr auto 1fr auto 1fr',
		},
	},
});
