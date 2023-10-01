import { ProfileImage } from 'components/ProfileImage.component';
import React from 'react';
import { useRef, useState } from 'react';
import { EditProfileImageStyle } from './image.style';

const handleChange = async (
	event: React.ChangeEvent<HTMLInputElement>,
	setFile: React.Dispatch<React.SetStateAction<null | File>>,
	setSrc: React.Dispatch<React.SetStateAction<string | null>>,
) => {
	if (!event.target.files) {
		return;
	}

	const file = event.target.files[0];

	if (!file) {
		setFile(null);
	}
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
	file: null | File;
	setFile: React.Dispatch<React.SetStateAction<null | File>>;
	setSrc: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
	const { file, setFile, setSrc } = props;
	const spanText = !file ? '추가' : '수정';
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
				onChange={event => handleChange(event, setFile, setSrc)}
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

const Header = (props: {
	file: null | File;
	setFile: React.Dispatch<React.SetStateAction<null | File>>;
	setSrc: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
	const { file, setFile, setSrc } = props;

	return (
		<div>
			<span>프로필 사진</span>
			<ImageSelector file={file} setFile={setFile} setSrc={setSrc} />
		</div>
	);
};

const PreviewImage = (props: { src: null | string }) => {
	const { src } = props;

	return (
		<div>
			<ProfileImage src={src} width={196} height={196} isCircle={true} className={null} />
		</div>
	);
};

export const EditProfileImage = (props: {
	profileImageId: string | null;
	file: null | File;
	setFile: React.Dispatch<React.SetStateAction<null | File>>;
}) => {
	const { profileImageId, file, setFile } = props;
	const [src, setSrc] = useState<string | null>(profileImageId);

	return (
		<div className={EditProfileImageStyle}>
			<Header file={file} setFile={setFile} setSrc={setSrc} />
			<PreviewImage src={src} />
		</div>
	);
};
