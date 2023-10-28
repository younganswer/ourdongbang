import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import PreviewPage from '../page/PreviewPage';
import LoginPage from '../page/auth/login';
import RegisterPage from '../page/auth/register';
import AuditPage from '../page/audit';
import CalendarPage from '../page/calendar';
import ToolBar from '../component/toolbar';
import MyPage from '../page/my';
import './font.css';
import RegisterFormPage from 'page/auth/register/form';
import InfoPage from 'page/Info';
import SchedulerPage from '../page/calendar/schedule';
import PrivateRoute from 'component/route/private-route';
import PublicRoute from 'component/route/public-route';
import SearchPage from 'page/search';

function App() {
	return (
		<div style={{ backgroundColor: '#EFEEEA' }}>
			<ToastContainer />
			<ToolBar />
			<Routes>
				<Route path="/" element={<PreviewPage />} />
				<Route path="/auth/login" element={<PublicRoute element={<LoginPage />} />} />
				<Route path="/auth/register" element={<PublicRoute element={<RegisterPage />} />} />
				<Route
					path="/auth/register/form"
					element={<PublicRoute element={<RegisterFormPage />} />}
				/>
				<Route path="/main/info" element={<PrivateRoute element={<InfoPage />} />} />
				<Route path="/main/calendar" element={<PrivateRoute element={<CalendarPage />} />} />
				<Route
					path="/main/calendar/scheduler"
					element={<PrivateRoute element={<SchedulerPage />} />}
				/>
				<Route path="/main/audit" element={<AuditPage />} />
				<Route path="/main/search" element={<PrivateRoute element={<SearchPage />} />} />
				<Route path="/main/mypage" element={<PrivateRoute element={<MyPage />} />} />
			</Routes>
		</div>
	);
}

export default App;
