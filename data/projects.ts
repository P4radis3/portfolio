export type Project = {
  title: string
  description: string
  tech: string[]
  live: string
  image: string
  github?: string
}

export const projects: Project[] = [
  {
    title: "Techgroup",
    description:
      "TechGroup is a production‑style store demonstrating user registration, a checkout experience, and a built from scratch admin CMS for product, order management, and analytics.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Radis", "Zod"],
    live: "http://svetlio.vercel.app/demo",
    image: "/techgroup.jpg",
  }
]
