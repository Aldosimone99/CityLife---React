import { NavLink, Outlet } from "react-router-dom";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    "rounded-md px-3 py-2 text-sm font-medium transition",
    isActive
      ? "bg-white/10 text-white"
      : "text-white/70 hover:text-white hover:bg-white/5",
  ].join(" ");

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-white">
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B0F19]/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-white/10 ring-1 ring-white/10">
              <span className="text-sm font-semibold">RI</span>
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold">React Interview Starter</p>
              <p className="text-xs text-white/60">Job Tracker Lite</p>
            </div>
          </div>

          <nav className="flex items-center gap-2">
            <NavLink to="/" className={navLinkClass} end>
              Home
            </NavLink>
            <NavLink to="/jobs" className={navLinkClass}>
              Jobs
            </NavLink>
          </nav>
        </div>
      </header>

      {/* Page container */}
      <main className="mx-auto w-full max-w-5xl px-4 py-10">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto w-full max-w-5xl px-4 text-xs text-white/50">
          Built with React + TypeScript + Tailwind
        </div>
      </footer>
    </div>
  );
}