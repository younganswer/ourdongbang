// TopToolBar.tsx

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // 라우터 사용에 따라 변경
import ToolBarBtn from './ToolBarBtn';
import '../style/ToolBar.css'; // CSS 스타일 파일 경로에 따라 변경

const PToolBar: React.FC = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className={`top-toolbar${isScrolled ? ' scrolled' : ''}`}>
			<Link to="/" className="toolbar-link">
				<span className="toolbar-title">우리동방</span>
			</Link>
			<div className="Ptoolbar-buttons">
				<ToolBarBtn to="/auth/login" label="로그인" />
				<ToolBarBtn to="/auth/register" label="회원가입" />
			</div>
		</div>
	);
};

export default PToolBar;
