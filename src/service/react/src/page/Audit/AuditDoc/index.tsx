import React from 'react';
import RegisterDoc from './RegisterDoc';
import { AuditDocHeaderStyle, AuditDocStyle } from './index.style';
import { ExportIcon } from './icon';

const Header = () => {
	return (
		<div className={AuditDocHeaderStyle}>
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
const AuditDoc = () => {
	return (
		<div className={AuditDocStyle}>
			<Header />
			<RegisterDoc />
		</div>
	);
};

export default AuditDoc;
