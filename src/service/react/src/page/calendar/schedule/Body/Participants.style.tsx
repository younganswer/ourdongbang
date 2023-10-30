import { css } from '@emotion/css';

export const ParticipantsContainerStyle = css({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	borderRight: '1px solid black',
});

export const SelectContainerStyle = css({
	width: '352px',
	height: '333px',
	borderTop: '1px solid black',
	fontFamily: 'Pretendard-regular',
});

export const SelectButtonStyle = css({
	width: '62px',
	height: '62px',
	border: '1px solid black',
	borderRadius: '100%',
	cursor: 'pointer',
	':hover': {
		backgroundColor: 'white',
		color: 'black',
	},
});
