import { motion } from "framer-motion";

const AboutSection = () => (
  <section id="about" className="py-32 relative">
    <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-accent/10 blur-[100px]" />
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-mono uppercase tracking-[0.3em] text-primary mb-3">About Us</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Where code meets <span className="gradient-text">creativity</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            LKLabs Studios is a creative technology studio that bridges the gap between
            engineering precision and artistic vision. We don't just build websites — we
            craft digital experiences that resonate.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Every line of code we write is intentional. Every pixel we place tells a story.
            We believe technology should feel human, beautiful, and alive.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-8 space-y-6"
        >
          {[
            { label: "Projects Delivered", value: "50+" },
            { label: "Years of Craft", value: "5+" },
            { label: "Happy Clients", value: "40+" },
            { label: "Lines of Poetry", value: "∞" },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center justify-between border-b border-border/50 pb-4 last:border-0 last:pb-0">
              <span className="text-muted-foreground">{stat.label}</span>
              <span className="text-2xl font-display font-bold gradient-text-primary">{stat.value}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
