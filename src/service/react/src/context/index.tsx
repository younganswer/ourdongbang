import React, { ReactNode } from 'react';
import { AuthProvider } from './AuthContext';
import { ClubProvider } from './ClubContext';
import { MemberProvider } from './MemberContext';

const ContextProviders = ({ children }: { children: ReactNode }) => {
	return (
		<AuthProvider>
			<ClubProvider>
				<MemberProvider>{children}</MemberProvider>
			</ClubProvider>
		</AuthProvider>
	);
};

export default ContextProviders;
