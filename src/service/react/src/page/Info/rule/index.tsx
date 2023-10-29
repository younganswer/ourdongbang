import React from 'react';
import InfoPageRuleTitle from './title';
import InfoPageRuleContent from './content';
import { InfoPageRuleStyle } from './index.style';

const InfoPageRule = () => {
	return (
		<div className={InfoPageRuleStyle}>
			<div>
				<InfoPageRuleTitle />
				<InfoPageRuleContent />
			</div>
		</div>
	);
};

export default InfoPageRule;
