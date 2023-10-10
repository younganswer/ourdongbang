import React, { useEffect } from 'react';
// import React, { useEffect, useState } from 'react';
// import RulePost from ; // 게시글 컴포넌트를 가져옵니다.

const RuleContent = () => {
	// const [posts, setPosts] = useState([]);

	useEffect(() => {
		// 백엔드 API를 호출하여 게시글 데이터를 가져오는 코드
		// 가져온 데이터를 setPosts를 사용하여 상태에 저장
	}, []);

	return (
		<div>
			{/* {posts.map(post => (
				<RulePost key={post.id} data={post} />
			))} */}
		</div>
	);
};

export default RuleContent;
