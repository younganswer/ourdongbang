import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import logo from "./logo.svg";
import PreviewPage from 'page/PreviewPage';
import LoginPage from 'page/LoginPage';
import PToolBar from 'components/PToolBar';
import { ToastContainer } from 'react-toastify';
import RegisterPage from 'page/RegisterPage';

function App() {
	return (
		<div>
			<ToastContainer />
			<PToolBar />
			<Routes>
				<Route path="/" element={<PreviewPage />} />
				<Route path="/auth/login" element={<LoginPage />} />
				<Route path="/auth/register" element={<RegisterPage />} />
			</Routes>
		</div>
	);
}

export default App;
