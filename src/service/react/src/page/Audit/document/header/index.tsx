import React, { Dispatch, SetStateAction } from 'react';
import { AuditFormHeaderMetaStyle, AuditFormHeaderStyle } from './index.style';

const MetaData = (props: {
	clubName: string;
	auditor: string;
	setAuditor: Dispatch<SetStateAction<string>>;
	created: string;
	setCreated: Dispatch<SetStateAction<string>>;
	isEditting: boolean;
}) => {
	const { clubName, auditor, setAuditor, created, setCreated, isEditting } = props;

	return (
		<div className={AuditFormHeaderMetaStyle}>
			<div>
				<div>
					<span>동아리 명</span>
				</div>
				<div>
					<span>{clubName}</span>
				</div>
			</div>
			<div>
				<div>
					<span>작 성 자</span>
				</div>
				<div>
					{isEditting ? (
						<input type="text" value={auditor} onChange={event => setAuditor(event.target.value)} />
					) : (
						<span>{auditor}</span>
					)}
				</div>
			</div>
			<div>
				<div>
					<span>작성일자</span>
				</div>
				<div>
					<div>
						{isEditting ? (
							<input
								type="text"
								value={created.split('-')[0]}
								onChange={event =>
									setCreated(
										event.target.value + '-' + created.split('-')[1] + '-' + created.split('-')[2],
									)
								}
							/>
						) : (
							<span>{created.split('-')[0]}</span>
						)}
						<span>년</span>
					</div>
					<div>
						{isEditting ? (
							<input
								type="text"
								value={created.split('-')[1]}
								onChange={event =>
									setCreated(
										created.split('-')[0] + '-' + event.target.value + '-' + created.split('-')[2],
									)
								}
							/>
						) : (
							<span>{created.split('-')[1]}</span>
						)}
						<span>월</span>
					</div>
					<div>
						{isEditting ? (
							<input
								type="text"
								value={created.split('-')[2]}
								onChange={event =>
									setCreated(
										created.split('-')[0] + '-' + created.split('-')[1] + '-' + event.target.value,
									)
								}
							/>
						) : (
							<span>{created.split('-')[2]}</span>
						)}
						<span>일</span>
					</div>
				</div>
			</div>
		</div>
	);
};

const AuditDocumentHeader = (props: {
	index: number | null;
	clubName: string;
	auditor: string;
	setAuditor: Dispatch<SetStateAction<string>>;
	created: string;
	setCreated: Dispatch<SetStateAction<string>>;
	isEditting: boolean;
}) => {
	const { index, clubName, auditor, setAuditor, created, setCreated, isEditting } = props;

	return (
		<div className={AuditFormHeaderStyle}>
			{index ? <span>[ {index + 1} ]</span> : <span></span>}
			<span>{`( ${clubName} )`} 회계 내역</span>
			<MetaData
				clubName={clubName}
				auditor={auditor}
				setAuditor={setAuditor}
				created={created}
				setCreated={setCreated}
				isEditting={isEditting}
			/>
		</div>
	);
};

export default AuditDocumentHeader;
