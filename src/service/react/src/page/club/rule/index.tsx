import React from 'react';
import RuleTitle from './title';
import { PageStyle } from 'page/page.style';
import RuleContent from './ruleContent';

const Rule = () => {
	return (
		<div className={PageStyle}>
			<RuleTitle />
			<RuleContent />
		</div>
	);
};

export default Rule;
