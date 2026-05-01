import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Cocktail Finder",
    description: "A sleek cocktail discovery app that lets users search and explore drinks by ingredient, name or category with a clean responsive UI.",
    tech: ["HTML", "CSS", "JavaScript"],
    status: null,
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&q=80&fit=crop",
  },
  {
    title: "Mealy",
    description: "Full-stack food ordering platform with menu browsing, cart management and order flow — built with Flask on the backend and React on the front.",
    tech: ["React", "Flask", "JavaScript", "Python"],
    status: null,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80&fit=crop",
  },
  {
    title: "Taste Town",
    description: "A restaurant discovery and food delivery web app with location-based filtering, dynamic menus and a smooth ordering experience.",
    tech: ["JavaScript", "React", "CSS"],
    status: null,
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80&fit=crop",
  },
  {
    title: "Social Vault",
    description: "A social media content management platform for scheduling, storing and analysing posts across multiple channels from one dashboard.",
    tech: ["React", "TypeScript", "Node.js"],
    status: "In Progress",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80&fit=crop",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-32 relative">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-sm font-mono uppercase tracking-[0.3em] text-primary mb-3">Selected Work</p>
        <h2 className="text-3xl md:text-5xl font-display font-bold">Projects that speak</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ scale: 1.02, y: -4 }}
            className="group glass-card overflow-hidden cursor-default"
          >
            {/* Project image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
              {project.status && (
                <span className="absolute top-3 right-3 text-xs font-mono px-3 py-1 rounded-full bg-accent/20 text-accent border border-accent/30 backdrop-blur-sm">
                  {project.status}
                </span>
              )}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-display font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>
              <div className="flex gap-2 flex-wrap">
                {project.tech.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
