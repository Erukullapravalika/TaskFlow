import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      setLoading(true);
      const res = await api.post("/api/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);

      if (res.data.role === "ADMIN") navigate("/admin");
      else if (res.data.role === "MANAGER") navigate("/manager");
      else navigate("/user");
    } catch (err: any) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 px-4">
      <div className="w-full max-w-md text-center">

        {/* Brand Section */}
        <div className="mb-10 animate-fade-in">
          <h1 className="text-5xl font-extrabold text-white tracking-wide drop-shadow-lg">
            TaskFlow
          </h1>
          <p className="mt-3 text-sm text-indigo-200 tracking-wider">
            Task Management System
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-xl border border-white/10">
          <h2 className="text-lg font-semibold text-white mb-6">
            Login to your account
          </h2>

          {error && (
            <p className="mb-4 text-sm text-red-400">
              {error}
            </p>
          )}

          <form onSubmit={handleLogin} className="space-y-4 text-left">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded-md bg-slate-800 text-white border border-white/20 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 rounded-md bg-slate-800 text-white border border-white/20 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 transition text-white py-2 rounded-md font-semibold disabled:opacity-60"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
