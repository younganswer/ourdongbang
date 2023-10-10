import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext, Me } from 'context/AuthContext';
import { ToolBarTitleStyle, ToolBarStyle } from './index.style';
import { ToolBarBtnWrapperStyle } from './ToolBarBtn.style';
import ToolBarBtn from './ToolBarBtn';

const Title = (props: { me: Me | null }) => {
	const { me } = props;
	const route = me ? '/main/info' : '/';

	return (
		<div className={ToolBarTitleStyle}>
			<Link to={route}>
				<span>우리동방</span>
			</Link>
		</div>
	);
};

const Buttons = (props: { me: Me | null }) => {
	const { me } = props;

	return (
		<div className={ToolBarBtnWrapperStyle}>
			{me ? (
				<>
					<ToolBarBtn to="/main/club" label="정보" />
					<ToolBarBtn to="/main/calendar" label="캘린더" />
					<ToolBarBtn to="/main/audit" label="회계" />
					<ToolBarBtn to="/main/mypage" label="마이페이지" />
				</>
			) : (
				<>
					<ToolBarBtn to="/auth/login" label="로그인" />
					<ToolBarBtn to="/auth/register" label="회원가입" />
				</>
			)}
		</div>
	);
};

const ToolBar: React.FC = () => {
	const { me } = useContext(AuthContext);

	return (
		<div className={ToolBarStyle}>
			<div>
				<Title me={me} />
				<Buttons me={me} />
			</div>
		</div>
	);
};

export default ToolBar;
