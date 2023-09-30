import { Types } from 'mongoose';
import React from 'react';

export const ProfileImage = (props: {
	imageId: Types.ObjectId | null;
	width: number;
	height: number;
	isCircle: boolean | null;
	className: string | null;
}) => {
	const { width, height } = props;
	const imageId = props.imageId ? props.imageId : null;
	const isCircle = props.isCircle ? props.isCircle : true;
	const className = props.className ? props.className : undefined;

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
	return <div>{imageId?.toString()}</div>;
};
