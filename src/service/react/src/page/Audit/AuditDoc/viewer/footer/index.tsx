import React, { Dispatch, SetStateAction, useContext } from 'react';
import { AuthContext } from 'context/AuthContext';
import { MemberContext } from 'context/MemberContext';
import { ExportIcon } from 'page/Audit/AuditDoc/icon';
import { EditIcon } from 'page/my/profile/icon';
import { AuditDocumentViewerFooterStyle } from './index.style';
import ReactToPrint from 'react-to-print';
import { RefObject } from '@fullcalendar/core/preact';

const resizeBeforeGetContent = (content: HTMLElement | null) => {
	if (content) {
		content.style.width = '210mm';
		content.style.height = '288mm';
		content.style.display = 'grid';
		content.style.gridTemplateRows = '1fr 12fr';

		// set all child to leaf node fontsize plus 4px
		const setFontSize = (node: HTMLElement) => {
			if (node.children.length === 0) {
				const computedFontSize = window.getComputedStyle(node).fontSize;

				if (computedFontSize) {
					node.style.fontSize = `${parseInt(computedFontSize) + 4}px`;
				}
			} else {
				for (let i = 0; i < node.children.length; i++) {
					setFontSize(node.children[i] as HTMLElement);
				}
			}
		};
		setFontSize(content);
	}
};

const AuditDocumentViewerFooter = (props: {
	isEditting: boolean;
	setIsEditting: Dispatch<SetStateAction<boolean>>;
	printRef: RefObject<HTMLDivElement> | null;
}) => {
	const { isEditting, setIsEditting, printRef } = props;
	const { me } = useContext(AuthContext);
	const { members } = useContext(MemberContext);

	if (!me || !members) {
		return null;
	}

	return (
		<div className={AuditDocumentViewerFooterStyle}>
			{members.filter(member => member.userId === me._id)[0].role === 'manager' ? (
				<div
					onClick={() => {
						setIsEditting(!isEditting);
					}}
				>
					<span>{isEditting ? '수정완료' : '수정하기'}</span>
					<EditIcon width={16} height={16} />
				</div>
			) : null}
			<ReactToPrint
				pageStyle={`
					@page {
						size: 210mm 290mm;
						margin: 12mm 10mm;
					}
				`}
				onBeforeGetContent={() => {
					resizeBeforeGetContent((printRef?.current?.children[0] as HTMLElement) || null);
				}}
				trigger={() => (
					<div>
						<span>내보내기</span>
						<ExportIcon width={22} height={22} />
					</div>
				)}
				content={() => (printRef?.current?.children[0] as HTMLElement) || null}
			/>
		</div>
	);
};

export default AuditDocumentViewerFooter;
