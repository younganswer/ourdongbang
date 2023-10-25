import React from 'react';
import { SearchPageBodyStyle } from './index.style';
import SearchBoxBodyTag from './tag';
import SearchBoxBodyClubProfile from './club-profile';

const SearchPageBody = () => {
	return (
		<div className={SearchPageBodyStyle}>
			<div>
				<SearchBoxBodyTag />
				<SearchBoxBodyClubProfile />
			</div>
		</div>
	);
};

export default SearchPageBody;
