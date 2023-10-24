import React from 'react';
import AuditRegister from './RegisterDoc';
import {
	AuditDocumentBodyStyle,
	AuditDocumentHeaderStyle,
	AuditDocumentStyle,
} from './index.style';
import { DownArrowIcon, ExportIcon } from './icon';

const Header = () => {
	return (
		<div className={AuditDocumentHeaderStyle}>
			<span>회계 문서</span>
			<div>
				<span>|</span>
				<div>
					<span>회계 장부 내보내기</span>
					<ExportIcon width={24} height={24} />
				</div>
			</div>
		</div>
	);
};

const Body = () => {
	return (
		<div className={AuditDocumentBodyStyle}>
			<div>
				<span>날짜별</span>
				<DownArrowIcon width={22} height={12} />
			</div>
			<div>
				<AuditRegister />
				<AuditRegister />
				<AuditRegister />
				<AuditRegister />
				<AuditRegister />
				<AuditRegister />
				<AuditRegister />
				<AuditRegister />
				<AuditRegister />
				<AuditRegister />
				<AuditRegister />
				<AuditRegister />
				<AuditRegister />
			</div>
		</div>
	);
};

const AuditDocument = () => {
	return (
		<div className={AuditDocumentStyle}>
			<Header />
			<Body />
		</div>
	);
};

export default AuditDocument;
