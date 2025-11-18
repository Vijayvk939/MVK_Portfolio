import { motion } from "framer-motion";
import { Code2, Cpu, Zap, Terminal } from "lucide-react";
import { Card } from "@/components/ui/card";

const stats = [
  {
    icon: Code2,
    label: "Projects Completed",
    value: "6+",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Cpu,
    label: "Technologies Mastered",
    value: "15+",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Zap,
    label: "Years of Experience",
    value: "2+",
    color: "from-orange-500 to-yellow-500",
  },
  {
    icon: Terminal,
    label: "Lines of Code",
    value: "50K+",
    color: "from-green-500 to-emerald-500",
  },
];

const particlePositions = [
  { left: "5%", top: "10%" },
  { left: "15%", top: "25%" },
  { left: "8%", top: "60%" },
  { left: "25%", top: "80%" },
  { left: "35%", top: "15%" },
  { left: "42%", top: "45%" },
  { left: "38%", top: "75%" },
  { left: "55%", top: "20%" },
  { left: "62%", top: "55%" },
  { left: "58%", top: "85%" },
  { left: "75%", top: "12%" },
  { left: "82%", top: "35%" },
  { left: "78%", top: "70%" },
  { left: "92%", top: "25%" },
  { left: "88%", top: "60%" },
  { left: "12%", top: "40%" },
  { left: "28%", top: "50%" },
  { left: "68%", top: "40%" },
  { left: "45%", top: "65%" },
  { left: "52%", top: "30%" },
];

export function Dashboard() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background py-24">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 dark:opacity-10 motion-safe:animate-pulse-slow" />
      
      {/* Floating Particles - Pure CSS with better distribution */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {particlePositions.map((pos, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-cyan-400 dark:to-pink-400 rounded-full opacity-30 motion-safe:animate-pulse-slow motion-reduce:opacity-10"
            style={{
              left: pos.left,
              top: pos.top,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${3 + (i % 3)}s`,
            }}
          />
        ))}
      </div>

      {/* Code Snippets Floating - CSS Based */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {["</>", "{}", "[]", "();", "=>", "{}"].map((char, i) => (
          <div
            key={i}
            className="absolute font-mono text-4xl md:text-6xl font-bold text-muted-foreground/5 dark:text-muted-foreground/10 motion-safe:animate-float motion-reduce:animate-none"
            style={{
              left: `${10 + i * 15}%`,
              top: `${10 + (i % 3) * 30}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          >
            {char}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-pink-400 bg-clip-text text-transparent">
              Dashboard
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A snapshot of my journey as a developer
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              data-testid={`card-stat-${index}`}
            >
              <Card className="relative overflow-hidden backdrop-blur-md bg-card/50 border-card-border p-8 h-full group hover-elevate">
                {/* Gradient Glow Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  <div
                    className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${stat.color} mb-4`}
                  >
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>

                  <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                    {stat.value}
                  </div>

                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>

                {/* Animated Border */}
                <motion.div
                  className={`absolute inset-0 rounded-lg border-2 border-transparent bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20`}
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 2, ease: "linear" }}
                />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Geometric Shapes */}
        <div className="absolute top-1/4 right-10 w-32 h-32 border-4 border-blue-500/20 dark:border-cyan-400/20 rotate-45 rounded-lg" />
        <div className="absolute bottom-1/4 left-10 w-24 h-24 border-4 border-purple-500/20 dark:border-pink-400/20 rounded-full" />
      </div>

      <style>{`
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              hsl(var(--border)) 1px,
              transparent 1px
            ),
            linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </section>
  );
}
