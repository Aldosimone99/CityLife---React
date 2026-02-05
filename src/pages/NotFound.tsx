import { Link, useLocation } from "react-router-dom";
import { Card, CardHeader, CardBody } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";

export default function NotFound() {
  const location = useLocation();

  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <div className="flex min-h-[55vh] items-center justify-center">
        <Card className="w-full max-w-xl">
          <CardHeader
            title="Page not found"
            subtitle="The page you’re trying to reach doesn’t exist or was moved."
            right={<Badge variant="warning">404</Badge>}
          />

          <CardBody>
            <div className="space-y-5">
              <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                <p className="text-xs font-semibold text-white/60">Requested path</p>
                <p className="mt-2 font-mono text-sm text-white/80">
                  {location.pathname}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  to="/"
                  className="rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-black hover:bg-white/90"
                >
                  Go to Home
                </Link>

                <Link
                  to="/jobs"
                  className="rounded-xl bg-white/5 px-4 py-2.5 text-sm font-semibold text-white/80 hover:bg-white/10"
                >
                  Browse Jobs
                </Link>
              </div>

              <p className="text-xs text-white/50">
                Graceful 404 handling with consistent layout and navigation.
              </p>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}