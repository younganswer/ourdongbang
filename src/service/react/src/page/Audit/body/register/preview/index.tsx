import React, { Dispatch, SetStateAction } from 'react';
import { AuditRegisterPreviewStyle } from './index.style';

const AuditRegisterPreview = (props: {
	title: string | undefined;
	setTitle: Dispatch<SetStateAction<string | undefined>>;
	franchise: string | undefined;
	setFranchise: Dispatch<SetStateAction<string | undefined>>;
	date: string | undefined;
	setDate: Dispatch<SetStateAction<string | undefined>>;
	amount: string | undefined;
	setAmount: Dispatch<SetStateAction<string | undefined>>;
	receiptSrc: string | undefined;
	receiptId: string | undefined;
	cardSlipSrc: string | undefined;
	cardSlipId: string | undefined;
	attachmentSrc: string | undefined;
	attachmentId: string | undefined;
	remark: string | undefined;
	setRemark: Dispatch<SetStateAction<string | undefined>>;
	setIsModalOpened: Dispatch<SetStateAction<boolean>>;
}) => {
	const {
		title,
		setTitle,
		franchise,
		setFranchise,
		date,
		setDate,
		amount,
		setAmount,
		receiptSrc,
		receiptId,
		cardSlipSrc,
		cardSlipId,
		attachmentSrc,
		attachmentId,
		remark,
		setRemark,
		setIsModalOpened,
	} = props;

	return (
		<div className={AuditRegisterPreviewStyle}>
			<div>
				<div>
					<div>
						<div>
							<span>제 목</span>
						</div>
						<div>
							<input type={'text'} value={title} onChange={event => setTitle(event.target.value)} />
						</div>
					</div>
					<div>
						<div>
							<span>상호명</span>
						</div>
						<div>
							<input
								type={'text'}
								value={franchise}
								onChange={event => setFranchise(event.target.value)}
							/>
						</div>
					</div>
					<div>
						<div>
							<span>일 자</span>
						</div>
						<div>
							<input type={'date'} value={date} onChange={event => setDate(event.target.value)} />
						</div>
					</div>
					<div>
						<div>
							<span>금 액</span>
						</div>
						<div>
							<input
								type={'text'}
								value={amount}
								onChange={event => setAmount(event.target.value)}
							/>
						</div>
					</div>
					<div>
						<div>
							<div>
								<span>실물 영수증</span>
							</div>
							<div>
								<img src={receiptSrc} />
							</div>
						</div>
						<div>
							<div>
								<span>카드 전표</span>
							</div>
							<div>
								<img src={cardSlipSrc} />
							</div>
						</div>
						<div>
							<div>
								<span>첨부 사진</span>
							</div>
							<div>
								<img src={attachmentSrc} />
							</div>
						</div>
					</div>
					<div>
						<div>
							<span>메 모</span>
						</div>
						<div>
							<textarea value={remark} onChange={event => setRemark(event.target.value)}></textarea>
						</div>
					</div>
				</div>
				<div>
					<button>
						<span>등록하기</span>
					</button>
					<button>
						<span>미리보기</span>
					</button>
				</div>
			</div>
		</div>
	);
	console.log(
		title,
		setTitle,
		franchise,
		setFranchise,
		date,
		setDate,
		amount,
		setAmount,
		receiptId,
		cardSlipId,
		attachmentId,
		remark,
		setRemark,
		setIsModalOpened,
	);
};

export default AuditRegisterPreview;
