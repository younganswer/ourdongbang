import React from 'react';

export const ProfileImage = (props: {
	src: string | null;
	width: number;
	height: number;
	isCircle: boolean | null;
	className: string | null;
}) => {
	const { width, height } = props;
	const src = props.src ? props.src : null;
	const isCircle = props.isCircle ? props.isCircle : true;
	const className = props.className ? props.className : undefined;

	if (!src) {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={width}
				height={height}
				viewBox={`0 0 ${width} ${height}`}
				fill="none"
				className={className}
			>
				{isCircle ? <circle cx={width / 2} cy={height / 2} r={width / 2} fill="#D9D9D9" /> : null}
			</svg>
		);
	}

	return <img src={src} width={width} height={height} className={className} />;
};
