// import { on } from 'events';
import React, { useState } from 'react';
import { registerModalStyle, registerModalTitleStyle } from './registerModal.style';
import { Modal } from 'component/modal';
import { RegisterHeader } from './registerHeader';
import { SumupHeader } from './Sumup/sumupHeader';
import axios from 'axios';
import UploadForm from './UploadForm';

// import UploadForm from './UploadForm';

const handleSubmit = async (
	event: React.FormEvent<HTMLFormElement>,
	file: null | File,
	setModalPageNumber: React.Dispatch<React.SetStateAction<number>>,
	ModalPageNumber: number,
) => {
	event.preventDefault();
	// console.log('hi');
	setModalPageNumber(ModalPageNumber + 1);
	if (file) {
		const presignedData = await axios
			.post(
				`${process.env.REACT_APP_NESTJS_URL}/image/presigned/audit`,
				{},
				{ withCredentials: true },
			)
			.then(response => {
				return response.data.presignedUrl;
			})
			.catch(error => {
				console.error(error);
				alert(error.response.data.message);
			});
		const formData = new FormData();

		for (const key in presignedData.fields) {
			formData.append(key, presignedData.fields[key]);
		}
		formData.append('Content-Type', file.type);
		formData.append('file', file);

		axios.post(presignedData.url, formData).catch(error => {
			throw new Error(error);
		});
		// ...
	}
	// ...
};

const RegisterRealReceipt = (props: {
	// setIsModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
	setModalPageNumber: React.Dispatch<React.SetStateAction<number>>;
}) => {
	// const { setIsModalOpened, setModalPageNumber } = props;
	// const [file, setFile] = useState<File | null>(null);
	const [file, setFile] = useState<File | null>(null);
	const { setModalPageNumber } = props;
	const [src, setSrc] = useState<string | undefined>(undefined);

	return (
		<div className={registerModalStyle}>
			<RegisterHeader />
			<UploadForm
				src={src}
				setSrc={setSrc}
				file={file}
				setFile={setFile}
				handleSubmit={event => handleSubmit(event, file, setModalPageNumber, 0)}
				title={'영수증 등록'}
				subTitle={'1/3 STEP'}
			/>
		</div>
	);
};

const RegisterCardSlip = (props: {
	// setIsModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
	setModalPageNumber: React.Dispatch<React.SetStateAction<number>>;
}) => {
	const [file] = useState<File | null>(null);
	const { setModalPageNumber } = props;

	return (
		<form
			className={registerModalStyle}
			onSubmit={event => {
				handleSubmit(event, file, setModalPageNumber, 1);
			}}
		>
			<RegisterHeader />
			<div className={registerModalTitleStyle}>
				<span>카드 전표 등록</span>
				<span>STEP 2/3</span>
			</div>
			{/* 이미지 업로드 박스 */}
			{/* <input type="image" onChange={event => setFile(event.target.files![0])} /> */}
			<button type="submit">다음</button>
		</form>
	);
};

const RegisterAdditionalImage = (props: {
	// setIsModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
	setModalPageNumber: React.Dispatch<React.SetStateAction<number>>;
}) => {
	const [file] = useState<File | null>(null);
	const { setModalPageNumber } = props;

	return (
		<form
			className={registerModalStyle}
			onSubmit={event => {
				handleSubmit(event, file, setModalPageNumber, 2);
			}}
		>
			<RegisterHeader />
			<div className={registerModalTitleStyle}>
				<span>첨부 사진</span>
				<span>STEP 3/3</span>
			</div>
			{/* 이미지 업로드 박스 */}
			{/* <input type="image" onChange={event => setFile(event.target.files![0])} /> */}

			<button type="submit">다음</button>
		</form>
	);
};

const RegisterSumUp = (props: {
	setIsModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const { setIsModalOpened } = props;

	return (
		<form
			className={registerModalStyle}
			// onSubmit={event => {
			// 	handleSubmit(event, file, setModalPageNumber, 4);
			// }}
		>
			<SumupHeader />
			<div>
				<span>요약본</span>
			</div>
			{/* 요약본 이미지 */}

			<button onClick={() => setIsModalOpened(false)}>등록하기</button>
		</form>
	);
};

const AuditRegisterPage = (props: {
	setIsModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const [pageNumber, setPageNumber] = useState(0);
	const { setIsModalOpened } = props;
	return (
		<>
			{pageNumber === 0 ? (
				<RegisterRealReceipt setModalPageNumber={setPageNumber} />
			) : pageNumber === 1 ? (
				<RegisterCardSlip setModalPageNumber={setPageNumber} />
			) : pageNumber === 2 ? (
				<RegisterAdditionalImage setModalPageNumber={setPageNumber} />
			) : pageNumber === 3 ? (
				<RegisterSumUp setIsModalOpened={setIsModalOpened} />
			) : null}
		</>
	);
};

const RegisterImage = (props: {
	setIsModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const { setIsModalOpened } = props;

	return (
		<Modal setIsModalOpened={setIsModalOpened}>
			<AuditRegisterPage setIsModalOpened={setIsModalOpened} />
		</Modal>
	);
};

export default RegisterImage;
