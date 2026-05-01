import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import {
  siTelegram,
  siInstagram,
  siWhatsapp,
  siX,
  siGithub,
} from "simple-icons";

const navLinks = [
  { id: "projects", label: "Work" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "pricing", label: "Pricing" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

// LinkedIn path sourced directly (removed from simple-icons)
const linkedInPath = "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z";

const socials = [
  { path: siInstagram.path, href: "https://www.instagram.com/yb.l3nn/", label: "Instagram" },
  { path: siWhatsapp.path, href: "https://wa.me/254708860046", label: "WhatsApp" },
  { path: siTelegram.path, href: "https://web.telegram.org/k/", label: "Telegram" },
  { path: siX.path, href: "https://x.com/KimanthiLenny", label: "X" },
  { path: siGithub.path, href: "https://github.com/Huncho-lenny", label: "GitHub" },
  { path: linkedInPath, href: "https://www.linkedin.com/in/Huncho-lenny", label: "LinkedIn" },
];

const SocialIcon = ({ path }: { path: string }) => (
  <svg role="img" viewBox="0 0 24 24" className="w-4 h-4 fill-current">
    <path d={path} />
  </svg>
);

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
            <div className="flex flex-wrap gap-3">
              {socials.map(({ path, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="glass-card p-3 hover:border-primary/40 hover:glow-primary transition-all duration-300 group"
                >
                  <span className="text-muted-foreground group-hover:text-primary transition-colors">
                    <SocialIcon path={path} />
                  </span>
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
