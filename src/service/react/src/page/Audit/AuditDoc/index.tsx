import React, { Dispatch, SetStateAction, useContext } from 'react';
import AuditRegister from './RegisterDoc';
import {
	AuditDocumentBodyStyle,
	AuditDocumentHeaderStyle,
	AuditDocumentStyle,
} from './index.style';
import { DownArrowIcon, ExportIcon } from './icon';
import AuditDocumentPreview from './Preview';
import { Audit, AuditContext } from 'context/AuditContext';

const Header = () => {
	return (
		<div className={AuditDocumentHeaderStyle}>
			<span>회계 문서</span>
			<div>
				<span>|</span>
				<div
					onClick={() => {
						console.log('export');
					}}
				>
					<span>회계 장부 내보내기</span>
					<ExportIcon width={24} height={24} />
				</div>
			</div>
		</div>
	);
};

const Body = (props: {
	audits: Audit[] | null;
	setAudits: Dispatch<SetStateAction<Audit[] | null>>;
}) => {
	const { audits, setAudits } = props;

	return (
		<div className={AuditDocumentBodyStyle}>
			<div>
				<span>날짜별</span>
				<DownArrowIcon width={22} height={12} />
			</div>
			<div>
				<AuditRegister />
				{audits?.map((audit, index) => {
					return (
						<AuditDocumentPreview
							key={index}
							index={index}
							audit={audit}
							audits={audits}
							setAudits={setAudits}
						/>
					);
				})}
			</div>
		</div>
	);
	console.log(audits, setAudits);
};

const AuditDocuments = () => {
	const { audits, setAudits } = useContext(AuditContext);

	return (
		<div className={AuditDocumentStyle}>
			<Header />
			<Body audits={audits} setAudits={setAudits} />
		</div>
	);
};

export default AuditDocuments;
