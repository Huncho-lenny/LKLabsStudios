import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How long does a project take?",
    a: "Most websites take 2–4 weeks depending on scope. Social media packages are delivered within 3–5 business days. We'll give you a clear timeline before we start.",
  },
  {
    q: "Do you work with startups?",
    a: "Absolutely. We love working with early-stage brands. Our Starter and Portfolio packages are designed specifically for startups and solo founders.",
  },
  {
    q: "Do you offer maintenance?",
    a: "Yes — we offer monthly retainer plans that include ongoing updates, content creation, and priority support. Custom maintenance plans are also available.",
  },
  {
    q: "What do you need to start?",
    a: "A 50% deposit and a brief about your project — what you do, who it's for, and any design references. We handle the rest.",
  },
  {
    q: "Can I request custom work outside the packages?",
    a: "Of course. Our packages are starting points. Reach out via the contact form and we'll scope something tailored to your needs.",
  },
];

const FAQSection = () => (
  <section id="faq" className="py-32 relative">
    <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-accent/10 blur-[120px] -translate-y-1/2" />
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-sm font-mono uppercase tracking-[0.3em] text-primary mb-3">FAQ</p>
        <h2 className="text-3xl md:text-5xl font-display font-bold">Quick Answers</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="glass-card px-6 border-none"
            >
              <AccordionTrigger className="text-left font-display font-medium text-foreground hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQSection;
