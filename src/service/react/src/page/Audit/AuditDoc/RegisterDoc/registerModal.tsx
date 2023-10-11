// import { on } from 'events';
import React, { useState } from 'react';
import { modalContentStyles } from './registerModal.style';
import { Modal } from 'component/modal';
import { RegisterHeader } from './registerHeader';
import { CloseBtn } from './CloseBtn';

const RegisterRealReceipt = (props: {
	setIsModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
	setModalPageNumber: React.Dispatch<React.SetStateAction<number>>;
}) => {
	const { setIsModalOpened, setModalPageNumber } = props;
	return (
		<div>
			<div>
				<CloseBtn setIsModalOpened={setIsModalOpened} />
			</div>
			<div className={modalContentStyles}>
				<RegisterHeader />
				<h2>실물 영수증</h2>
				<button onClick={() => setModalPageNumber(1)}>다음</button>
			</div>
		</div>
	);
};

const RegisterCardSlip = (props: {
	setIsModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
	setModalPageNumber: React.Dispatch<React.SetStateAction<number>>;
}) => {
	const { setIsModalOpened, setModalPageNumber } = props;

	return (
		<div>
			<div>
				<CloseBtn setIsModalOpened={setIsModalOpened} />
			</div>
			<div className={modalContentStyles}>
				<RegisterHeader />
				<h2>카드 전표</h2>
				<button onClick={() => setModalPageNumber(2)}>다음</button>
			</div>
		</div>
	);
};

const RegisterAdditionalImage = (props: {
	setIsModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
	setModalPageNumber: React.Dispatch<React.SetStateAction<number>>;
}) => {
	const { setIsModalOpened, setModalPageNumber } = props;

	return (
		<div>
			<div>
				<CloseBtn setIsModalOpened={setIsModalOpened} />
			</div>
			<div className={modalContentStyles}>
				<RegisterHeader />
				<h2>첨부 사진</h2>
				<button onClick={() => setModalPageNumber(3)}>다음</button>
			</div>
		</div>
	);
};

const RegisterSumUp = (props: {
	setIsModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const { setIsModalOpened } = props;

	return (
		<div>
			<div>
				<CloseBtn setIsModalOpened={setIsModalOpened} />
			</div>
			<div className={modalContentStyles}>
				<RegisterHeader />
				<h2>요약본</h2>
				<button onClick={() => setIsModalOpened(false)}>제출 완료</button>
			</div>
		</div>
	);
};

const RegisterImage = (props: {
	setIsModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const { setIsModalOpened } = props;
	const [, setModalOpened] = useState(true);

	const [Page, setPage] = useState(0);

	const modals = [
		{
			content: (
				<Modal setIsModalOpened={setModalOpened}>
					<RegisterRealReceipt setIsModalOpened={setIsModalOpened} setModalPageNumber={setPage} />
				</Modal>
			),
			next: 1,
		},
		{
			content: (
				<Modal setIsModalOpened={setModalOpened}>
					<RegisterCardSlip setIsModalOpened={setIsModalOpened} setModalPageNumber={setPage} />
				</Modal>
			),
			next: 2,
		},
		{
			content: (
				<Modal setIsModalOpened={setModalOpened}>
					<RegisterAdditionalImage
						setIsModalOpened={setIsModalOpened}
						setModalPageNumber={setPage}
					/>
				</Modal>
			),
			next: 3,
		},
		{
			content: (
				<Modal setIsModalOpened={setModalOpened}>
					<RegisterSumUp setIsModalOpened={setIsModalOpened} />
				</Modal>
			),
			next: 4,
		},
	];

	return <form className={modalContentStyles}>{modals[Page].content}</form>;
};

export default RegisterImage;
