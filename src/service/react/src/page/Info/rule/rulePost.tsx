import React from 'react';
import { PostTitleStyle, RulePostContentStyle, RulePostStyle } from './rulePost.style';
import RuleType from 'common/App.Types';
import { ReactComponent as EditBtnImg } from '../../../assets/RuleEditBtn.svg';

interface RulePostProps {
	rule: RuleType; // 'data' 대신 'rule'로 이름을 변경
}

const RulePost: React.FC<RulePostProps> = ({ rule }) => {
	const handleEditButtonClick = () => {
		alert('업데이트 예정입니다!');
	};

	return (
		<div className={RulePostStyle}>
			<div className={PostTitleStyle}>
				<span>{rule.title}</span>
				<EditBtnImg onClick={handleEditButtonClick} />
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
