import React from 'react';
import RuleTitle from './title';
import RuleContent from './ruleContent';
import { RuleStyle } from './index.style';

const Rule = () => {
	return (
		<div>
			<RuleTitle />
			<div className={RuleStyle}>
				<RuleContent />
			</div>
		</div>
	);
};

export default Rule;
