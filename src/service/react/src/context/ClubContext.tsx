import React, {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useContext,
	useEffect,
	useState,
} from 'react';
import { AuthContext } from './AuthContext';
import { Types } from 'mongoose';
import axios from 'axios';

export type Club = {
	_id: Types.ObjectId;
	name: string;
	description: string | undefined;
	rules: string | undefined;
	tags: string[];
	members: Types.ObjectId[];
	schedules: Types.ObjectId[];
	audits: Types.ObjectId[];
	reviews: Types.ObjectId[];
};

export const ClubContext = createContext<{
	club: Club | null;
	setClub: Dispatch<SetStateAction<Club | null>>;
}>({
	club: null,
	setClub: () => {},
});

export const ClubProvider = (props: { children: ReactNode }) => {
	const { children } = props;
	const [club, setClub] = useState<Club | null>(null);
	const { me } = useContext(AuthContext);

	useEffect(() => {
		if (me) {
			if (me.clubs && 0 < me.clubs.length) {
				axios
					.get(`${process.env.REACT_APP_NESTJS_URL}/club/${me.clubs[0]}`, {
						withCredentials: true,
					})
					.then(response => {
						setClub({
							_id: response.data._id,
							name: response.data.name,
							description: response.data.description,
							rules: response.data.rules,
							tags: response.data.tags,
							members: response.data.members,
							schedules: response.data.schedules,
							audits: response.data.audits,
							reviews: response.data.reviews,
						});
					})
					.catch(() => {
						setClub(null);
					});
			} else {
				setClub(null);
			}
		} else {
			setClub(null);
		}
	}, [me]);

	return <ClubContext.Provider value={{ club, setClub }}>{children}</ClubContext.Provider>;
};
