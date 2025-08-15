import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signup } from "../utils/Auth";
import Layout from "../Components/Layout";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password);
    alert("Signup successful! Please login.");
    navigate("/");
  };

  return (
    <Layout>
      <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white text-black rounded-xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6">Signup</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition">
          Signup
        </button>
         <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
      </form>
    </div>
    </Layout>
  );
}

export default Signup;
