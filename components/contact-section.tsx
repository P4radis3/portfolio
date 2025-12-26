import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 lg:px-12">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-primary font-mono text-sm mb-4">04. What's Next?</p>
        <h2 className="text-4xl font-bold text-foreground mb-6">Get In Touch</h2>
        <p className="text-muted-foreground leading-relaxed mb-8">
          I'm currently looking for new opportunities and my inbox is always open. Whether you have a question or just
          want to say hi, I'll try my best to get back to you!
        </p>
        <Button asChild size="lg" className="bg-transparent border-2 border-primary text-primary hover:bg-primary/10">
          <a href="mailto:jordantabakov21@gmail.com">Say Hello</a>
        </Button>

        <footer className="mt-24 text-muted-foreground text-xs font-mono">
          <p className="mt-1">© {new Date().getFullYear()} Yordan Tabakov</p>
        </footer>
      </div>
    </section>
  )
}
