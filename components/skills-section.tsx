import skills from "../data/skills"

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="flex items-center gap-4 text-2xl font-bold text-foreground mb-12">
          <span className="text-primary font-mono text-lg">03.</span>
          Skills
          <span className="flex-1 h-px bg-border ml-4" />
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-foreground font-semibold mb-4 flex items-center gap-2">
              <span className="text-primary">▹</span>
              Frontend
            </h3>
            <ul className="space-y-2">
              {skills.frontend?.map((skill) => (
                <li key={skill} className="text-muted-foreground font-mono text-sm">
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-foreground font-semibold mb-4 flex items-center gap-2">
              <span className="text-primary">▹</span>
              Backend
            </h3>
            <ul className="space-y-2">
              {skills.backend?.map((skill) => (
                <li key={skill} className="text-muted-foreground font-mono text-sm">
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-foreground font-semibold mb-4 flex items-center gap-2">
              <span className="text-primary">▹</span>
              Tools & Platforms
            </h3>
            <ul className="space-y-2 lg:columns-2">
              {skills.tools?.map((skill) => (
                <li key={skill} className="text-muted-foreground font-mono text-sm break-words">
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-foreground font-semibold mb-4 flex items-center gap-2">
              <span className="text-primary">▹</span>
              Currently Learning
            </h3>
            <ul className="space-y-2">
              {skills.learning?.map((skill) => (
                <li key={skill} className="text-muted-foreground font-mono text-sm">
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-foreground font-semibold mb-4 flex items-center gap-2">
              <span className="text-primary">▹</span>
              Core
            </h3>
            <ul className="space-y-2">
              {skills.core?.map((skill) => (
                <li key={skill} className="text-muted-foreground font-mono text-sm">
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-foreground font-semibold mb-4 flex items-center gap-2">
              <span className="text-primary">▹</span>
              Mobile
            </h3>
            <ul className="space-y-2">
              {skills.mobile?.map((skill) => (
                <li key={skill} className="text-muted-foreground font-mono text-sm">
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-foreground font-semibold mb-4 flex items-center gap-2">
              <span className="text-primary">▹</span>
              Databases
            </h3>
            <ul className="space-y-2">
              {skills.databases?.map((skill) => (
                <li key={skill} className="text-muted-foreground font-mono text-sm">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
