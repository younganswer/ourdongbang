import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { Types } from 'mongoose';

export const AuthContext = createContext<{
	me: Me | null;
	setMe: React.Dispatch<React.SetStateAction<Me | null>>;
	setAccessTokenCookie: (jwtToken: string) => void;
}>({
	me: null,
	setMe: () => {},
	setAccessTokenCookie: () => {},
});

type Me = {
	name: string;
	id: string;
	password: string;
	email: string;
	major: string;
	studentId: string;
	profileImageId: Types.ObjectId | null;
	clubs: Types.ObjectId | null;
};

interface AuthProviderProps
	extends React.PropsWithChildren<{
		children: React.ReactNode;
	}> {}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	const [cookies, setCookie, removeCookie] = useCookies(['access-token']);
	const [me, setMe] = useState<Me | null>(null);

	useEffect(() => {
		const jwt = cookies['access-token'];

		if (jwt) {
			axios
				.get(`${process.env.REACT_APP_NESTJS_URL}/user/me`, {
					withCredentials: true,
				})
				.then(result => {
					setMe({
						name: result.data.name,
						id: result.data.id,
						password: result.data.password,
						email: result.data.email,
						major: result.data.major,
						studentId: result.data.studentId,
						profileImageId: result.data.profileImageId || null,
						clubs: result.data.clubs || null,
					});
				})
				.catch(() => {
					removeCookie('access-token');
					setMe(null);
				});
		} else {
			setMe(null);
		}
	}, [cookies['access-token']]);

	const setAccessTokenCookie = (jwtToken: string) => {
		setCookie('access-token', jwtToken, { path: '/' });
	};

	return (
		<AuthContext.Provider value={{ me, setMe, setAccessTokenCookie }}>
			{children}
		</AuthContext.Provider>
	);
};
