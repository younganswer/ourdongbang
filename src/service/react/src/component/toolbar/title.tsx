import React from 'react';
import { Me } from 'context/AuthContext';
import { ToolBarTitleStyle } from './title.style';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo_rec.svg';

const ToolBarTitle = (props: { me: Me | null }) => {
	const { me } = props;
	const route = me ? '/main/info' : '/';

	return (
		<div className={ToolBarTitleStyle}>
			<Link to={route}>
				<Logo width={120} height={30} />
			</Link>
			<span>|</span>
			<span>우동</span>
		</div>
	);
};

export default ToolBarTitle;
