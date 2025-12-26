export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 lg:px-12">
      <div className="max-w-2xl mx-auto">
        <h2 className="flex items-center gap-4 text-2xl font-bold text-foreground mb-8">
          <span className="text-primary font-mono text-lg">01.</span>
          About Me
          <span className="flex-1 h-px bg-border ml-4" />
        </h2>

        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Hello! I'm Yordan Tabakov, a junior developer from Shumen, Bulgaria, also known as P4radis3.
          </p>
          <p>
              I build things for the web with a strong focus on clean structure, usability, and accessibility. My journey started with simple HTML and CSS experiments, which quickly turned into a deeper interest in how the web works end to end.
          </p>
          <p>
              Today, I work across both frontend and backend. I’m currently developing an e-commerce platform using Next.js and Supabase, while expanding my skill set in DevOps at Software University.
          </p>
        </div>
      </div>
    </section>
  )
}
