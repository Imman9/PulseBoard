import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

const SignUp = ({ onSuccess }: { onSuccess?: () => void }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password && firstName && lastName) {
      console.log("User created:", email);
      login();
      onSuccess?.();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-200 flex flex-col justify-center items-center">
      <div className="text-3xl font-bold text-green-700 mb-6">PulseBoard</div>
      <div className="w-full max-w-sm p-8 bg-white shadow-2xl rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Create a new account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition duration-200"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-green-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
