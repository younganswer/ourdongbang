import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import logo from "./logo.svg";
import PreviewPage from 'page/PreviewPage';
import LoginPage from 'page/LoginPage';
import RegisterPage from 'page/RegisterPage';
import AuditPage from 'page/Audit';
import CalendarPage from 'page/CalendarPage';
import ToolBar from 'component/toolbar';
import { ToastContainer } from 'react-toastify';
import MyPage from 'page/my';

function App() {
	return (
		<div style={{ height: 1019, backgroundColor: '#D9D9D9' }}>
			<ToastContainer />
			<ToolBar />
			<Routes>
				<Route path="/" element={<PreviewPage />} />
				<Route path="/auth/login" element={<LoginPage />} />
				<Route path="/auth/register" element={<RegisterPage />} />
				<Route path="/main/calendar" element={<CalendarPage />} />
				<Route path="/main/audit" element={<AuditPage />} />
				<Route path="/main/mypage" element={<MyPage />} />
			</Routes>
		</div>
	);
}

export default App;
