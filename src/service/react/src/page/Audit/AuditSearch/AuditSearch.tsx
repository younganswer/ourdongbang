import React, { ChangeEvent } from 'react';
import { AuditSearchStyle, SearchBoxStyle } from './AuditSearch.style';

type SearchBoxProps = {
	placeholder: string;
	handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox: React.FC<SearchBoxProps> = ({ placeholder, handleChange }) => (
	<input
		className={SearchBoxStyle}
		type="search"
		placeholder={placeholder}
		onChange={handleChange}
	/>
);

// setState를 하는 코드 필요, audit doc의 어떤 정보를 입력했을 때 검색이 될지 회의 필요

export const AuditSearch: React.FC = () => {
	return (
		<div className={AuditSearchStyle}>
			<h2>회계</h2>
			<SearchBox placeholder="검색" handleChange={e => console.log(e.target.value)} />
		</div>
	);
};
