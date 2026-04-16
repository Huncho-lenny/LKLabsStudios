import { motion } from "framer-motion";
import projectNova from "@/assets/project-nova.jpg";
import projectAether from "@/assets/project-aether.jpg";
import projectPulse from "@/assets/project-pulse.jpg";
import projectCipher from "@/assets/project-cipher.jpg";

const projects = [
  {
    title: "Nova Dashboard",
    description: "Real-time analytics platform with immersive data visualizations",
    tech: ["React", "Three.js", "D3"],
    image: projectNova,
  },
  {
    title: "Aether Commerce",
    description: "Next-gen e-commerce experience with AR product previews",
    tech: ["Next.js", "Stripe", "WebGL"],
    image: projectAether,
  },
  {
    title: "Pulse Social",
    description: "Community platform with real-time messaging and content creation",
    tech: ["React", "WebSocket", "PostgreSQL"],
    image: projectPulse,
  },
  {
    title: "Cipher Security",
    description: "Cybersecurity dashboard with threat detection and monitoring",
    tech: ["TypeScript", "Node.js", "Redis"],
    image: projectCipher,
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
            className="group glass-card overflow-hidden cursor-pointer"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                decoding="async"
                width={800}
                height={512}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-display font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex gap-2 flex-wrap">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs font-mono px-3 py-1 rounded-full bg-muted/50 text-muted-foreground">
                    {t}
                  </span>
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
