import { ReactNode } from "react";

export default function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-gray-800 to-zinc-700">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/10">
          {children}
        </div>
      </div>
    </div>
  );
}
