import React from 'react';

export const HumanIcon = (props: { width: number | string; height: number | string }) => {
	const { width, height } = props;

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			viewBox="0 0 29 30"
			fill="none"
		>
			<path
				d="M28 29C28 21.2677 21.9562 15 14.5 15C7.04383 15 1 21.2677 1 29H28Z"
				fill="black"
				stroke="black"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M14.5 15C18.6421 15 22 11.866 22 8C22 4.13401 18.6421 1 14.5 1C10.3579 1 7 4.13401 7 8C7 11.866 10.3579 15 14.5 15Z"
				fill="black"
				stroke="black"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const EditIcon = (props: { width: number | string; height: number | string }) => {
	const { width, height } = props;

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			viewBox="0 0 18 18"
			fill="none"
		>
			<path
				d="M1.10071 18.3958L1.10393 18.3991C1.18955 18.4853 1.29136 18.5538 1.40352 18.6005C1.51569 18.6473 1.63599 18.6714 1.7575 18.6715C1.85976 18.6714 1.9613 18.6546 2.05809 18.6216L7.32784 16.834L17.4401 6.72166C18.0583 6.10342 18.4056 5.26492 18.4056 4.39062C18.4055 3.51633 18.0582 2.67786 17.4399 2.05967C16.8217 1.44148 15.9832 1.0942 15.1089 1.09424C14.2346 1.09428 13.3961 1.44163 12.7779 2.05987L2.66564 12.1722L0.87816 17.4418C0.821854 17.6056 0.812867 17.7821 0.852228 17.9508C0.89159 18.1196 0.977707 18.2738 1.10071 18.3958ZM13.6177 2.89955C14.0137 2.50653 14.5494 2.28646 15.1073 2.28754C15.6653 2.28861 16.2 2.51073 16.5946 2.90526C16.9891 3.2998 17.2112 3.83459 17.2123 4.39253C17.2133 4.95048 16.9932 5.48611 16.6002 5.88214L15.2704 7.21192L12.2878 4.22932L13.6177 2.89955ZM3.70137 12.8158L11.4482 5.069L14.4308 8.05159L6.68392 15.7984L2.17016 17.3296L3.70137 12.8158Z"
				fill="black"
			/>
		</svg>
	);
};

export const EmailIcon = (props: { width: number | string; height: number | string }) => {
	const { width, height } = props;

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			viewBox="0 0 20 16"
			fill="none"
		>
			<path d="M1 1V15H19V1H18.6949M1 1L9.84746 8.80769L18.6949 1M1 1H18.6949" stroke="black" />
		</svg>
	);
};

export const SchoolIcon = (props: { width: number | string; height: number | string }) => {
	const { width, height } = props;

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			viewBox="0 0 20 22"
			fill="none"
		>
			<path
				d="M9.84746 12H18.6949H19V21H1V12H9.84746ZM9.84746 12V8.5M9.84746 8.5V1L18.6949 5L9.84746 8.5Z"
				stroke="black"
			/>
		</svg>
	);
};

export const MajorIcon = (props: { width: number | string; height: number | string }) => {
	const { width, height } = props;

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			viewBox="0 0 18 21"
			fill="none"
		>
			<rect x="0.5" y="0.5" width="17" height="20" stroke="black" />
			<path d="M4 4H14" stroke="black" />
			<path d="M4 8H14" stroke="black" />
			<path d="M4 12H14" stroke="black" />
			<path d="M4 16H14" stroke="black" />
		</svg>
	);
};

export const StudentIdIcon = (props: { width: number | string; height: number | string }) => {
	const { width, height } = props;

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			viewBox="0 0 18 18"
			fill="none"
		>
			<rect x="0.5" y="0.5" width="17" height="17" stroke="black" />
			<path d="M6 7.4L9 5V13" stroke="black" />
		</svg>
	);
};

export const ClubIcon = (props: { width: number | string; height: number | string }) => {
	const { width, height } = props;
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			viewBox="0 0 23 21"
			fill="none"
		>
			<circle cx="11.5" cy="12.5" r="7" stroke="black" />
			<circle cx="11.5" cy="4.5" r="4" fill="#EFEEEA" stroke="black" />
			<circle cx="4.5" cy="16.5" r="4" fill="#EFEEEA" stroke="black" />
			<circle cx="18.5" cy="16.5" r="4" fill="#EFEEEA" stroke="black" />
		</svg>
	);
};

export const PhoneNumberIcon = (props: { width: number | string; height: number | string }) => {
	const { width, height } = props;
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			viewBox="0 0 20 22"
			fill="none"
		>
			<path
				d="M5.5 15.4484C2.40513 12.0174 -0.104678 6.35125 1.44332 1H6.60731L8.08101 6.39462L5.49902 8C7.97773 13.5653 11.2941 15.1432 12.499 15.5L14.3546 13.3079L19.0009 15.4484L17.999 20.5C14.3855 21.5703 8.6571 18.9484 5.5 15.4484Z"
				stroke="black"
			/>
		</svg>
	);
};

