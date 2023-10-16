import React from 'react';
import styled from 'styled-components';

const NotiContainer = styled.div`
	border: 1px solid black;
`;

const Deadline = styled.div`
	height: 120px;
`;
const Progress = styled.div`
	height: 120px;
`;
const Scheduled = styled.div`
	height: 120px;
`;

const NotificationCard: React.FC = () => {
	return (
		<NotiContainer>
			<div>
				<span>알림</span>
			</div>
			<Deadline>
				<span>오늘 활동이 끝나요</span>
			</Deadline>
			<Progress>
				<span>현재 활동 중이에요</span>
			</Progress>
			<Scheduled>
				<span>활동이 내일 시작해요</span>
			</Scheduled>
		</NotiContainer>
	);
};

export default NotificationCard;
