import React from 'react';
import { RulePostButtonStyle, RulePostContentStyle, RulePostStyle } from './rulePost.style';

interface PostProps {
	data: {
		// title: string;
		content: string;
	};
}

const RulePost: React.FC<PostProps> = ({ data }) => {
	return (
		<div className={RulePostStyle}>
			<div style={{ display: 'flex' }}>
				<div style={{ flex: 1, fontWeight: 'bold', fontSize: '29.26px' }}>벌금</div>
				<button className={RulePostButtonStyle}>수정하기</button>
			</div>

			<div className={RulePostContentStyle}>
				<p>{data.content}</p>
				{/* 게시글 내용을 표시하는 부분 */}
			</div>
		</div>
	);
};

export default RulePost;
