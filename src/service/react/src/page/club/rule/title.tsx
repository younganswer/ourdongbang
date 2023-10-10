import React from 'react';
import { RuleTitleStyle } from './title.style';

const RuleTitle = () => {
	return (
		<div>
			<div className={RuleTitleStyle}>
				<h2 style={{ margin: '0', flex: '1' }}>규칙</h2>{' '}
				<button style={{ border: 'none', background: 'none', fontWeight: 'bold' }}>
					항목추가 +
				</button>{' '}
			</div>
			<hr style={{ margin: '0', borderBottom: '1px solid #ccc' }} />
		</div>
	);
};

export default RuleTitle;

{
	/* <div style={{ backgroundColor: 'white', padding: '16px', display: 'flex', alignItems: 'center' }}> */
}
{
	/* <h2 style={{ margin: '0', flex: '1' }}>규칙</h2> "규칙" 제목 */
}
{
	/* <button style={{ border: 'none', background: 'none', fontWeight: 'bold' }}>+ 항목추가</button> "+ 항목추가" 버튼 */
}
// </div>
{
	/* <hr style={{ margin: '0', borderBottom: '1px solid #ccc' }} /> 수평 선 추가 */
}
