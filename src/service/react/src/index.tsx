import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'common/App';
import { CookiesProvider } from 'react-cookie';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from 'context/AuthContext';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const clientId: string = process.env.REACT_APP_GOOGLE_CLIENT_ID || '';

root.render(
	<React.StrictMode>
		<CookiesProvider>
			<AuthProvider>
				<BrowserRouter>
					<GoogleOAuthProvider clientId={clientId}>
						<App />
					</GoogleOAuthProvider>
				</BrowserRouter>
			</AuthProvider>
		</CookiesProvider>
	</React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
