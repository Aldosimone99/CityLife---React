export type Job = {
  id: number;
  title: string;
  company?: string;
  location?: string;
  level?: "junior" | "mid" | "senior";
  tags?: string[];
};