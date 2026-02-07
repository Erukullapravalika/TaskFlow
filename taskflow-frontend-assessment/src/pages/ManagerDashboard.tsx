import { useState } from "react";
import api from "../api/axios";
import LogoutButton from "../components/LogoutButton";

export default function ManagerDashboard() {
  const [projectName, setProjectName] = useState("");
  const [taskTitle, setTaskTitle] = useState("");
  const [assignedUserId, setAssignedUserId] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const createProject = async () => {
    setMessage("");
    setIsError(false);

    if (!projectName) {
      setMessage("Project name required");
      setIsError(true);
      return;
    }

    try {
      await api.post("/api/projects", { name: projectName });
      setProjectName("");
      setMessage("Project created successfully");
    } catch (err: any) {
      setMessage(err.response?.data?.message || "Failed to create project");
      setIsError(true);
    }
  };

  const createTask = async () => {
    setMessage("");
    setIsError(false);

    if (!taskTitle || !assignedUserId) {
      setMessage("All fields required");
      setIsError(true);
      return;
    }

    try {
      await api.post("/api/tasks", {
        title: taskTitle,
        assignedUserId,
      });
      setTaskTitle("");
      setAssignedUserId("");
      setMessage("Task assigned successfully");
    } catch (err: any) {
      setMessage(err.response?.data?.message || "Failed to assign task");
      setIsError(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-emerald-100 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Manager Dashboard
          </h1>
          <LogoutButton />
        </div>

        {/* Create Project */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-semibold text-lg mb-3">Create Project</h3>

          <input
            className="border p-2 w-full rounded mb-3"
            placeholder="Project Name"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />

          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
            onClick={createProject}
          >
            Create Project
          </button>
        </div>

        {/* Assign Task */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-semibold text-lg mb-3">Assign Task</h3>

          <input
            className="border p-2 w-full rounded mb-3"
            placeholder="Task Title"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
          />

          <input
            className="border p-2 w-full rounded mb-3"
            placeholder="Assigned User ID"
            value={assignedUserId}
            onChange={(e) => setAssignedUserId(e.target.value)}
          />

          <button
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition"
            onClick={createTask}
          >
            Assign Task
          </button>
        </div>

        {/* Message */}
        {message && (
          <p
            className={`text-sm ${
              isError ? "text-red-600" : "text-green-600"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
