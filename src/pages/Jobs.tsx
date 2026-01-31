import { Link } from "react-router-dom";
import { jobs } from "../features/jobs/data";

const levelBadge = (level?: string) => {
  switch (level) {
    case "junior":
      return "bg-emerald-500/15 text-emerald-200 ring-1 ring-emerald-500/20";
    case "mid":
      return "bg-sky-500/15 text-sky-200 ring-1 ring-sky-500/20";
    case "senior":
      return "bg-violet-500/15 text-violet-200 ring-1 ring-violet-500/20";
    default:
      return "bg-white/10 text-white/70 ring-1 ring-white/10";
  }
};

export default function Jobs() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Jobs</h2>
          <p className="mt-1 text-sm text-white/70">
            A typed list view with routing to detail pages.
          </p>
        </div>

        <div className="text-xs text-white/50">
          Total: <span className="text-white/80">{jobs.length}</span>
        </div>
      </div>

      <div className="grid gap-4">
        {jobs.map((job) => (
          <Link
            key={job.id}
            to={`/jobs/${job.id}`}
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:bg-white/[0.06]"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-1">
                <p className="text-sm font-semibold group-hover:text-white">
                  {job.title}
                </p>
                <p className="text-sm text-white/60">
                  {job.company ?? "Company"} • {job.location ?? "Location"}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span
                  className={[
                    "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium capitalize",
                    levelBadge(job.level),
                  ].join(" ")}
                >
                  {job.level ?? "level"}
                </span>

                <span className="text-xs text-white/40 group-hover:text-white/60">
                  View →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}