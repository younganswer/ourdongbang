import React from 'react';
import { AuditPageStyle } from './index.style';
import Header from './Header';
import AuditDocuments from './AuditDoc';

const AuditPage = () => {
	return (
		<div className={AuditPageStyle}>
			<Header />
			<AuditDocuments />
		</div>
	);
};

export default AuditPage;
