import React from 'react';
import styled from 'styled-components';
import { PageStyle } from './page.style';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const SchedulerPage: React.FC = () => {
	return (
		<div className={PageStyle}>
			<Wrapper></Wrapper>
		</div>
	);
};

export default SchedulerPage;
