import React from 'react';
import RegisterDoc from './RegisterDoc';
import { AuditDocStyle } from './index.style';

const AuditDoc = () => {
	return (
		<div className={AuditDocStyle}>
			<span>회계 문서</span>
			<div>
				<RegisterDoc />
			</div>
		</div>
	);
};

export default AuditDoc;
