import React from 'react';
import { AuditPageStyle } from './index.style';
import { ShowBalance } from './ShowBalance/ShowBalance';
import { AuditSearch } from './AuditSearch/AuditSearch';

const AuditPage = () => {
	return (
		<div className={AuditPageStyle}>
			<div>
				<AuditSearch />
			</div>
			<div>
				<ShowBalance totalBudget={500000} balance={300000} />
			</div>
		</div>
	);
};

export default AuditPage;
