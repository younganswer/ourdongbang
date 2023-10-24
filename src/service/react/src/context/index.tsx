import React, { ReactNode } from 'react';
import { AuthProvider } from './AuthContext';
import { ClubProvider } from './ClubContext';
import { MemberProvider } from './MemberContext';
import { AuditProvider } from './AuditContext';

const ContextProviders = ({ children }: { children: ReactNode }) => {
	return (
		<AuthProvider>
			<ClubProvider>
				<MemberProvider>
					<AuditProvider>{children}</AuditProvider>
				</MemberProvider>
			</ClubProvider>
		</AuthProvider>
	);
};

export default ContextProviders;
