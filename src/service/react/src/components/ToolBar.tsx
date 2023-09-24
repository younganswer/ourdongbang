import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ToolBarBtn from './ToolBarBtn';
import '../style/ToolBar.css';

const ToolBar: React.FC = () => {
	const [isMainButtonsVisible, setIsMainButtonsVisible] = useState(true);
	const navigate = useNavigate();

	// 이 토글 버튼은 우선 axios연동 전 페이지 전환을 위해서 임시로 만든 button -> axios 연동 시 수정 필요
	const toggleButtons = () => {
		setIsMainButtonsVisible(!isMainButtonsVisible);

		if (!isMainButtonsVisible) {
			navigate('/');
		} else {
			navigate('/main/calendar');
		}
	};

	return (
		<div className="top-toolbar">
			{/* <Link to="/" className="toolbar-link">
				<span className="toolbar-title">우리동방</span>
				<button onClick={toggleButtons}>.</button>
			</Link> */}

			{/* 우선 기능적 구현을 위해 임시 방편으로 짜둔 코드, axios 연동 시 수정 필요 */}
			<div>
				<span className="toolbar-title">우리동방</span>
				<button onClick={toggleButtons}>.</button>
			</div>

			<div className={`toolbar-buttons${isMainButtonsVisible ? '' : ' alt'}`}>
				{isMainButtonsVisible ? (
					<>
						<ToolBarBtn to="/auth/login" label="로그인" />
						<ToolBarBtn to="/auth/register" label="회원가입" />
					</>
				) : (
					<>
						<ToolBarBtn to="/main/calendar" label="캘린더" />
						<ToolBarBtn to="/main/audit" label="회계" />
						<ToolBarBtn to="/main/info" label="정보" />
						<ToolBarBtn to="/main/mypage" label="마이페이지" />
					</>
				)}
			</div>
		</div>
	);
};

export default ToolBar;
