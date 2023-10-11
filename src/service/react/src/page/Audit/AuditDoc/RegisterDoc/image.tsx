import React from 'react';
import { useRef, useState } from 'react';

const handleChange = async (
	event: React.ChangeEvent<HTMLInputElement>,
	setSrc: React.Dispatch<React.SetStateAction<string | undefined>>,
	setFile: React.Dispatch<React.SetStateAction<null | File>>,
) => {
	if (!event.target.files || !event.target.files[0]) {
		setFile(null);
		return;
	}

	const file = event.target.files[0];

	setFile(file);

	try {
		const fileReader = new FileReader();

		fileReader.readAsDataURL(file);
		fileReader.onload = () => {
			setSrc(fileReader.result as string);
		};
	} catch (error) {
		console.error(error);
	}
};

const ImageSelector = (props: {
	src: string | undefined;
	setSrc: React.Dispatch<React.SetStateAction<string | undefined>>;
	setFile: React.Dispatch<React.SetStateAction<null | File>>;
}) => {
	const { setFile, src, setSrc } = props;
	const spanText = !src ? '+' : '-';
	const fileInputRef = useRef<HTMLInputElement>(null);

	return (
		<>
			<input
				type="file"
				ref={fileInputRef}
				accept="image/*"
				onClick={event => {
					event.stopPropagation();
				}}
				onChange={event => handleChange(event, setSrc, setFile)}
			/>
			<span
				onClick={() => {
					if (fileInputRef.current) {
						fileInputRef.current.click();
					}
				}}
			>
				{spanText}
			</span>
		</>
	);
};

const Box = (props: {
	title: string | undefined;
	src: string | undefined;
	setSrc: React.Dispatch<React.SetStateAction<string | undefined>>;
	setFile: React.Dispatch<React.SetStateAction<null | File>>;
}) => {
	const { title, src, setSrc, setFile } = props;

	return (
		<div>
			<span>{title}</span>
			<ImageSelector src={src} setSrc={setSrc} setFile={setFile} />
		</div>
	);
};

export const ReceiptImage = (props: {
	setFile: React.Dispatch<React.SetStateAction<null | File>>;
}) => {
	const { setFile } = props;
	const [src, setSrc] = useState<string | undefined>(undefined);

	return (
		<div>
			<Box title="영수증" src={src} setSrc={setSrc} setFile={setFile} />
		</div>
	);
};

export const CardSlipImage = (props: {
	setFile: React.Dispatch<React.SetStateAction<null | File>>;
}) => {
	const { setFile } = props;
	const [src, setSrc] = useState<string | undefined>(undefined);

	return (
		<div>
			<Box title="카드 전표" src={src} setSrc={setSrc} setFile={setFile} />
		</div>
	);
};

export const AdditionalImage = (props: {
	setFile: React.Dispatch<React.SetStateAction<null | File>>;
}) => {
	const { setFile } = props;
	const [src, setSrc] = useState<string | undefined>(undefined);

	return (
		<div>
			<Box title="첨부 사진" src={src} setSrc={setSrc} setFile={setFile} />
		</div>
	);
};
