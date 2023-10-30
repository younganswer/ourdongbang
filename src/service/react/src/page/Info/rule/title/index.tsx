import React from 'react';
import { InfoPageRuleTitleStyle } from './index.style';
import { InfoPageTitleIcon } from './icon';

const InfoPageRuleTitle = () => {
	return (
		<div className={InfoPageRuleTitleStyle}>
			<InfoPageTitleIcon width={209} height={60} />
		</div>
	);
};

export default InfoPageRuleTitle;
