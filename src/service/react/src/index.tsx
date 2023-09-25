import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'common/App';
// import reportWebVitals from "./reportWebVitals";
import { CookiesProvider } from 'react-cookie';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from 'context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<CookiesProvider>
			<AuthProvider>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</AuthProvider>
		</CookiesProvider>
	</React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
