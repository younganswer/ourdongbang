import { css } from '@emotion/css';

export const ParticipateStyle = css({
	width: 764,
	height: 789,
	gridColumn: '2',
	display: 'grid',
	gridTemplateRows: '147px 613px',
	rowGap: '29px',
});

export const ParticipationStyle = css({
	width: '100%',
	height: 147,
	gridRow: '1',
	display: 'grid',
	gridTemplateRows: '1fr 50px 20px 1fr',
	backgroundColor: 'white',
});

export const ParticipatedStyle = css({
	width: '100%',
	height: 613,
	gridRow: '2',
	display: 'grid',
	gridTemplateRows: '60px 1fr',
	backgroundColor: 'white',
});
