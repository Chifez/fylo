import React from "react";

const Signup = ({
	email,
	setEmail,
	password,
	setPassword,
	name,
	setName,
	handleSignUp,
	isLoading,
}) => {
	return (
		<form>
			<div className="my-2 flex flex-col">
				<label className="text-white" htmlFor="firstname">
					Firstname
				</label>
				<input
					className="border bg-transparent py-1 px-2"
					onChange={(e) => {
						setName(e.target.value);
					}}
					type="text"
					name="firstname"
					placeholder="firstname"
					required
				/>
			</div>

			<div className="my-2 flex flex-col">
				<label className="text-white" htmlFor="lastname">
					Lastname
				</label>
				<input
					className="border bg-transparent py-1 px-2"
					type="text"
					name="lastname"
					placeholder="lastname"
				/>
			</div>

			<div className="my-2 flex flex-col">
				<label className="text-white" htmlFor="gender" placeholder="gender">
					Gender
				</label>
				<select
					name="gender"
					id="gender"
					className="border bg-transparent text-white py-1"
				>
					<option value="" className="text-grey px-2">
						select a gender
					</option>
					<option value="gender">male</option>
					<option value="gender">female</option>
				</select>
			</div>

			<div className="my-2 flex flex-col">
				<label className="text-white" htmlFor="age">
					Age
				</label>
				<input
					className="border bg-transparent text-white py-1 px-2"
					type="date"
					name="age"
					placeholder="Age"
				/>
			</div>

			<div className="my-2 flex flex-col">
				<label className="text-white" htmlFor="email">
					Email
				</label>
				<input
					className="border bg-transparent py-1 px-2"
					value={email}
					type="email"
					name="email"
					placeholder="email"
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
			</div>

			<div className="my-2 flex flex-col">
				<label className="text-white" htmlFor="password">
					Password
				</label>
				<input
					className="border bg-transparent  py-1 px-2"
					type="password"
					value={password}
					placeholder="password"
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
				<img src="" alt="" />
			</div>
			<div className="text-center border-2 border-transparent px-16 bg-btn hover:bg-blue-600 hover:text-black">
				<button
					onClick={(e) => handleSignUp(e)}
					className="font-semibold text-white"
				>
					{isLoading ? "Loading..." : "Sign up"}
				</button>
			</div>
		</form>
	);
};
export default Signup;
