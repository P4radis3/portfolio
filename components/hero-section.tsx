export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-12">
      <div className="max-w-2xl">
        <p className="text-primary font-mono text-sm mb-4">Hi, my name is</p>
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 text-balance">Yordan Tabakov.</h1>
        <h2 className="text-3xl md:text-5xl font-bold text-muted-foreground mb-6 text-balance">
          I build things for the web.
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
            I'm a junior developer focused on building accessible, user-centered websites and mobile applications. Right now, I'm developing my full-stack skills and working on projects that solve real, practical problems.
        </p>
      </div>
    </section>
  )
}
