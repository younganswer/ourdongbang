import React from 'react';
import { Link } from 'react-router-dom';
import { ToolBarBtnStyle } from './ToolBarBtn.style';

interface ToolBarBtnProps {
	to: string;
	label: string;
}

const ToolBarBtn: React.FC<ToolBarBtnProps> = ({ to, label }) => {
	return (
		<Link to={to}>
			<button className={ToolBarBtnStyle}>{label}</button>
		</Link>
	);
};

export default ToolBarBtn;
