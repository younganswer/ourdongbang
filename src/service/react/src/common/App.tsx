import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import PreviewPage from 'page/PreviewPage';
import LoginPage from 'page/auth/login';
import RegisterPage from 'page/auth/register';
import AuditPage from 'page/Audit';
import CalendarPage from 'page/CalendarPage';
import ToolBar from 'component/toolbar';
import MyPage from 'page/my';
import './font.css';
import RegisterFormPage from 'page/auth/register/form';
import ClubPage from 'page/club';

function App() {
	return (
		<div style={{ height: 1019, backgroundColor: '#D9D9D9' }}>
			<ToastContainer />
			<ToolBar />
			<Routes>
				<Route path="/" element={<PreviewPage />} />
				<Route path="/auth/login" element={<LoginPage />} />
				<Route path="/auth/register" element={<RegisterPage />} />
				<Route path="/auth/register/form" element={<RegisterFormPage />} />
				<Route path="/main/calendar" element={<CalendarPage />} />
				<Route path="/main/audit" element={<AuditPage />} />
				<Route path="/main/mypage" element={<MyPage />} />
				<Route path="/main/club" element={<ClubPage />} />
			</Routes>
		</div>
	);
}

export default App;
