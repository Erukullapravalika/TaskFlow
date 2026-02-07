import { useState } from "react";
import api from "../api/axios";
import LogoutButton from "../components/LogoutButton";

export default function AdminDashboard() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("USER");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    setIsError(false);

    if (!name || !email || !password) {
      setMessage("All fields are required");
      setIsError(true);
      return;
    }

    try {
      setLoading(true);
      await api.post("/api/auth/register", {
        name,
        email,
        password,
        role,
      });
      setMessage("User created successfully");
      setName("");
      setEmail("");
      setPassword("");
    } catch (err: any) {
      setMessage(err.response?.data?.message || "Error creating user");
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100 p-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Admin Dashboard
          </h1>
          <LogoutButton />
        </div>

        {/* Card */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Create User</h2>

          {message && (
            <p
              className={`mb-3 text-sm ${
                isError ? "text-red-600" : "text-green-600"
              }`}
            >
              {message}
            </p>
          )}

          <form onSubmit={handleCreateUser} className="space-y-3">
            <input
              className="border p-2 w-full rounded"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              className="border p-2 w-full rounded"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              className="border p-2 w-full rounded"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <select
              className="border p-2 w-full rounded"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="USER">User</option>
              <option value="MANAGER">Manager</option>
            </select>

            <button
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white w-full py-2 rounded transition"
            >
              {loading ? "Creating..." : "Create User"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
