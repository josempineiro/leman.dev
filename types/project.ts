export interface Project {
  id: string;
  title: string;
  description: string;
  brandUrl: string;
  logoUrl: string;
  variant: "default" | "circular";
  href: string;
  technologies: string[];
}
