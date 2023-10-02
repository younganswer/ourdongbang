import React from 'react';
import { AuditPageStyle } from './index.style';
import { ShowBalance } from './ShowBalance/ShowBalance';

const AuditPage = () => {
	return (
		<div className={AuditPageStyle}>
			<div>
				<h3>회계</h3>
			</div>
			<div>
				<ShowBalance totalBudget={500000} balance={300000} />
			</div>
		</div>
	);
};

export default AuditPage;
