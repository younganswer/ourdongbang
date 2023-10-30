import React from 'react';
import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';
import { PageStyle } from 'page/page.style';
import ScheduleHeader from './Header';
import ScheduleBody from './Body';

const Wrapper = styled.div`
	height: 1479px;
	width: 1200px;
	gap: 24px;
	align-items: center;
	border: 1px solid black;
`;

const SchedulerPage: React.FC = () => {
	return (
		<div className={PageStyle}>
			<Wrapper>
				<ScheduleHeader />
				<ScheduleBody />
			</Wrapper>
		</div>
	);
};

export default SchedulerPage;
