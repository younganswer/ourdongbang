import React, { useState } from 'react';
import { AddbuttonStyle, AuditRegisterDocStyle } from './index.style';
import RegisterImage from './registerModal';
import { DownArrowIcon } from '../icon';

const Addbutton = (props: { setIsModalOpened: React.Dispatch<React.SetStateAction<boolean>> }) => {
	const { setIsModalOpened } = props;

	return (
		<div className={AddbuttonStyle}>
			<button
				onClick={() => {
					setIsModalOpened(true);
				}}
			>
				<div>
					<span>회계 내역 추가하기</span>
					<span>+</span>
				</div>
			</button>
		</div>
	);
};

const RegisterDoc = () => {
	const [isModalOpened, setIsModalOpened] = useState(false);

	return (
		<>
			<div className={AuditRegisterDocStyle}>
				<div>
					<span>날짜별</span>
					<DownArrowIcon width={22} height={12} />
				</div>
				<div>
					<Addbutton setIsModalOpened={setIsModalOpened}></Addbutton>
					<Addbutton setIsModalOpened={setIsModalOpened}></Addbutton>
					<Addbutton setIsModalOpened={setIsModalOpened}></Addbutton>
					<Addbutton setIsModalOpened={setIsModalOpened}></Addbutton>
					<Addbutton setIsModalOpened={setIsModalOpened}></Addbutton>
					<Addbutton setIsModalOpened={setIsModalOpened}></Addbutton>
					<Addbutton setIsModalOpened={setIsModalOpened}></Addbutton>
					<Addbutton setIsModalOpened={setIsModalOpened}></Addbutton>
					<Addbutton setIsModalOpened={setIsModalOpened}></Addbutton>
				</div>
			</div>
			{isModalOpened ? <RegisterImage setIsModalOpened={setIsModalOpened} /> : null}
		</>
	);
};

export default RegisterDoc;
