import { ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { projects } from "@/data/projects"

export function ProjectsSection() {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || ''
  return (
    <section id="projects" className="py-24 px-6 lg:px-12">
      <div className="max-w-3xl mx-auto">
        <h2 className="flex items-center gap-4 text-2xl font-bold text-foreground mb-12">
          <span className="text-primary font-mono text-lg">02.</span>
          Projects
          <span className="flex-1 h-px bg-border ml-4" />
        </h2>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <article key={project.title} className="group relative">
              <div className="grid md:grid-cols-12 gap-4 items-center">
                {/* Image */}
                <div className={`md:col-span-7 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative overflow-hidden rounded-lg"
                  >
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10" />
                    <img
                      src={`${base}${project.image || '/placeholder.svg'}`}
                      alt={project.title}
                      className="w-full aspect-video object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </a>
                </div>

                {/* Content */}
                <div className={`md:col-span-5 ${index % 2 === 1 ? "md:order-1 md:text-left" : "md:text-right"}`}>
                  <p className="text-primary font-mono text-sm mb-2">Featured Project</p>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      {project.title}
                    </a>
                  </h3>
                  <div className="bg-card p-5 rounded-lg shadow-lg mb-4 md:-mx-8 relative z-20">
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                  </div>
                  <ul className={`flex flex-wrap gap-2 mb-4 ${index % 2 === 1 ? "justify-start" : "md:justify-end"}`}>
                    {project.tech.map((tech) => (
                      <li key={tech}>
                        <Badge variant="secondary" className="text-xs font-mono">
                          {tech}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                  <div className={`flex items-center gap-4 ${index % 2 === 1 ? "justify-start" : "md:justify-end"}`}>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
