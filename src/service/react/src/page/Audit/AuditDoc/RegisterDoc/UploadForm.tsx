import React, { useState } from 'react';
import { registerModalTitleStyle } from './registerModal.style';
import { fileDropperStyle } from './UploadForm.style';

const UploadForm = (props: {
	src: string | undefined;
	setSrc: React.Dispatch<React.SetStateAction<string | undefined>>;
	file: File | null;
	setFile: React.Dispatch<React.SetStateAction<File | null>>;
	handleSubmit: (
		event: React.FormEvent<HTMLFormElement>,
		file: File | null,
		setModalPageNumber: React.Dispatch<React.SetStateAction<number>>,
		pageNumber: number,
	) => void;
	title: string;
	subTitle: string;
}) => {
	const { src, setSrc, file, setFile, handleSubmit, title, subTitle } = props;
	const [pageNumber, setPageNumber] = useState(0);
	const imageSelectHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (!event.target.files || !event.target.files[0]) {
			setFile(null);
			return;
		}
		const imageFile = event.target.files[0];
		setFile(imageFile);
		try {
			const fileReader = new FileReader();
			fileReader.readAsDataURL(imageFile);
			fileReader.onload = () => {
				setSrc(fileReader.result as string);
			};
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<form
			onSubmit={event => {
				// event.preventDefault();
				handleSubmit(event, file, setPageNumber, pageNumber);
			}}
		>
			<div className={registerModalTitleStyle}>
				<span>{title}</span>
				<span>{subTitle}</span>
			</div>
			<div className={fileDropperStyle}>
				<input id="image" type="file" accept="image/*" onChange={imageSelectHandler} />
				<img src={src} alt="image" />
			</div>
			<button type="submit">다음</button>
		</form>
	);
	console.log(imageSelectHandler, src);
};

export default UploadForm;
