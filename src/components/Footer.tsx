import { motion } from "framer-motion";
import { Code2, Globe, Mail } from "lucide-react";

const navLinks = [
  { id: "projects", label: "Work" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "pricing", label: "Pricing" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

const socials = [
  { icon: Globe, href: "https://github.com/Huncho-lenny", label: "GitHub" },
  { icon: Globe, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:lennykimanthi1@gmail.com", label: "Email" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative py-16 px-6 border-t border-border">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-primary/5 blur-[80px] pointer-events-none" />

      <div className="container mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center glow-primary">
                <Code2 className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display font-semibold text-xl">LKLabs Studios</span>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Crafting premium digital experiences where code meets creativity.
              We transform ideas into immersive web realities.
              <br />
              Building brands, designing experiences, and crafting digital solutions.
              <br />
              We are a team of developers, designers, and marketers who are passionate about creating beautiful and functional websites and applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="glass-card p-3 hover:border-primary/40 hover:glow-primary transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground font-mono">
            © {currentYear} LKLabs Studios. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <button className="hover:text-primary transition-colors">Privacy Policy</button>
            <button className="hover:text-primary transition-colors">Terms of Service</button>
          </div>
        </div>

        {/* Decorative watermark */}
        <motion.div
          className="absolute -top-10 right-0 font-mono text-6xl text-primary/5 pointer-events-none select-none"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {"</>"}
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
