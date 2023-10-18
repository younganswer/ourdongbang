import { Me } from 'context/AuthContext';
import React, { Dispatch, SetStateAction, useState } from 'react';
import {
	ProfileSettingBodyStyle,
	ProfileSettingHeaderStyle,
	ProfileSettingStyle,
} from './index.style';
import { SettingIcon } from '../icon';
import ProfileSettingAfterAuthorized from './after-authorized';
import ProfileSettingBeforeAuthorized from './before-authorized';

const Header = () => {
	return (
		<div className={ProfileSettingHeaderStyle}>
			<SettingIcon width={35} height={35} onClick={undefined} />
			<span>설정</span>
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
				<ProfileSettingAfterAuthorized me={me} setMe={setMe} setIsModalOpened={setIsModalOpened} />
			) : (
				<ProfileSettingBeforeAuthorized me={me} setAuthorized={setAuthorized} />
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
		<div className={ProfileSettingStyle}>
			<Header />
			<Body me={me} setMe={setMe} setIsModalOpened={setIsModalOpened} />
		</div>
	);
};

export default ProfileSetting;
