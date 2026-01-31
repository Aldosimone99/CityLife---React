import { Link, useParams } from "react-router-dom";
import { jobs } from "../features/jobs/data";
import { formatLevel } from "../features/jobs/formatters";


export default function JobDetail() {
  const { id } = useParams();
  const jobId = Number(id);

  const job = jobs.find((job) => job.id === jobId);

  if (!job) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-10">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-xl font-semibold text-white">Job not found</h2>
          <p className="mt-2 text-sm text-white/60">
            The job you're looking for doesn't exist or was removed.
          </p>

          <Link
            to="/jobs"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20"
          >
            <span aria-hidden>←</span>
            Back to Jobs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <div className="mb-6">
        <Link
          to="/jobs"
          className="inline-flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white"
        >
          <span aria-hidden>←</span>
          Back to Jobs
        </Link>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              {job.title}
            </h2>
            <p className="mt-1 text-sm text-white/60">{job.company}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/70">
              {job.location}
            </span>
            <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/70">
              {formatLevel(job.level)}
            </span>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
            <p className="text-xs font-medium uppercase tracking-wide text-white/50">
              Company
            </p>
            <p className="mt-1 text-sm font-medium text-white">{job.company}</p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
            <p className="text-xs font-medium uppercase tracking-wide text-white/50">
              Location
            </p>
            <p className="mt-1 text-sm font-medium text-white">{job.location}</p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
            <p className="text-xs font-medium uppercase tracking-wide text-white/50">
              Level
            </p>
            <p className="mt-1 text-sm font-medium text-white">{formatLevel(job.level)}</p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
            <p className="text-xs font-medium uppercase tracking-wide text-white/50">
              Job ID
            </p>
            <p className="mt-1 text-sm font-medium text-white">#{job.id}</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Link
            to="/jobs"
            className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-white hover:bg-white/[0.06]"
          >
            Back
          </Link>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20"
            onClick={() => {
              // Placeholder action for later (e.g. save/apply)
              // eslint-disable-next-line no-alert
              alert("Next step: add Apply / Save action");
            }}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}