export const InstagramIcon = (props: { width: number | string; height: number | string }) => {
	const { width, height } = props;

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			viewBox="0 0 18 18"
			fill="none"
		>
			<rect x="0.5" y="0.5" width="17" height="17" stroke="black" />
			<circle cx="9" cy="9" r="3.5" stroke="black" />
			<circle cx="13.5" cy="4.5" r="1" stroke="black" />
		</svg>
	);
};

export const SettingIcon = (props: {
	width: number | string;
	height: number | string;
	onClick: (() => void) | undefined;
}) => {
	const { width, height, onClick } = props;

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			viewBox="0 0 35 35"
			fill="none"
			onClick={onClick}
		>
			<path
				d="M17.5158 13.3503C16.4938 13.3503 15.5368 13.7468 14.8122 14.4714C14.091 15.196 13.6911 16.1531 13.6911 17.175C13.6911 18.197 14.091 19.1541 14.8122 19.8787C15.5368 20.5999 16.4938 20.9998 17.5158 20.9998C18.5378 20.9998 19.4948 20.5999 20.2194 19.8787C20.9406 19.1541 21.3405 18.197 21.3405 17.175C21.3405 16.1531 20.9406 15.196 20.2194 14.4714C19.8655 14.1148 19.4442 13.832 18.9801 13.6396C18.516 13.4471 18.0183 13.3488 17.5158 13.3503ZM31.6081 21.3997L29.3727 19.489C29.4787 18.8396 29.5334 18.1765 29.5334 17.5168C29.5334 16.8572 29.4787 16.1907 29.3727 15.5447L31.6081 13.634C31.777 13.4895 31.8978 13.2969 31.9546 13.082C32.0114 12.8671 32.0014 12.64 31.926 12.4309L31.8952 12.342C31.28 10.6217 30.3582 9.02714 29.1745 7.6355L29.113 7.56372C28.9692 7.39471 28.7777 7.27322 28.5635 7.21525C28.3493 7.15729 28.1226 7.16557 27.9133 7.23901L25.1379 8.22681C24.1125 7.38599 22.9709 6.7229 21.7336 6.26147L21.197 3.35962C21.1565 3.14101 21.0504 2.9399 20.8929 2.783C20.7354 2.6261 20.5339 2.52084 20.3151 2.4812L20.2228 2.46411C18.4455 2.14282 16.5724 2.14282 14.7951 2.46411L14.7028 2.4812C14.4841 2.52084 14.2825 2.6261 14.125 2.783C13.9675 2.9399 13.8615 3.14101 13.821 3.35962L13.2809 6.27515C12.0554 6.74025 10.9136 7.40173 9.90058 8.23364L7.10468 7.23901C6.89538 7.16499 6.66851 7.1564 6.45422 7.2144C6.23993 7.2724 6.04836 7.39424 5.90497 7.56372L5.84345 7.6355C4.66183 9.02863 3.74027 10.6228 3.12274 12.342L3.09198 12.4309C2.93817 12.8582 3.06464 13.3367 3.40985 13.634L5.67255 15.5652C5.56659 16.2078 5.51532 16.864 5.51532 17.5134C5.51532 18.1697 5.56659 18.8259 5.67255 19.4617L3.41669 21.3928C3.24783 21.5374 3.12697 21.7299 3.07019 21.9448C3.01341 22.1597 3.02339 22.3868 3.09882 22.5959L3.12958 22.6848C3.74823 24.4041 4.66083 25.9934 5.85028 27.3914L5.91181 27.4631C6.05555 27.6321 6.24712 27.7536 6.46129 27.8116C6.67545 27.8696 6.90215 27.8613 7.11151 27.7878L9.90741 26.7932C10.926 27.6306 12.0607 28.2937 13.2878 28.7517L13.8278 31.6672C13.8683 31.8858 13.9744 32.087 14.1319 32.2439C14.2894 32.4008 14.4909 32.506 14.7097 32.5457L14.8019 32.5627C16.5968 32.8858 18.4349 32.8858 20.2297 32.5627L20.322 32.5457C20.5407 32.506 20.7422 32.4008 20.8998 32.2439C21.0573 32.087 21.1633 31.8858 21.2038 31.6672L21.7404 28.7654C22.9777 28.3005 24.1193 27.6409 25.1447 26.8L27.9201 27.7878C28.1294 27.8619 28.3563 27.8705 28.5706 27.8125C28.7849 27.7545 28.9764 27.6326 29.1198 27.4631L29.1813 27.3914C30.3708 25.9866 31.2834 24.4041 31.902 22.6848L31.9328 22.5959C32.0798 22.1721 31.9533 21.697 31.6081 21.3997ZM17.5158 23.1838C14.197 23.1838 11.507 20.4939 11.507 17.175C11.507 13.8562 14.197 11.1663 17.5158 11.1663C20.8347 11.1663 23.5246 13.8562 23.5246 17.175C23.5246 20.4939 20.8347 23.1838 17.5158 23.1838Z"
				fill="black"
			/>
		</svg>
	);
};
