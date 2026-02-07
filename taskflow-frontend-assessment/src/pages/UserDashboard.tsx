import { useEffect, useState } from "react";
import api from "../api/axios";
import LogoutButton from "../components/LogoutButton";

const statusStyles: Record<string, string> = {
  TODO: "bg-gray-500/20 text-gray-200",
  IN_PROGRESS: "bg-yellow-500/20 text-yellow-300",
  COMPLETED: "bg-green-500/20 text-green-300",
};

export default function UserDashboard() {
  const [tasks, setTasks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const loadTasks = async () => {
    const res = await api.get("/api/tasks/my");
    setTasks(res.data);
    setLoading(false);
  };

  const updateStatus = async (id: number, status: string) => {
    await api.put(`/api/tasks/${id}`, { status });
    loadTasks();
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">
          User Dashboard
        </h1>
        <LogoutButton />
      </div>

      {/* Assigned Tasks */}
      <h2 className="text-lg font-semibold text-white mb-4">
        Assigned Tasks
      </h2>

      {loading && (
        <p className="text-gray-300 text-center">
          Loading tasks…
        </p>
      )}

      {!loading && tasks.length === 0 && (
        <p className="text-gray-400 text-center">
          No tasks assigned to you
        </p>
      )}

      {!loading && tasks.length > 0 && (
        <div className="grid md:grid-cols-2 gap-4">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="bg-white/10 backdrop-blur-md p-5 rounded-lg border border-white/10 shadow-sm"
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold text-white">
                  {task.title}
                </h4>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyles[task.status]}`}
                >
                  {task.status.replace("_", " ")}
                </span>
              </div>

              <select
                className="mt-3 w-full bg-slate-800 text-white border border-white/30 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                value={task.status}
                onChange={(e) =>
                  updateStatus(task.id, e.target.value)
                }
              >
                <option value="TODO">To Do</option>
                <option value="IN_PROGRESS">In Progress</option>
                <option value="COMPLETED">Completed</option>
              </select>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
