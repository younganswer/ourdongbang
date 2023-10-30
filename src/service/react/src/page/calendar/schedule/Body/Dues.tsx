import React from 'react';
import { DuesContainerStyle } from './Dues.style';
import { TitleContainer } from './TitleContainer';
import { DuesIcon } from './icon';

const Dues = () => {
	return (
		<div className={DuesContainerStyle} style={{ border: 'none' }}>
			<>
				<TitleContainer
					titleIcon={<DuesIcon width={36} height={36} />}
					title="예상 회비"
					subtitle="금액을 입력해주세요"
				/>
			</>
		</div>
	);
};

export default Dues;
