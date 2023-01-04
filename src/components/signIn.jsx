import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Signin = ({
	email,
	user,
	setEmail,
	password,
	setPassword,
	handleLogin,
	isLoading,
}) => {
	return (
		<>
			<form onSubmit={(e) => e.preventDefault()}>
				<div className="flex flex-col">
					<input
						className="my-5  px-3 py-1 bg-transparent border rounded-sm"
						type="text"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						className="mb-4 px-3 py-1 bg-transparent border rounded-sm"
						type="password"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<>
					<button
						onClick={handleLogin}
						className="border-2 border-transparent rounded-sm font-semibold px-24 bg-btn text-white hover:bg-blue-600 hover:text-black"
					>
						{isLoading ? "Loading..." : "Login"}
					</button>
					<Link to="/reset" className="flex items-start text-sm text-[gray]">
						<p>forgot password?</p>
					</Link>
				</>
			</form>
		</>
	);
};
export default Signin;
