import React, { Dispatch, SetStateAction, useContext, useEffect, useRef } from 'react';
import { ClubBtnStyle } from './index.style';
import { Club, ClubContext } from 'context/ClubContext';
import ClubBtnModal from './switch';
import { RefObject } from '@fullcalendar/core/preact';
import { AuthContext, Me } from 'context/AuthContext';

//const handleClick = () => {};

const slideModal = (divRef: RefObject<HTMLDivElement>, isClicked: boolean, me: Me | null) => {
	const height = (me?.clubs?.length || 0) * 70 + 70 + 'px';

	if (divRef.current) {
		const clubBtnSwitch = divRef.current.children[1] as HTMLDivElement;

		if (isClicked) {
			clubBtnSwitch.style.transitionProperty = 'width, opacity, height';
			clubBtnSwitch.style.transitionDelay = '0s, 0.225s, 0.4s';
			clubBtnSwitch.style.transitionDuration = '0.5s, 0.3s, 0.5s';
			clubBtnSwitch.style.transitionTimingFunction = 'ease-in-out';
			clubBtnSwitch.style.width = '250px';
			clubBtnSwitch.style.height = height;
			clubBtnSwitch.style.opacity = '1';
		} else {
			clubBtnSwitch.style.transitionProperty = 'height, width, opacity';
			clubBtnSwitch.style.transitionDelay = '0s, 0.3s, 0.35s';
			clubBtnSwitch.style.transitionDuration = '0.4s, 0.5s, 0.2s';
			clubBtnSwitch.style.transitionTimingFunction = 'ease-in-out';
			clubBtnSwitch.style.width = '0';
			clubBtnSwitch.style.height = '70px';
			clubBtnSwitch.style.opacity = '0';
		}
	}
};

const Profile = (props: { club: Club | null; setIsClicked: Dispatch<SetStateAction<boolean>> }) => {
	const { club, setIsClicked } = props;

	// set profile image at null
	return (
		<div
			onClick={() => {
				setIsClicked(true);
			}}
		>
			{/*{!club ? '+' : club.name}*/}
		</div>
	);
	console.log(club);
};

const ClubBtn = (props: {
	isClicked: boolean;
	setIsClicked: Dispatch<SetStateAction<boolean>>;
}) => {
	const { isClicked, setIsClicked } = props;
	const { me } = useContext(AuthContext);
	const { club, setClub } = useContext(ClubContext);
	const divRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		slideModal(divRef, isClicked, me);
	}, [isClicked]);

	return (
		<div className={ClubBtnStyle} ref={divRef}>
			<Profile club={club} setIsClicked={setIsClicked} />
			<ClubBtnModal
				me={me}
				club={club}
				setClub={setClub}
				isClicked={isClicked}
				setIsClicked={setIsClicked}
			/>
		</div>
	);
};

export default ClubBtn;
