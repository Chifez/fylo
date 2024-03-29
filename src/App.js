import "./App.css";
import Home from "./pages/Home";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	signOut,
	signInWithPopup,
	onAuthStateChanged,
	updateProfile,
} from "firebase/auth";
import { auth } from "./fire.js";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import Dashboard from "./pages/dashboard";
import Reset from "./pages/Reset";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [user, setUser] = useState("");
	const [error, setError] = useState("");
	const [isLoading, setIsloading] = useState(false);

	const navigate = useNavigate();

	/************** check for authentication state change ***********/
	const handleAuth = () => {
		onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setName(user?.displayName);
		});
	};

	useEffect(() => {
		handleAuth();
		console.log(user);
	}, [user]);
	/*****************************/

	/************** handle login *************/
	const handleLogin = async () => {
		try {
			setIsloading(true);
			await signInWithEmailAndPassword(auth, email, password).then(
				(userCredential) => {
					const currentUser = userCredential.currentUser;
					setUser(currentUser);
					localStorage.setItem("isAuthenticated", "true");
					navigate("/dashboard");
					setPassword("");
					setEmail("");
					//use toastify to set a successful login
				}
			);
		} catch (error) {
			const errorMessage = error.message;
			alert(`${errorMessage}`);
			setError(errorMessage);
			// setError(errorCode && errorMessage);
		}
		setIsloading(false);
	};
	/*****************************/

	/********* Change userprofile ********/
	const changeProfile = async () => {
		try {
			await updateProfile(auth.currentUser, {
				displayName: name,
			}).then((res) => {});
		} catch (error) {
			const errorMessage = error.message;
			alert(`${errorMessage}`);
		}
	};
	/*****************************/

	/**************Handling signup***********/
	const handleSignUp = async (e) => {
		e.preventDefault();
		try {
			setIsloading(true);
			await createUserWithEmailAndPassword(auth, email, password);
			changeProfile();
			handleLogin();
			//  .then((userCredential)=>{
			//     const currentUser = userCredential.user;
			//     setUser(currentUser);
			//     setName(user?.displayName);
			//     localStorage.setItem("isAuthenticated",'true');
			//     navigate('/dashboard')
			//     // setPassword('')
			//     // setEmail('')
			//     //use toastify or an alert system to show succesful login
			//   })
		} catch (error) {
			const errorMessage = error.message;
			alert(`${errorMessage}`);
			// setError(errorCode && errorMessage);
		}
		setIsloading(false);
	};
	/*****************************/

	/**************Google signup***********/
	const googleSignIn = async () => {
		try {
			const provider = new GoogleAuthProvider();
			await signInWithPopup(auth, provider).then((result) => {
				navigate("/dashboard");
				const currentUser = result.currentUser;
				setUser(currentUser);
				//use toastify to set up a suceesful login
			});
		} catch (error) {
			const errorMessage = error.message;
			alert(`${errorMessage}`);
			// setError(errorMessage);
		}
	};
	/*****************************/

	/************** Logout ***********/
	const logOut = async () => {
		try {
			await signOut(auth).then(() => {
				navigate("/signin");
				localStorage.setItem("isAuthenticated", "false");
				setUser("");
				//probably set an alert to show the sign out was successful and also navigate out
			});
		} catch (error) {
			const errorMessage = error.message;
			alert(`${errorMessage}`);
			// setError(errorMessage);
		}
	};
	/*****************************/

	return (
		<Routes>
			<Route path="/" element={<Home />} />

			<Route
				path="signin"
				element={
					<SigninPage
						email={email}
						setEmail={setEmail}
						password={password}
						setPassword={setPassword}
						error={error}
						isLoading={isLoading}
						googleSignIn={googleSignIn}
						handleLogin={handleLogin}
					/>
				}
			/>

			<Route
				path="signup"
				element={
					<SignupPage
						email={email}
						setEmail={setEmail}
						password={password}
						setPassword={setPassword}
						name={name}
						setName={setName}
						handleSignUp={handleSignUp}
						isLoading={isLoading}
						error={error}
					/>
				}
			/>

			<Route
				path="dashboard/*"
				element={
					<ProtectedRoute>
						<Dashboard
							name={name}
							logOut={logOut}
							email={email}
							setEmail={setEmail}
							password={password}
							setPassword={setPassword}
							setName={setName}
							setError={setError}
							error={error}
							user={user}
							changeProfile={changeProfile}
							handleAuth={handleAuth}
						/>
					</ProtectedRoute>
				}
			/>

			<Route
				path="reset"
				element={
					<Reset
						email={email}
						setEmail={setEmail}
						error={error}
						setError={setError}
					/>
				}
			/>
		</Routes>
	);
}

export default App;
