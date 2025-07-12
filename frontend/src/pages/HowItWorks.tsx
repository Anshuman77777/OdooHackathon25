import { motion } from "framer-motion";
import { Lightbulb, Recycle, Star, Users } from "lucide-react";

const steps = [
  {
    icon: <Recycle className="h-8 w-8 text-primary" />,
    title: "List Pre-loved Items",
    description: "Upload your gently used fashion pieces to share with the community. Earn points for every approved listing."
  },
  {
    icon: <Users className="h-8 w-8 text-accent" />,
    title: "Browse & Discover",
    description: "Explore unique styles from others. Use filters to find items that suit your taste, size, and mood."
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-yellow-500" />,
    title: "Swap with Points",
    description: "Redeem your points to claim pieces you love — all without spending money."
  },
  {
    icon: <Star className="h-8 w-8 text-purple-500" />,
    title: "Track Your Impact",
    description: "See how many items you’ve reused and how much waste you’ve helped reduce."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-background py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">How It Works</h1>
        <p className="text-muted-foreground text-lg">
          ReWear is your sustainable way to share, discover, and reuse fashion. Here's how it all fits together:
        </p>
      </div>

      <motion.div
        className="grid gap-10 md:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="bg-card shadow-soft p-6 rounded-2xl flex flex-col items-start text-left border border-border hover:shadow-glow transition-shadow"
          >
            <div className="mb-4">{step.icon}</div>
            <h2 className="text-xl font-semibold mb-2 text-foreground">{step.title}</h2>
            <p className="text-muted-foreground text-sm">{step.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
