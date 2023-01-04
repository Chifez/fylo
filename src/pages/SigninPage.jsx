import React from "react";
import { useEffect } from "react";
import Signin from "../components/signIn";
import { Link, useNavigate } from "react-router-dom";

const SigninPage = ({
	email,
	user,
	setEmail,
	password,
	setPassword,
	googleSignIn,
	handleLogin,
	isLoading,
	error,
}) => {
	const navigate = useNavigate();
	useEffect(() => {
		if (user) navigate("/dashboard");
	}, []);

	return (
		<div
			id="signin"
			className="bg-light flex justify-center items-center h-screen text-center "
		>
			<div className="border-2 border-darkbg rounded-md p-10 ">
				<h2 className="text-white text-lg font-semibold capitalize">
					welcome, login
				</h2>
				<div>
					<Signin
						email={email}
						setEmail={setEmail}
						password={password}
						setPassword={setPassword}
						handleLogin={handleLogin}
						isLoading={isLoading}
						user={user}
					/>
					<p className="text-white font-semibold my-1">OR</p>
					<button
						className="border rounded-sm text-darkbg bg-slate-300 w-full p-1 capitalize font-semibold"
						onClick={googleSignIn}
					>
						{" "}
						<img src="" alt="" />
						<p>continue with google</p>
					</button>
					{/* {error && <p>{error}</p>} */}
					<p className="text-white">
						don't have an account?{" "}
						<Link className="text-[yellow]" to="/signup">
							sign up
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};
export default SigninPage;
