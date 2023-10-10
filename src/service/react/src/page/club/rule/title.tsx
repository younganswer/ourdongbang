import React from 'react';
import { RuleTitleButtonStyle, RuleTitleStyle } from './title.style';

const RuleTitle = () => {
	return (
		<div>
			<div className={RuleTitleStyle}>
				<h2 style={{ margin: '0', flex: '1', fontWeight: 'bold', fontSize: 32.19 }}>규칙</h2>{' '}
				<button className={RuleTitleButtonStyle}>항목추가 +</button>{' '}
			</div>
			<hr style={{ marginTop: '23.42px', borderBottom: '1px solid #ccc' }} />
		</div>
	);
};

export default RuleTitle;
