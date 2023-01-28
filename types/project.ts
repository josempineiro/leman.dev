import { CSSProperties } from "nuxt/dist/app/compat/capi";

export interface Project {
  id: string;
  title?: string;
  description: string;
  brandUrl?: string;
  logoUrl?: string;
  href: string;
  technologies?: string[];
  style?: CSSProperties;
  class?: string;
}
