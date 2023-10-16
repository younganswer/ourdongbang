import React, { useState } from 'react';
import { AddbuttonStyle } from './index.style';
import RegisterImage from './registerModal';

const Addbutton = (props: { setIsModalOpened: React.Dispatch<React.SetStateAction<boolean>> }) => {
	const { setIsModalOpened } = props;

	return (
		<div>
			<button
				className={AddbuttonStyle}
				onClick={() => {
					setIsModalOpened(true);
				}}
			>
				+
			</button>
		</div>
	);
};

const RegisterDoc = () => {
	const [isModalOpened, setIsModalOpened] = useState(false);

	return (
		<>
			<div>
				<Addbutton setIsModalOpened={setIsModalOpened}></Addbutton>
			</div>
			{isModalOpened ? <RegisterImage setIsModalOpened={setIsModalOpened} /> : null}
		</>
	);
};

export default RegisterDoc;
