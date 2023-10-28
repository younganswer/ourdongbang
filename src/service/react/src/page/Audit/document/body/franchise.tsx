import React, { Dispatch, SetStateAction } from 'react';
import { AuditDocumentBodyFranchiseStyle } from './franchise.style';

const AuditDocumentBodyFranchise = (props: {
	franchise: string;
	setFranchise: Dispatch<SetStateAction<string>>;
	isEditting: boolean;
}) => {
	const { franchise, setFranchise, isEditting } = props;

	return (
		<div className={AuditDocumentBodyFranchiseStyle}>
			<div>
				<span>상호명</span>
			</div>
			<div>
				{isEditting ? (
					<input
						type="text"
						value={franchise}
						onChange={event => setFranchise(event.target.value)}
					/>
				) : (
					<span>{franchise}</span>
				)}
			</div>
		</div>
	);
};

export default AuditDocumentBodyFranchise;
