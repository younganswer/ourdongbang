import React, { Dispatch, SetStateAction, useContext, useRef } from 'react';
import AuditRegisterButton from './register/button';
import AuditPageBodyStyle from './index.style';
import { DownArrowIcon, ExportIcon } from './icon';
import AuditDocumentPreview from './preview';
import { Audit, AuditContext } from 'context/AuditContext';
import { Club } from 'context/ClubContext';
import ReactToPrint from 'react-to-print';
import AuditExport from '../export';

const Header = () => {
	const printRef = useRef<HTMLDivElement>(null);

	return (
		<div>
			<span>회계 문서</span>
			<div>
				<span>|</span>
				<ReactToPrint
					pageStyle={`
						@page {
							size: 210mm 290mm;
							margin: 12mm 10mm;
						}
						@media print {
							body {
								-webkit-print-color-adjust: exact;
							}
						}
					`}
					onBeforeGetContent={() => {
						if (printRef.current) {
							printRef.current.style.display = 'block';
						}
					}}
					trigger={() => (
						<div>
							<span>회계 장부 내보내기</span>
							<ExportIcon width={24} height={24} />
						</div>
					)}
					content={() => (printRef.current as HTMLDivElement) || null}
				/>
			</div>
			<div>
				<AuditExport divRef={printRef} />
			</div>
		</div>
	);
};

const Body = (props: {
	audits: Audit[] | null;
	setAudits: Dispatch<SetStateAction<Audit[] | null>>;
}) => {
	const { audits, setAudits } = props;

	return (
		<div>
			<div>
				<span>날짜별</span>
				<DownArrowIcon
					width={22}
					height={12}
					onClick={() => {
						alert('업데이트 예정입니다!');
					}}
				/>
			</div>
			<div>
				<div>
					<AuditRegisterButton />
					{audits?.map((audit, index) => {
						return (
							<AuditDocumentPreview
								key={index}
								index={index}
								audit={audit}
								audits={audits}
								setAudits={setAudits}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
	console.log(audits, setAudits);
};

const AuditPageBody = (props: { club: Club }) => {
	const { club } = props;
	const { audits, setAudits } = useContext(AuditContext);

	return (
		<div className={AuditPageBodyStyle}>
			<Header />
			<Body audits={audits} setAudits={setAudits} />
		</div>
	);
	console.log(club);
};

export default AuditPageBody;
