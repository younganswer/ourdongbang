import React, { Dispatch, SetStateAction } from 'react';
import { Club } from 'context/ClubContext';
import { AuditFormHeaderMetaStyle, AuditFormHeaderStyle } from './index.style';
import { Audit } from 'context/AuditContext';

const Meta = (props: {
	club: Club;
	newAudit: Audit;
	setNewAudit: Dispatch<SetStateAction<Audit>>;
	isEditting: boolean;
}) => {
	const { club, newAudit, setNewAudit, isEditting } = props;

	return (
		<div className={AuditFormHeaderMetaStyle}>
			<div>
				<div>
					<span>동아리 명</span>
				</div>
				<div>
					<span>{club.name}</span>
				</div>
			</div>
			<div>
				<div>
					<span>작 성 자</span>
				</div>
				<div>
					{isEditting ? (
						<input
							type="text"
							value={newAudit.auditor}
							onChange={event => setNewAudit({ ...newAudit, auditor: event.target.value })}
						/>
					) : (
						<span>{newAudit.auditor}</span>
					)}
				</div>
			</div>
			<div>
				<div>
					<span>작성일자</span>
				</div>
				<div>
					<div>
						{isEditting ? (
							<input
								type="text"
								value={newAudit.date.split('-')[0]}
								onChange={event =>
									setNewAudit({
										...newAudit,
										date:
											event.target.value +
											'-' +
											newAudit.date.split('-')[1] +
											'-' +
											newAudit.date.split('-')[2],
									})
								}
							/>
						) : (
							<span>{newAudit.date.split('-')[0]}</span>
						)}
						<span>년</span>
					</div>
					<div>
						{isEditting ? (
							<input
								type="text"
								value={newAudit.date.split('-')[1]}
								onChange={event =>
									setNewAudit({
										...newAudit,
										date:
											newAudit.date.split('-')[0] +
											'-' +
											event.target.value +
											'-' +
											newAudit.date.split('-')[2],
									})
								}
							/>
						) : (
							<span>{newAudit.date.split('-')[1]}</span>
						)}
						<span>월</span>
					</div>
					<div>
						{isEditting ? (
							<input
								type="text"
								value={newAudit.date.split('-')[2]}
								onChange={event =>
									setNewAudit({
										...newAudit,
										date:
											newAudit.date.split('-')[0] +
											'-' +
											newAudit.date.split('-')[1] +
											'-' +
											event.target.value,
									})
								}
							/>
						) : (
							<span>{newAudit.date.split('-')[2]}</span>
						)}
						<span>일</span>
					</div>
				</div>
			</div>
		</div>
	);
};

const AuditFormHeader = (props: {
	index: number;
	club: Club;
	newAudit: Audit;
	setNewAudit: Dispatch<SetStateAction<Audit>>;
	isEditting: boolean;
}) => {
	const { index, club, newAudit, setNewAudit, isEditting } = props;

	return (
		<div className={AuditFormHeaderStyle}>
			<span>[ {index + 1} ]</span>
			<span>{`( ${club.name} )`} 회계 내역</span>
			<Meta club={club} newAudit={newAudit} setNewAudit={setNewAudit} isEditting={isEditting} />
		</div>
	);
};

export default AuditFormHeader;
