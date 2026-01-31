import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
        <p className="text-xs font-medium text-white/60">
          Interview-ready starter
        </p>

        <h1 className="mt-3 text-3xl font-semibold tracking-tight">
          React Interview Starter
        </h1>

        <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70">
          A small project that demonstrates real-world React skills: routing,
          typed domain models, list/detail views, and (next) data fetching,
          loading states, and reusable UI components.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/jobs"
            className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/90"
          >
            View Jobs
          </Link>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/15 bg-white/[0.02] px-4 py-2 text-sm font-semibold text-white hover:bg-white/[0.06]"
          >
            GitHub Repo
          </a>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          { title: "Clean Routing", desc: "Layout + nested routes + 404." },
          { title: "TypeScript Model", desc: "Typed Job entity shared across pages." },
          { title: "Next Step", desc: "API fetching with loading/error states." },
        ].map((card) => (
          <div
            key={card.title}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
          >
            <p className="text-sm font-semibold">{card.title}</p>
            <p className="mt-2 text-sm text-white/70">{card.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}