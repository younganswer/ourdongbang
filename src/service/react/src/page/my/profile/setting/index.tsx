import { Me } from 'context/AuthContext';
import React, { Dispatch, SetStateAction, useState } from 'react';
import {
	ProfileSettingAfterAuthorizedStyle,
	ProfileSettingBeforeAuthorizedStyle,
	ProfileSettingBodyStyle,
	ProfileSettingHeaderStyle,
	ProfileSettingStyle,
} from './index.style';
import { SettingIcon } from '../icon';
import axios from 'axios';
import { toast } from 'react-toastify';

const Header = () => {
	return (
		<div className={ProfileSettingHeaderStyle}>
			<SettingIcon width={35} height={35} onClick={undefined} />
			<span>설정</span>
		</div>
	);
};

const BeforeAuthorized = (props: { me: Me; setAuthorized: Dispatch<SetStateAction<boolean>> }) => {
	const { me, setAuthorized } = props;
	const [password, setPassword] = useState<string | undefined>(undefined);
	const handleSubmit = (
		event: React.FormEvent<HTMLFormElement>,
		id: string,
		password: string | undefined,
		setPassword: Dispatch<SetStateAction<string | undefined>>,
	) => {
		event.preventDefault();
		axios
			.patch(
				`${process.env.REACT_APP_NESTJS_URL}/auth/login`,
				{ id, password },
				{ withCredentials: true },
			)
			.then(response => {
				if (response.status === 200) {
					setAuthorized(true);
				}
			})
			.catch(error => {
				console.error(error);
				alert('비밀번호가 일치하지 않습니다.');
				setPassword('');
			});
	};

	return (
		<div className={ProfileSettingBeforeAuthorizedStyle}>
			<span>비밀번호 확인</span>
			<span>본인 확인을 위해 비밀번호를 입력해주세요.</span>
			<form onSubmit={event => handleSubmit(event, me.id, password, setPassword)}>
				<input
					type="password"
					placeholder="비밀번호"
					value={password}
					onChange={event => setPassword(event.target.value)}
				/>
				<button type="submit">확인</button>
			</form>
		</div>
	);
};

const AfterAuthorized = (props: {
	me: Me;
	setMe: Dispatch<SetStateAction<Me | null>>;
	setIsModalOpened: Dispatch<SetStateAction<boolean>>;
}) => {
	const { me, setMe, setIsModalOpened } = props;
	const [currentPassword, setCurrentPassword] = useState<string | undefined>(undefined);
	const [newPassword, setNewPassword] = useState<string | undefined>(undefined);
	const [newPasswordCheck, setNewPasswordCheck] = useState<string | undefined>(undefined);
	const handleSubmit = (
		event: React.FormEvent<HTMLFormElement>,
		id: string,
		currentPassword: string | undefined,
		setCurrentPassword: Dispatch<SetStateAction<string | undefined>>,
		newPassword: string | undefined,
		setNewPassword: Dispatch<SetStateAction<string | undefined>>,
		newPasswordCheck: string | undefined,
		setNewPasswordCheck: Dispatch<SetStateAction<string | undefined>>,
		setIsModalOpened: Dispatch<SetStateAction<boolean>>,
	) => {
		event.preventDefault();
		if (newPassword !== newPasswordCheck) {
			alert('새 비밀번호와 새 비밀번호 확인이 일치하지 않습니다.');
			setCurrentPassword('');
			setNewPassword('');
			setNewPasswordCheck('');
			return;
		}
		if (currentPassword === newPassword) {
			alert('현재 비밀번호와 새 비밀번호가 일치합니다.');
			setCurrentPassword('');
			setNewPassword('');
			setNewPasswordCheck('');
			return;
		}
		axios
			.patch(
				`${process.env.REACT_APP_NESTJS_URL}/user/me/password`,
				{ password: currentPassword, newPassword },
				{ withCredentials: true },
			)
			.then(response => {
				console.log(response);
				setMe({
					...me,
					password: response.data.password,
				});
				toast.success('비밀번호가 변경되었습니다.');
				setIsModalOpened(false);
			})
			.catch(error => {
				console.error(error);
				alert('현재 비밀번호가 일치하지 않습니다.');
				setCurrentPassword('');
				setNewPassword('');
				setNewPasswordCheck('');
			});
	};

	return (
		<div className={ProfileSettingAfterAuthorizedStyle}>
			<form
				onSubmit={event =>
					handleSubmit(
						event,
						me.id,
						currentPassword,
						setCurrentPassword,
						newPassword,
						setNewPassword,
						newPasswordCheck,
						setNewPasswordCheck,
						setIsModalOpened,
					)
				}
			>
				<div>
					<span>아이디</span>
					<span>{me.id}</span>
				</div>
				<div>
					<span>현재 비밀번호</span>
					<input
						type="password"
						placeholder="현재 비밀번호"
						value={currentPassword}
						onChange={event => setCurrentPassword(event.target.value)}
					/>
				</div>
				<div>
					<span>새 비밀번호</span>
					<input
						type="password"
						placeholder="새 비밀번호"
						value={newPassword}
						onChange={event => setNewPassword(event.target.value)}
					/>
				</div>
				<div>
					<span>새 비밀번호 (확인)</span>
					<input
						type="password"
						placeholder="새 비밀번호 (확인)"
						value={newPasswordCheck}
						onChange={event => setNewPasswordCheck(event.target.value)}
					/>
				</div>
				<button type="submit">수정하기</button>
			</form>
		</div>
	);
};

const Body = (props: {
	me: Me;
	setMe: Dispatch<SetStateAction<Me | null>>;
	setIsModalOpened: Dispatch<SetStateAction<boolean>>;
}) => {
	const { me, setMe, setIsModalOpened } = props;
	const [authorized, setAuthorized] = useState(false);

	if (!me) {
		return null;
	}

	return (
		<div className={ProfileSettingBodyStyle}>
			{authorized ? (
				<AfterAuthorized me={me} setMe={setMe} setIsModalOpened={setIsModalOpened} />
			) : (
				<BeforeAuthorized me={me} setAuthorized={setAuthorized} />
			)}
		</div>
	);
};

const ProfileSetting = (props: {
	me: Me;
	setMe: Dispatch<SetStateAction<Me | null>>;
	setIsModalOpened: Dispatch<SetStateAction<boolean>>;
}) => {
	const { me, setMe, setIsModalOpened } = props;

	return (
		<div
			className={ProfileSettingStyle}
			onClick={event => {
				event.stopPropagation();
			}}
		>
			<Header />
			<Body me={me} setMe={setMe} setIsModalOpened={setIsModalOpened} />
		</div>
	);
};

export default ProfileSetting;
