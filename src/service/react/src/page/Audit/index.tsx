import React from 'react';
import { AuditPageStyle } from './index.style';
import Header from './Header';
import AuditDocument from './AuditDoc';

const AuditPage = () => {
	return (
		<div className={AuditPageStyle}>
			<Header />
			<AuditDocument />
		</div>
	);
};

export default AuditPage;
