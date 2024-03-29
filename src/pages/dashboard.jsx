import React, { useEffect, useState } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import { storage } from "../fire.js";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import Dashmain from "../components/dashmain";
import SideBar from "../components/SideBar";
import Settings from "./settings";
import Updatepassword from "../components/updatepassword";
import Changename from "../components/changename";
import Settingspages from "../components/settingsPages";

const Dashboard = ({
	name,
	setName,
	logOut,
	user,
	email,
	handleAuth,
	setEmail,
	password,
	setPassword,
	error,
	setError,
	changeProfile,
}) => {
	const [upload, setUpload] = useState(null);
	const [uploadList, setUploadList] = useState([]);
	const [uploadProgress, setUploadProgress] = useState(0);
	const [imgURL, setImgURL] = useState(null);

	const uploadFile = (e) => {
		e.preventDefault();
		setUpload(null);
		if (upload === null) return;
		else {
			// console.log(upload.name)
			// console.log(upload)
			const file = upload;
			// console.log(file.name)
			setUploadList([...uploadList, file]);
			// console.log(file)
			// any error that occurs would most likely be from here

			const storageRef = ref(storage, `files/${file.name}`);
			const uploadTask = uploadBytesResumable(storageRef, file);
			uploadTask.on(
				"state_changed",
				(snapshot) => {
					const progress = Math.round(
						(snapshot.bytesTransferred / snapshot.totalBytes) * 100
					);
					console.log(progress);
					setUploadProgress(progress);
				},
				(error) => {
					alert(error);
				},
				() => {
					getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
						setImgURL(downloadURL);
					});
				}
			);
		}

		// console.log([uploadList])
		// console.log([{...uploadList?.list}])
	};
	const navigate = useNavigate();

	// useEffect(() => {
	// 	uploadFile();
	// }, [upload]);

	useEffect(() => {
		if (user) {
			navigate("/dashboard");
		}
	}, [user]);

	return (
		<div className="h-screen md:grid grid-rows-5 grid-flow-row md:grid-flow-col md:grid-cols-5 md:w-screen">
			<Routes>
				<Route
					path="/"
					element={
						<SideBar
							name={name}
							logOut={logOut}
							changeProfile={changeProfile}
							handleAuth={handleAuth}
						/>
					}
				>
					<Route
						index
						element={
							<Dashmain
								upload={upload}
								setUpload={setUpload}
								uploadList={uploadList}
								setUploadList={setUploadList}
								uploadFile={uploadFile}
								uploadProgress={uploadProgress}
							/>
						}
					/>
					<Route path="/settings/*" element={<Settings />}>
						<Route index element={<Settingspages />} />

						<Route
							path="name"
							element={
								<Changename
									setName={setName}
									name={name}
									changeProfile={changeProfile}
								/>
							}
						/>

						<Route
							path="password"
							element={
								<Updatepassword
									email={email}
									setEmail={setEmail}
									password={password}
									setPassword={setPassword}
									error={error}
									setError={setError}
									changeProfile={changeProfile}
								/>
							}
						/>
					</Route>
				</Route>
			</Routes>
		</div>
	);
};

export default Dashboard;
