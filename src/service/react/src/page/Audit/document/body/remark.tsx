import React, { Dispatch, SetStateAction } from 'react';
import { AuditDocumentBodyRemarkStyle } from './remark.style';

const AuditDocumentBodyRemark = (props: {
	remark: string;
	setRemark: Dispatch<SetStateAction<string>>;
	isEditting: boolean;
}) => {
	const { remark, setRemark, isEditting } = props;

	return (
		<div className={AuditDocumentBodyRemarkStyle}>
			<div>
				<span>비 고</span>
			</div>
			<div>
				{isEditting ? (
					<textarea value={remark} onChange={event => setRemark(event.target.value)} />
				) : (
					<span>{remark}</span>
				)}
			</div>
		</div>
	);
};

export default AuditDocumentBodyRemark;
