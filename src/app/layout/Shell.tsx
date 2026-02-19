import type { ReactNode } from "react";
import Header from "../../shared/components/Header";

export default function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      <main className="mx-auto max-w-[1280px] px-6 py-6">{children}</main>
    </div>
  );
}