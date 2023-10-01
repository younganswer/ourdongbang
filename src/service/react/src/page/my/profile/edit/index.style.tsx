import { css } from '@emotion/css';

export const EditProfileStyle = css({
	position: 'absolute',
	width: 408,
	height: 789,
	backgroundColor: 'white',
	borderRadius: '10px',
	boxShadow: '0 2px 3px 0 rgba(34, 36, 38, 0.15)',

	'> div': {
		height: '100%',
		display: 'grid',
		gridTemplateRows: '50px 1fr 50px',
	},
});
