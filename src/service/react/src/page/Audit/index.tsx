import React from 'react';
import { AuditPageStyle } from './index.style';
import AuditDocumentHeader from './Header';
import AuditDocumentBody from './body';

const AuditPage = () => {
	return (
		<div className={AuditPageStyle}>
			<AuditDocumentHeader />
			<AuditDocumentBody />
		</div>
	);
};

export default AuditPage;
