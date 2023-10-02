import React, { useEffect, useState } from 'react';
import { Me } from 'context/AuthContext';
import { EditProfileHeader } from './header';
import { EditProfileImage } from './image';
import axios from 'axios';
import { EditProfileStyle } from './index.style';
import { EditProfileInformation } from './information';
import { EditProfileButton } from './button';
import { toast } from 'react-toastify';

const handleSubmit = async (
	event: React.FormEvent<HTMLFormElement>,
	newMe: Partial<Me>,
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
				.post(`${process.env.REACT_APP_NESTJS_URL}/image/presigned`, {}, { withCredentials: true })
				.then(response => {
					return response.data.presignedUrl;
				})
				.catch(error => {
					console.error(error);
					throw new Error(error.response.data.message);
				});
			const formData = new FormData();

			for (const key in presignedData.fields) {
				formData.append(key, presignedData.fields[key]);
			}
			formData.append('Content-Type', file.type);
			formData.append('file', file);
			axios.post(presignedData.url, formData).catch(error => {
				throw new Error(error);
			});
			newMe.profileImageId = presignedData.fields.key;
		}
		await axios
			.patch(`${process.env.REACT_APP_NESTJS_URL}/user/me`, newMe, { withCredentials: true })
			.then(response => {
				setMe(response.data.me);
				toast.success(response.data.message);
			})
			.catch(error => {
				throw new Error(error.response.data.message);
			});
	} catch (error) {
		console.error(error);
	}
	setFile(null);
	setIsClicked(false);
	setIsModalOpened(false);
};

const EditProfile = (props: {
	me: Me;
	setMe: React.Dispatch<React.SetStateAction<Me | null>>;
	setIsModalOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const { me, setMe, setIsModalOpened } = props;
	const [file, setFile] = useState<null | File>(null);
	const [newMe, setNewMe] = useState<Partial<Me>>({
		name: me.name,
		studentId: me.studentId,
		email: me.email,
		profileImageId: me.profileImageId,
	});
	const [isClicked, setIsClicked] = useState<boolean>(false);

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
		<form
			className={EditProfileStyle}
			onSubmit={event => {
				handleSubmit(event, newMe, setMe, file, setFile, setIsClicked, setIsModalOpened);
			}}
			onClick={event => {
				event.stopPropagation();
			}}
		>
			<div>
				<EditProfileHeader setIsModalOpened={setIsModalOpened} />
				<div>
					<EditProfileImage file={file} setFile={setFile} newMe={newMe} />
					<EditProfileInformation newMe={newMe} setNewMe={setNewMe} />
				</div>
				<EditProfileButton isClicked={isClicked} />
			</div>
		</form>
	);
};

export default EditProfile;
