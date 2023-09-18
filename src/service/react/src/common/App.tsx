import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import logo from "./logo.svg";
import PreviewPage from 'page/PreviewPage';
import LoginPage from 'page/LoginPage';
import RegisterPage from 'page/RegisterPage';
import AuditPage from 'page/AuditPage';
import CalenderPage from 'page/CalenderPage';
import PToolBar from 'components/PToolBar';
import { ToastContainer } from 'react-toastify';

function App() {
	return (
		<div>
			<ToastContainer />
			<PToolBar />
			<Routes>
				<Route path="/" element={<PreviewPage />} />
				<Route path="/auth/login" element={<LoginPage />} />
				<Route path="/auth/register" element={<RegisterPage />} />
				<Route path="/main/calender" element={<CalenderPage />} />
				<Route path="/main/audit" element={<AuditPage />} />
			</Routes>
		</div>
	);
}

export default App;
