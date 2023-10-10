import React, { useContext } from 'react';
import { AuthContext } from 'context/AuthContext';
import { ToolBarStyle } from './index.style';
import ToolBarTitle from './title';
import ToolBarRouteBtns from './route-btns';
import ClubBtn from './club-btn';

const ToolBar = () => {
	const { me } = useContext(AuthContext);

	return (
		<div className={ToolBarStyle}>
			<div>
				<ToolBarTitle me={me} />
				<ToolBarRouteBtns me={me} />
				{me ? <ClubBtn club={null} /> : null}
			</div>
		</div>
	);
};

export default ToolBar;
