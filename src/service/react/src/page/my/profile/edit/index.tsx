import React, { useEffect, useState } from 'react';
import { Me } from 'context/AuthContext';
import { EditProfileHeader } from './header';
import { EditProfileImage } from './image';
import axios from 'axios';
import { EditProfileStyle } from './index.style';
import { EditProfileInformation } from './information';
import { EditProfileButton } from './button';

const handleSubmit = async (
	event: React.FormEvent<HTMLFormElement>,
	setMe: React.Dispatch<React.SetStateAction<Me | null>>,
	file: null | File,
	setFile: React.Dispatch<React.SetStateAction<null | File>>,
	setIsClicked: React.Dispatch<React.SetStateAction<boolean>>,
	setIsModalOpened: React.Dispatch<React.SetStateAction<boolean>>,
) => {
	try {
		event.preventDefault();
		setIsClicked(true);
		if (file) {
			const presignedData = await axios
				.post(
					`${process.env.REACT_APP_NESTJS_URL}/image/presigned`,
					//{ contentTypes: file.type },
					{ withCredentials: true },
				)
				.catch(error => {
					throw new Error(error.response.data.message);
				});
			const formData = new FormData();

			for (const key in presignedData.data.presignedUrl.fields) {
				formData.append(key, presignedData.data.presignedUrl.fields[key]);
			}
			formData.append('Content-Type', file.type);
			formData.append('file', file);
			axios.post(presignedData.data.presignedUrl.url, formData).catch(error => {
				throw new Error(error.response.data.message);
			});
		}
	} catch (error) {
		console.error(error);
	}
	setFile(null);
	setIsClicked(false);
	setIsModalOpened(false);
};

export const EditProfile = (props: {
	me: Me;
	setMe: React.Dispatch<React.SetStateAction<Me | null>>;
	setIsModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const { me, setMe, setIsModalOpened } = props;
	const [file, setFile] = useState<null | File>(null);
	const [name, setName] = useState<string>(me.name);
	const [studentId, setStudentId] = useState<null | string>(me.studentId);
	const [isClicked, setIsClicked] = useState<boolean>(false);
	const profileImageId = me.profileImageId?.toString() || null;

	useEffect(() => {
		document.body.style.cssText = `
		    position: fixed; 
		    top: -${window.scrollY}px;
		    overflow-y: scroll;
		    width: 99.15%;`;
		return () => {
			const scrollY = document.body.style.top;
			document.body.style.cssText = '';
			window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
		};
	}, []);

	return (
		<form
			className={EditProfileStyle}
			onSubmit={event => {
				handleSubmit(event, setMe, file, setFile, setIsClicked, setIsModalOpened);
			}}
			onClick={event => {
				event.stopPropagation();
			}}
		>
			<div>
				<EditProfileHeader setIsModalOpened={setIsModalOpened} />
				<div>
					<EditProfileImage profileImageId={profileImageId} file={file} setFile={setFile} />
					<EditProfileInformation
						name={name}
						setName={setName}
						studentId={studentId}
						setStudentId={setStudentId}
						email={me.email}
					/>
				</div>
				<EditProfileButton isClicked={isClicked} />
			</div>
		</form>
	);
};
