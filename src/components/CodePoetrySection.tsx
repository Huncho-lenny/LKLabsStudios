import { motion } from "framer-motion";

const codeLines = [
  { text: "const dream = async () => {", color: "text-secondary" },
  { text: '  const vision = await imagine("impossible");', color: "text-foreground" },
  { text: "  const design = craft(vision, passion);", color: "text-foreground" },
  { text: "  const code = transform(design, precision);", color: "text-foreground" },
  { text: "", color: "" },
  { text: "  return experience({", color: "text-accent" },
  { text: '    feel: "alive",', color: "text-primary" },
  { text: '    impact: "unforgettable",', color: "text-primary" },
  { text: "    beauty: Infinity,", color: "text-primary" },
  { text: "  });", color: "text-accent" },
  { text: "};", color: "text-secondary" },
];

const CodePoetrySection = () => (
  <section className="py-32 relative overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-mono uppercase tracking-[0.3em] text-primary mb-3">Philosophy</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Code is <span className="gradient-text">poetry</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Every function tells a story. Every component is a verse. We write code that
            doesn't just work — it sings. Our craft lives at the intersection of logic
            and emotion.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass-card p-6 font-mono text-sm leading-7"
        >
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border/50">
            <div className="w-3 h-3 rounded-full bg-destructive/60" />
            <div className="w-3 h-3 rounded-full bg-accent/60" />
            <div className="w-3 h-3 rounded-full bg-secondary/60" />
            <span className="ml-2 text-xs text-muted-foreground">dream.ts</span>
          </div>
          {codeLines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.08 }}
              className={line.color}
            >
              {line.text || "\u00A0"}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default CodePoetrySection;
