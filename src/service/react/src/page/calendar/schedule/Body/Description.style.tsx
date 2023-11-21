import { css } from '@emotion/react';

export const textAreaContainer = css({
	width: '100%',
	height: '100%',
	border: 'none',
	resize: 'none',
	fontSize: '1.2rem',
	'&:focus': {
		outline: 'none',
	},
});
