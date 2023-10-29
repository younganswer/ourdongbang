import { css } from '@emotion/css';

export const eventStyle = css`
	background-color: transparent;
	border: none;
	color: #333;
	font-size: 0.8rem;
	margin-bottom: 2px;

	& .fc-event-dot {
		display: inline-block;
		margin-right: 5px;
		border-color: #333;
	}
`;

export const headerStyle = css`
	background-color: #f5f5f5;
	border: none;
	color: #333;
	font-weight: bold;
`;

export const buttonStyle = css`
	background-color: #fff;
	border: 1px solid #ccc;
	color: #333;

	&:hover {
		background-color: #f5f5f5;
	}

	&:active,
	&.fc-button-active {
		background-color: #e5e5e5;
	}
`;

export const toolbarStyle = css`
	padding: 10px 0;

	& .fc-toolbar-title {
		font-size: 1.2rem;
		font-weight: bold;
	}
`;
