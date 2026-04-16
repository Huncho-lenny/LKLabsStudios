import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const phrases = [
  "digital experiences",
  "creative interfaces",
  "brand identities",
  "web applications",
];

const HeroSection = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setPhraseIndex((i) => (i + 1) % phrases.length);
      }, 0);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, phraseIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/20 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-secondary/20 blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-sm font-mono uppercase tracking-[0.3em] text-muted-foreground mb-6">
            Creative Technology Studio
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold leading-tight mb-4">
            We build{" "}
            <span className="gradient-text">{displayed}</span>
            <span className="animate-pulse-glow text-primary">|</span>
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold leading-tight mb-8">
            that feel <span className="glow-text-primary text-primary">alive</span>
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground text-lg mb-12">
            We fuse code and creativity to craft immersive digital experiences
            that captivate, convert, and leave a lasting impression.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="#projects"
              className="px-8 py-3.5 rounded-full gradient-primary text-primary-foreground font-medium glow-primary hover:scale-105 transition-transform duration-200"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 rounded-full neon-border text-foreground font-medium hover:scale-105 transition-transform duration-200"
            >
              Start a Project
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-5 h-8 rounded-full border border-muted-foreground/30 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
