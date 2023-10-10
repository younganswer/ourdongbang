import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RulePost from './rulePost';
import { RuleContentStyle } from './ruleContent.style';
// import RulePost from './rulePost'; // 게시글 컴포넌트를 가져옵니다.

const RuleContent = () => {
	const [rule, setRule] = useState('');

	useEffect(() => {
		// async 함수 내에서 비동기 요청을 수행
		const fetchData = async () => {
			try {
				// Axios를 사용하여 몽고디비에서 데이터 가져오기
				const response = await axios.get(`${process.env.REACT_APP_NESTJS_URL}/club`); // 적절한 엔드포인트 및 요청 설정을 사용
				// 가져온 데이터에서 룰 정보 추출
				const fetchedRule = response.data[0].rule;
				// 상태(State)에 룰 정보 저장
				setRule(fetchedRule);
			} catch (error) {
				console.error('데이터를 가져오는 중 오류 발생:', error);
			}
		};

		// fetchData 함수를 호출하여 데이터 가져오기
		fetchData();
	}, []);

	//임시로 잠깐 룰 데이터를 만들어서 wrapping함
	const ruleData = {
		// 규칙을 배열로 해서 api가 하나 더 필요할듯 함 rule collection도 필요할듯
		content: rule,
	};

	return (
		<div className={RuleContentStyle}>
			{/* {rule.map(rule => (
				<RulePost key={rule.id} data={rule} />
			))} */}
			<RulePost data={ruleData} />
		</div>
	);
};

export default RuleContent;
