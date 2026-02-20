import type { ReactNode } from "react";
import Header from "../../shared/components/Header";

type Props = {
  children: ReactNode;
  citySlug: string;
  onCityChange: (slug: string) => void;
};

export default function Shell({ children, citySlug, onCityChange }: Props) {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header citySlug={citySlug} onCityChange={onCityChange} />
      <main className="mx-auto max-w-[1280px] px-6 py-6">{children}</main>
    </div>
  );
}