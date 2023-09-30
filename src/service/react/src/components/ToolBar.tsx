import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ToolBarBtn from './ToolBarBtn';
import { AuthContext } from 'context/AuthContext';
import { topToolbar, toolbarLink, toolbarTitle } from './ToolBar.style';
import { toolBarBtns } from './ToolBarBtn.style';
// import axios from 'axios';

const ToolBar: React.FC = () => {
	// const navigate = useNavigate();

	const { me } = useContext(AuthContext);

	return (
		<div className={topToolbar}>
			<div>
				{!me ? (
					<>
						<Link to="/" className={toolbarLink}>
							<span className="toolbar-title">우리동방</span>
						</Link>
					</>
				) : (
					<>
						<Link to="/main/calendar" className={toolbarLink}>
							<span className={toolbarTitle}>우리동방</span>
						</Link>
					</>
				)}
			</div>

			<div className={`${toolBarBtns} ${!me ? '' : ' alt'}`}>
				{me ? (
					<>
						<ToolBarBtn to="/main/calendar" label="캘린더" />
						<ToolBarBtn to="/main/audit" label="회계" />
						<ToolBarBtn to="/main/info" label="정보" />
						<ToolBarBtn to="/main/mypage" label="마이페이지" />
					</>
				) : (
					<>
						<ToolBarBtn to="/auth/login" label="로그인" />
						<ToolBarBtn to="/auth/register" label="회원가입" />
					</>
				)}
			</div>
		</div>
	);
};

export default ToolBar;
