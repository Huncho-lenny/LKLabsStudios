import { motion } from "framer-motion"
import { Search, PenTool, Code, Rocket } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface Step {
  icon: LucideIcon
  number: string
  title: string
  description: string
}

const steps: Step[] = [
  {
    icon: Search,
    number: "01",
    title: "Discovery",
    description: "We dive deep into understanding your business, goals, and target audience to create a solid foundation.",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Design",
    description: "Creating wireframes and visual designs that bring your vision to life while ensuring optimal user experience.",
  },
  {
    icon: Code,
    number: "03",
    title: "Development",
    description: "Building your product with clean, efficient code using the latest technologies and best practices.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch",
    description: "Deploying your product to the world with thorough testing, optimization, and ongoing support.",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="py-32 relative">
      <div className="absolute top-1/2 right-0 w-72 h-72 rounded-full bg-secondary/10 blur-[100px]" />

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono uppercase tracking-[0.3em] text-primary mb-3">How We Work</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            Our <span className="gradient-text">Process</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-card p-6 text-center group cursor-pointer relative"
            >
              {/* Step number */}
              <p className="text-xs font-mono text-primary/60 mb-4 tracking-widest">{step.number}</p>

              {/* Icon */}
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg gradient-primary flex items-center justify-center glow-primary group-hover:scale-110 transition-transform">
                <step.icon className="w-6 h-6 text-primary-foreground" />
              </div>

              <h3 className="font-display font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>

              {/* Connector arrow — desktop only */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 w-6 h-px bg-gradient-to-r from-border to-transparent z-10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessSection;
