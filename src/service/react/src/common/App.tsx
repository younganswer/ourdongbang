import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import logo from "./logo.svg";
import PreviewPage from 'page/PreviewPage';
import LoginPage from 'page/LoginPage';
import RegisterPage from 'page/RegisterPage';
import AuditPage from 'page/AuditPage';
import CalendarPage from 'page/CalendarPage';
import PToolBar from 'components/PToolBar';
// import MToolBar from 'components/MToolBar';
import { ToastContainer } from 'react-toastify';
import '../style/ToolBar.css';
function App() {
	return (
		<div>
			<ToastContainer />
			<PToolBar />
			{/* <MToolBar /> */}
			<Routes>
				<Route path="/" element={<PreviewPage />} />
				<Route path="/auth/login" element={<LoginPage />} />
				<Route path="/auth/register" element={<RegisterPage />} />
				<Route path="/main/calendar" element={<CalendarPage />} />
				<Route path="/main/audit" element={<AuditPage />} />
			</Routes>
		</div>
	);
}

export default App;
