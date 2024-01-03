export interface Project {
  id: string;
  title?: string;
  description: string;
  brandUrl?: string;
  logoUrl?: string;
  href: string;
  technologies?: string[];
  style: {
    text: string;
    color: string;
  }
  class?: string;
}
