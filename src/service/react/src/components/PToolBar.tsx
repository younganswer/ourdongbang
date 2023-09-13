import React from 'react';
import { Link } from 'react-router-dom';
import '../style/ToolBar.css';

const PToolBar = () => {
	return (
		<div className="font-change">
			<Link to="/" style={{ textDecoration: 'none' }}>
				<span style={{ color: 'black', marginLeft: 10, fontSize: 40 }}>우리동방</span>
			</Link>
			<Link to="/auth/login">
				<span style={{ float: 'right', color: 'black' }}>login</span>
			</Link>
			<Link to="/auth/register">
				<span style={{ float: 'right', color: 'black', marginRight: 10 }}>Register</span>
			</Link>
		</div>
	);
};

export default PToolBar;
