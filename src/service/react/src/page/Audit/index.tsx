import React from 'react';
import { AuditPageStyle } from './index.style';
import Header from './Header';
import './AuditDoc/RegisterDoc';
import AuditDoc from './AuditDoc';

const AuditPage = () => {
	return (
		<div className={AuditPageStyle}>
			<Header />
			<AuditDoc />
		</div>
	);
};

export default AuditPage;
