import { Github, Linkedin, Mail } from "lucide-react"
import type { ComponentType, SVGProps } from "react"

export type SocialLink = {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  href: string
  label: string
}

export const socialLinks: SocialLink[] = [
  { icon: Github, href: "https://github.com/P4radis3", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/yordan-tabakov-0434ab318/",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:jordantabakov21@gmail.com", label: "Email" },
]
