import { ReactNode } from "react";

export default function UserLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex justify-center">
          <div className="w-full max-w-3xl bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/10">
            {children}
          </div>
        </div>

      </div>
    </div>
  );
}
