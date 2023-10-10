import React from 'react';
import RuleTitle from './title';
import RuleContent from './ruleContent';
import { RuleStyle } from './index.style';

const Rule = () => {
	return (
		<div className={RuleStyle}>
			<RuleTitle />
			<RuleContent />
		</div>
	);
};

export default Rule;
