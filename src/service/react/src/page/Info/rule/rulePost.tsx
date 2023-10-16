import React from 'react';
import { RulePostContentStyle, RulePostStyle } from './rulePost.style';
import RuleType from 'common/App.Types';

interface RulePostProps {
	rule: RuleType; // 'data' 대신 'rule'로 이름을 변경
}

const RulePost: React.FC<RulePostProps> = ({ rule }) => {
	return (
		<div className={RulePostStyle}>
			<h2 style={{ marginLeft: '20px' }}>{rule.title}</h2>
			<div className={RulePostContentStyle}>
				<ul>
					{rule.content.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default RulePost;
