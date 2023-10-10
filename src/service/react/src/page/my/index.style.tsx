import { css } from '@emotion/css';
import { PageStyle } from 'page/page.style';

export const MyPageStyle = css(PageStyle, {
	display: 'grid',
	gridTemplateColumns: '500px 672px',
	columnGap: '28px',
});
