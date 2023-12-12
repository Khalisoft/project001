import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import { FiUser, FiPhone, FiEye, FiEyeOff, FiMail } from "react-icons/fi";

function App() {
	const [showPassword, setShowPassword] = useState(false);
	return (
		<>
			<div className="flex flex-col justify-center h-[100vh] w-full items-center gap-2 p-12">
				<Input placeholder="Name" label="Name" icon={<FiUser />} />
				<div className="flex w-full gap-2">
					<Input placeholder="Email" label="Email" icon={<FiMail  />} />
					<Input
						placeholder="Phone number"
						label="Phone"
						icon={<FiPhone />}
						success={true}
					/>
				</div>
				<Input
					placeholder="Password"
					label="Password"
					type={showPassword ? "password" : "text"}
					icon={
						showPassword ? (
							<FiEye onClick={() => setShowPassword(!showPassword)} />
						) : (
							<FiEyeOff onClick={() => setShowPassword(!showPassword)} />
						)
					}
					required
					danger={true}
				/>
			</div>
		</>
	);
}

export default App;
