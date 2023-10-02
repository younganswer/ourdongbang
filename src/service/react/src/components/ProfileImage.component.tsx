import React, { useEffect } from 'react';

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
	const [hashedSrc, setHashedSrc] = React.useState<string | undefined>(undefined);
	const [isError, setIsError] = React.useState<boolean>(false);

	if (!src || isError) {
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

	useEffect(() => {
		let intervalId: NodeJS.Timer | undefined = undefined;

		if (isError && !intervalId) {
			intervalId = setInterval(() => {
				setHashedSrc(`${src}#${Date.now()}`);
			}, 1000);
		} else if (!isError && intervalId) {
			clearInterval(intervalId);
		} else {
			setHashedSrc(src);
		}
		return () => {
			clearInterval(intervalId);
		};
	}, [src, isError, setHashedSrc]);

	return (
		<img
			src={hashedSrc}
			width={width}
			height={height}
			className={className}
			onError={() => {
				setIsError(true);
			}}
			onLoad={() => {
				setIsError(false);
			}}
		/>
	);
};
