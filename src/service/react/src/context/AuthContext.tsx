import React, { createContext, useState, useEffect } from 'react';
import { Types } from 'mongoose';
import axios from 'axios';

export const AuthContext = createContext<{
	me: Me | null;
	setMe: React.Dispatch<React.SetStateAction<Me | null>>;
}>({
	me: null,
	setMe: () => {},
});

export type Me = {
	name: string;
	id: string;
	password: string;
	email: string;
	major: string;
	studentId: string;
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
					setMe(null);
				});
		}
	}, []);

	return <AuthContext.Provider value={{ me, setMe }}>{children}</AuthContext.Provider>;
};
