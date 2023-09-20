import React from 'react';
import { Link } from 'react-router-dom';
import '../style/ToolBar.css';

interface ToolBarBtnProps {
	to: string;
	label: string;
}

const ToolBarBtn: React.FC<ToolBarBtnProps> = ({ to, label }) => {
	return (
		<Link to={to}>
			<button className="toolbar-button">{label}</button>
		</Link>
	);
};

export default ToolBarBtn;
