import React from 'react';
import { Link } from 'react-router-dom';
import { toolBarBtn } from './ToolBarBtn.style';

interface ToolBarBtnProps {
	to: string;
	label: string;
}

const ToolBarBtn: React.FC<ToolBarBtnProps> = ({ to, label }) => {
	return (
		<Link to={to}>
			<button className={toolBarBtn}>{label}</button>
		</Link>
	);
};

export default ToolBarBtn;
