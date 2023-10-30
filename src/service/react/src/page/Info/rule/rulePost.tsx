import React from 'react';
import { PostTitleStyle, RulePostContentStyle, RulePostStyle } from './rulePost.style';
import RuleType from 'common/App.Types';
import { ReactComponent as EditBtnImg } from '../../../assets/RuleEditBtn.svg';

interface RulePostProps {
	rule: RuleType; // 'data' 대신 'rule'로 이름을 변경
}

const RulePost: React.FC<RulePostProps> = ({ rule }) => {
	const handleEditButtonClick = () => {
		console.log('버튼 클릭됨');
	};

	return (
		<div className={RulePostStyle}>
			<div className={PostTitleStyle}>
				<h2 style={{ marginLeft: '20px' }}>{rule.title}</h2>
				<EditBtnImg
					style={{ marginTop: '5px', marginRight: '20px', cursor: 'pointer' }}
					onClick={handleEditButtonClick}
				/>
			</div>
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
