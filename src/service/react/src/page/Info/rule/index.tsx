import React from 'react';
import RuleTitle from './title';
import RuleContent from './ruleContent';
import { RuleStyle } from './index.style';

const Rule = () => {
	return (
		<div>
			<div className={RuleStyle}>
				<RuleTitle />
				<RuleContent />
			</div>
		</div>
	);
};

export default Rule;
