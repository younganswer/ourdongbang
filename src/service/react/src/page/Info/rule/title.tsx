import React from 'react';
import { RuleTitleImgStyle } from './title.style';
import { ReactComponent as TitleImgSrc } from '../../../assets/Union.svg';

const RuleTitle = () => {
	return (
		<div>
			<TitleImgSrc width={209} height={60} className={RuleTitleImgStyle} />
		</div>
	);
};

export default RuleTitle;
