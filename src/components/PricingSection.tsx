import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useState } from "react";

const categories = [
  { id: "web", label: "Websites" },
  { id: "social", label: "Social Media" },
  { id: "ads", label: "Advertising" },
  { id: "retainer", label: "Monthly Plans" },
];

const plans: Record<string, Array<{
  name: string;
  subtitle: string;
  features: string[];
  highlighted?: boolean;
}>> = {
  web: [
    {
      name: "Portfolio",
      subtitle: "Creatives & freelancers",
      features: ["1–3 pages", "Mobile responsive", "Contact section", "Deployed & live"],
    },
    {
      name: "Business",
      subtitle: "Growing businesses",
      features: ["4–5 pages", "Polished UI design", "Animations", "Mobile optimized"],
      highlighted: true,
    },
    {
      name: "Brand",
      subtitle: "Full brand presence",
      features: ["Custom UI design", "Product showcase", "Contact/inquiry system", "Fully responsive"],
    },
  ],
  social: [
    {
      name: "Starter",
      subtitle: "Quick promos",
      features: ["1 poster design", "1 revision", "PNG/JPG export"],
    },
    {
      name: "Growth",
      subtitle: "Brand launches",
      features: ["3 social media posters", "Instagram-optimized sizes", "Brand color consistency", "3 revisions"],
      highlighted: true,
    },
    {
      name: "Brand Promo",
      subtitle: "Product drops",
      features: ["5 social media posts", "1 story design", "1 promo banner", "4 revisions"],
    },
  ],
  ads: [
    {
      name: "Social Ads",
      subtitle: "Facebook & Instagram",
      features: ["3 ad creatives", "Feed + story sizes", "CTA-optimized layouts", "2 revisions"],
    },
    {
      name: "Print Flyers",
      subtitle: "Events & promos",
      features: ["A4/A5 flyer design", "Print-ready file (300dpi)", "Digital version included", "2 revisions"],
      highlighted: true,
    },
    {
      name: "WhatsApp Marketing",
      subtitle: "Broadcast-ready visuals",
      features: ["3 WhatsApp-sized graphics", "Promo text layout", "PNG export", "1 revision"],
    },
  ],
  retainer: [
    {
      name: "Weekly Basic",
      subtitle: "Small brands staying active",
      features: ["2 posts per week", "1 story design", "Quick edits"],
    },
    {
      name: "Monthly",
      subtitle: "Consistent content every month",
      features: ["8 posts/month", "4 story designs", "2 ad creatives", "Quick edits included", "Priority turnaround"],
      highlighted: true,
    },
    {
      name: "Weekly Pro",
      subtitle: "Active brands needing more",
      features: ["4 posts per week", "2 story designs", "1 ad creative", "Priority delivery"],
    },
  ],
};

const PricingSection = () => {
  const [active, setActive] = useState("web");

  return (
    <section id="pricing" className="py-32 relative">
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-primary/10 blur-[120px]" />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm font-mono uppercase tracking-[0.3em] text-primary mb-3">Packages</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">What's included</h2>
          <p className="text-muted-foreground mb-8">Pricing is tailored to your project — reach out and let's talk</p>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  active === cat.id
                    ? "gradient-primary text-primary-foreground glow-primary"
                    : "glass-card text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans[active].map((plan, i) => (
            <motion.div
              key={`${active}-${plan.name}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className={`glass-card p-8 relative ${plan.highlighted ? "neon-border" : ""}`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-mono rounded-full gradient-primary text-primary-foreground">
                  Popular
                </div>
              )}
              <h3 className="font-display text-lg font-semibold mb-1">{plan.name}</h3>
              <p className="text-xs text-muted-foreground mb-6">{plan.subtitle}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-accent shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block text-center py-3 rounded-lg font-medium transition-all duration-200 ${
                  plan.highlighted
                    ? "gradient-primary text-primary-foreground glow-primary hover:opacity-90"
                    : "border border-border hover:border-primary/50 text-foreground"
                }`}
              >
                Request a Quote
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
