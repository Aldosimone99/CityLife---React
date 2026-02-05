import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
        <p className="text-xs font-medium text-white/60">
          Interview-ready React project (Early–Mid level)
        </p>

        <h1 className="mt-3 text-3xl font-semibold tracking-tight">
          React Interview Starter
        </h1>

        <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70">
          A focused React project built to demonstrate real-world frontend skills
          for early–mid level interviews: routing architecture, typed domain models,
          list/detail flows, async data handling, and reusable UI patterns.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/jobs"
            className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/90"
          >
            View Jobs
          </Link>

          <a
            href="https://github.com/Aldosimone99/react-interview-starter"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-white/15 bg-white/[0.02] px-4 py-2 text-sm font-semibold text-white hover:bg-white/[0.06]"
          >
            View Source (GitHub)
          </a>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          { title: "Clean Routing Architecture", desc: "Layout, nested routes, and graceful 404 handling." },
          { title: "Typed Domain Model", desc: "Strongly typed Job entity shared across features." },
          { title: "Async Data Fetching", desc: "Loading, error, and success states via custom hooks." },
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