import React, { useEffect, useState } from 'react';
import { SearchBoxBodyClubProfileStyle } from './index.style';
import { DownArrowIcon } from 'page/Audit/AuditDoc/icon';
import axios from 'axios';
import { Club } from 'context/ClubContext';
import { BookmarkIcon } from 'page/search/header/icon';

const Header = () => {
	return (
		<div>
			<span>최신순</span>
			<DownArrowIcon width={15} height={10} />
		</div>
	);
};

const ClubProfile = (props: { club: Club }) => {
	const { club } = props;

	return (
		<div>
			<div></div>
			<div>
				<div>
					<span>{club.name}</span>
					<BookmarkIcon width={14} height={21} marked={false} />
				</div>
				<span>{club.introduction}</span>
			</div>
		</div>
	);
};

const SearchBoxBodyClubProfile = () => {
	const [clubs, setClubs] = useState<Club[] | null>(null);

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_NESTJS_URL}/club`, { withCredentials: true })
			.then(response => {
				setClubs(response.data);
			})
			.catch(error => {
				console.log(error);
			});
	}, []);

	if (!clubs || clubs.length === 0) {
		return null;
	}

	return (
		<div className={SearchBoxBodyClubProfileStyle}>
			<Header />
			<div>
				{clubs?.map((club, index) => {
					return <ClubProfile key={index} club={club} />;
				})}
			</div>
		</div>
	);
};

export default SearchBoxBodyClubProfile;
