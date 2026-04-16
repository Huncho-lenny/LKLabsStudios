import { motion } from "framer-motion";
import { Code2, Palette, Globe, Sparkles } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "High-performance web applications built with modern frameworks and clean architecture.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Intuitive interfaces that delight users and drive engagement through thoughtful design.",
  },
  {
    icon: Globe,
    title: "Branding",
    description: "Distinctive brand identities that tell your story and set you apart in the digital space.",
  },
  {
    icon: Sparkles,
    title: "Creative Dev",
    description: "Interactive experiences, animations, and experimental interfaces that push boundaries.",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-32 relative">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-sm font-mono uppercase tracking-[0.3em] text-primary mb-3">What We Do</p>
        <h2 className="text-3xl md:text-5xl font-display font-bold">Services</h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="glass-card p-6 text-center group cursor-pointer"
          >
            <div className="w-12 h-12 mx-auto mb-4 rounded-lg gradient-primary flex items-center justify-center glow-primary group-hover:scale-110 transition-transform">
              <s.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-display font-semibold text-lg mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
