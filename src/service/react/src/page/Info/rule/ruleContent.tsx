import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RulePost from './rulePost';
import {
	InputContentStyle,
	InputTitleStyle,
	RuleContentButtonStyle,
	RuleContentContainer,
	RuleContentStyle,
} from './ruleContent.style';
import RuleType from 'common/App.Types';
import { Modal } from 'component/modal';

interface ModalContentProps {
	inputTitle: string;
	handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	inputContent: string;
	handleSubmit: () => void;
	closeModal: () => void;
}

const ModalContent: React.FC<ModalContentProps> = ({
	inputTitle,
	handleInputChange,
	inputContent,
	handleSubmit,
	closeModal,
}) => {
	useEffect(() => {
		document.body.style.cssText = `
		    position: fixed; 
		    top: -${window.scrollY}px;
		    overflow-y: scroll;
		    width: 100%;`;
		return () => {
			const scrollY = document.body.style.top;
			document.body.style.cssText = '';
			window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
		};
	}, []);

	return (
		<div>
			<div>
				<input
					className={InputTitleStyle}
					type="text"
					name="title"
					value={inputTitle}
					onChange={handleInputChange}
					placeholder="제목"
				/>
			</div>
			<div>
				<input
					className={InputContentStyle}
					type="text"
					name="content "
					value={inputContent}
					onChange={handleInputChange}
					placeholder="내용"
				/>
			</div>
			<div>
				<button onClick={handleSubmit}>생성하기</button>
				<button onClick={closeModal}>닫기</button>
			</div>
		</div>
	);
};

const RuleContent = () => {
	const [rules, setRules] = useState<RuleType[]>([]); // RuleType은 실제 룰 객체의 타입으로 대체해야 합니다.
	const [isModalOpened, setIsModalOpened] = useState<boolean>(false);
	const [inputTitle, setInputTitle] = useState('');
	const [inputContent, setInputContent] = useState('');
	const [clubId, setClubId] = useState('');

	const openModal = () => {
		setIsModalOpened(true); // 모달 열기
	};

	const closeModal = () => {
		setIsModalOpened(false); // 모달 닫기
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		if (name === 'title') {
			setInputTitle(value);
		} else if (name === 'content') {
			setInputContent(value);
		}
	};

	const handleSubmit = () => {
		// 생성할 데이터 객체를 준비합니다.
		const data = {
			title: inputTitle, // 제목
			content: inputContent, // 내용
		};
		// Axios를 사용하여 POST 요청을 보냅니다.
		axios.post(`${process.env.REACT_APP_NESTJS_URL}/club/${clubId}/rule`, data).then(() => {
			closeModal();
		});
	};

	useEffect(() => {
		// async 함수 내에서 비동기 요청을 수행
		const fetchData = async () => {
			try {
				// Axios를 사용하여 몽고디비에서 데이터 가져오기
				const responseClub = await axios.get(`${process.env.REACT_APP_NESTJS_URL}/club`); // 적절한 엔드포인트 및 요청 설정을 사용

				// 가져온 데이터에서 룰 정보 추출
				setClubId(responseClub.data[0]._id);

				const responseRules = await axios.get(
					`${process.env.REACT_APP_NESTJS_URL}/club/${responseClub.data[0]._id}/rule`,
				);

				const fetchedRules = responseRules.data;

				// 상태(State)에 룰 정보 저장
				setRules(fetchedRules);
			} catch (error) {
				console.error('데이터를 가져오는 중 오류 발생:', error);
			}
		};

		// fetchData 함수를 호출하여 데이터 가져오기
		fetchData();
	}, []);

	return (
		<div className={RuleContentContainer}>
			<button className={RuleContentButtonStyle} onClick={openModal}>
				항목추가 +
			</button>{' '}
			{isModalOpened && (
				<Modal setIsModalOpened={setIsModalOpened}>
					<ModalContent
						inputTitle={inputTitle}
						handleInputChange={handleInputChange}
						inputContent={inputContent}
						handleSubmit={handleSubmit}
						closeModal={closeModal}
					/>
				</Modal>
			)}
			<div className={RuleContentStyle}>
				{rules.map((rule, index) => (
					<RulePost key={index} rule={rule} />
				))}
			</div>
		</div>
	);
};

export default RuleContent;
