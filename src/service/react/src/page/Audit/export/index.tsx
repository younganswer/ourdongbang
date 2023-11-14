import React, { useContext } from 'react';
import AuditExportStyle from './index.style';
import { RefObject } from '@fullcalendar/core/preact';
import { ClubContext } from 'context/ClubContext';

const Title = (props: { clubName: string }) => {
	const { clubName } = props;

	return (
		<div>
			<span>( {clubName} ) 회계 장부</span>
		</div>
	);
};

const MetaData = (props: { clubName: string }) => {
	const { clubName } = props;
	const year = new Date().getFullYear();
	const month = new Date().getMonth() + 1;
	const date = new Date().getDate();

	return (
		<div>
			<div>
				<div>
					<span>동아리 명</span>
				</div>
				<div>
					<span>{clubName}</span>
				</div>
			</div>
			<div>
				<div>
					<span>책 임 자</span>
				</div>
				<div>
					<span>장시아</span>
				</div>
			</div>
			<div>
				<div>
					<span>작성일자</span>
				</div>
				<div>
					<span>
						{year}년 {month}월 {date}일
					</span>
				</div>
			</div>
		</div>
	);
};

const Header = () => {
	return (
		<div>
			<div>
				<div>
					<span>번호</span>
				</div>
				<div>
					<span>날 짜</span>
				</div>
				<div>
					<span>회 계 명</span>
				</div>
				<div>
					<span>상 호 명</span>
				</div>
				<div>
					<span>지 출</span>
				</div>
				<div>
					<span>수 입</span>
				</div>
				<div>
					<span>잔 액</span>
				</div>
			</div>
			<div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};

const AuditExport = (props: { divRef: RefObject<HTMLDivElement> }) => {
	const { divRef } = props;
	const { club } = useContext(ClubContext);

	return (
		<div ref={divRef} className={AuditExportStyle}>
			<div>
				<div></div>
				<Title clubName={club?.name || ''} />
				<MetaData clubName={club?.name || ''} />
			</div>
			<div>
				<Header />
			</div>
		</div>
	);
};

export default AuditExport;
