import React, { createContext, useState, useEffect } from 'react';
import { Types } from 'mongoose';
import axios from 'axios';
import { removeCookie, setCookie } from 'component/cookie';

export const AuthContext = createContext<{
	me: Me | null;
	setMe: React.Dispatch<React.SetStateAction<Me | null>>;
}>({
	me: null,
	setMe: () => {},
});

export type Me = {
	_id: Types.ObjectId;
	name: string;
	id: string;
	password: string;
	email: string;
	major: string | undefined;
	studentId: string | undefined;
	phoneNumber: string | undefined;
	sns: string | undefined;
	profileImageId: Types.ObjectId | null;
	clubs: Types.ObjectId[] | null;
};

interface AuthProviderProps
	extends React.PropsWithChildren<{
		children: React.ReactNode;
	}> {}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	const [me, setMe] = useState<Me | null>(null);

	useEffect(() => {
		if (!me) {
			axios
				.get(`${process.env.REACT_APP_NESTJS_URL}/user/me`, {
					withCredentials: true,
				})
				.then(response => {
					setMe(response.data);
					setCookie('userId', response.data._id, { path: '/' });
				})
				.catch(() => {
					setMe(null);
					removeCookie('userId', { path: '/' });
				});
		}
	}, []);

	return <AuthContext.Provider value={{ me, setMe }}>{children}</AuthContext.Provider>;
};
