// import { on } from 'events';
import React, { useState } from 'react';
import { registerModalStyle, registerModalTitleStyle } from './registerModal.style';
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
			{/* 모달 밖 closeBtn */}
			<div>
				<CloseBtn setIsModalOpened={setIsModalOpened} />
			</div>
			{/* 실제 모달 내용 4개 section으로 나뉨 1) 지출등록 - Header, 2) 각 페이지 별 title과 step, 
			3) 이미지 첨부 - ImageUpload component 박스, 4) '다음'버튼  */}
			<div className={registerModalStyle}>
				<RegisterHeader />
				<div className={registerModalTitleStyle}>
					<span>영수증 등록</span>
					<span>STEP 1/3</span>
				</div>
				{/* 이미지 업로드 박스 */}
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
			<div className={registerModalStyle}>
				<RegisterHeader />
				<div className={registerModalTitleStyle}>
					<span>카드 전표 등록</span>
					<span>STEP 2/3</span>
				</div>
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
			<div className={registerModalStyle}>
				<RegisterHeader />
				<div className={registerModalTitleStyle}>
					<span>첨부 사진</span>
					<span>STEP 3/3</span>
				</div>
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
			<div className={registerModalStyle}>
				<RegisterHeader />
				<div>
					<span>요약본</span>
				</div>
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

	return <form className={registerModalStyle}>{modals[Page].content}</form>;
};

export default RegisterImage;
