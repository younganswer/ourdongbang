import React from 'react';
import { InfoPageRuleTitleStyle } from './index.style';
import { ReactComponent as TitleImgSrc } from '../../../assets/Union.svg';

const InfoPageRuleTitle = () => {
	return (
		<div className={InfoPageRuleTitleStyle}>
			<TitleImgSrc width={209} height={60} />
		</div>
	);
};

export default InfoPageRuleTitle;
