import React, { Dispatch, SetStateAction } from 'react';
import { AuditDocumentBodyTitleStyle } from './title.style';

const AuditDocumentBodyTitle = (props: {
	title: string;
	setTitle: Dispatch<SetStateAction<string>>;
	isEditting: boolean;
}) => {
	const { title, setTitle, isEditting } = props;

	return (
		<div className={AuditDocumentBodyTitleStyle}>
			<div>
				<span>제 목</span>
			</div>
			<div>
				{isEditting ? (
					<input type="text" value={title} onChange={event => setTitle(event.target.value)} />
				) : (
					<span>{title}</span>
				)}
			</div>
		</div>
	);
};

export default AuditDocumentBodyTitle;
