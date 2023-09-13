import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import logo from "./logo.svg";
import PreviewPage from 'page/PreviewPage';
import PToolBar from 'components/PToolBar';
import { ToastContainer } from 'react-toastify';

function App() {
	return (
		<div>
			<ToastContainer />
			<PToolBar />
			<Routes>
				<Route path="/" element={<PreviewPage />} />
			</Routes>
		</div>
	);
}

export default App;
