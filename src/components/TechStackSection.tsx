import { motion } from "framer-motion";

const tools = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
];

const TechStackSection = () => (
  <section className="py-20 relative">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-sm font-mono uppercase tracking-[0.3em] text-primary mb-3">Built With</p>
        <h2 className="text-2xl md:text-3xl font-display font-bold">Tools of the Craft</h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-8 md:gap-12 max-w-3xl mx-auto">
        {tools.map((tool, i) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -4, scale: 1.1 }}
            className="flex flex-col items-center gap-2 group"
          >
            <div className="w-14 h-14 rounded-xl glass-card flex items-center justify-center p-3 group-hover:neon-border transition-all duration-300">
              <img
                src={tool.icon}
                alt={tool.name}
                className="w-8 h-8 brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity"
                loading="lazy"
                decoding="async"
              />
            </div>
            <span className="text-xs text-muted-foreground font-mono">{tool.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TechStackSection;
