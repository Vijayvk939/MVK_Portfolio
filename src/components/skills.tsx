import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Database,
  Server,
  Wrench,
  Palette,
  Shield,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Bootstrap",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    color: "from-green-500 to-emerald-500",
    skills: ["Node.js", "Express.js", "RESTful APIs", "WebSockets"],
  },
  {
    title: "Database",
    icon: Database,
    color: "from-purple-500 to-pink-500",
    skills: ["MySQL", "MongoDB", "Sequelize", "MySQL Workbench"],
  },
  {
    title: "Development Tools",
    icon: Wrench,
    color: "from-orange-500 to-yellow-500",
    skills: [
      "Git",
      "GitHub",
      "Visual Studio Code",
      "Postman",
      "AWS S3",
      "Nodemailer",
    ],
  },
  {
    title: "Creative Skills",
    icon: Palette,
    color: "from-pink-500 to-rose-500",
    skills: [
      "Adobe Photoshop",
      "Adobe Premiere Pro",
      "Adobe After Effects",
      "Adobe XD",
      "MS Office",
    ],
  },
  {
    title: "Additional Skills",
    icon: Shield,
    color: "from-indigo-500 to-violet-500",
    skills: ["Ethical Hacking (Intermediate)", "API Testing", "Version Control"],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 md:py-32 bg-muted/20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

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
              Technical Skills
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              data-testid={`skill-category-${index}`}
            >
              <Card className="p-6 h-full backdrop-blur-md bg-card/80 border-card-border hover-elevate group">
                <div className="mb-4">
                  <div
                    className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${category.color} mb-3`}
                  >
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="font-medium text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <Card className="p-8 backdrop-blur-md bg-card/80 border-card-border">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Professional Skills
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Communication",
                "Teamwork",
                "Time Management",
                "Quick Learner",
              ].map((skill, i) => (
                <div
                  key={i}
                  className="text-center p-4 rounded-lg bg-muted/50 hover-elevate"
                  data-testid={`soft-skill-${i}`}
                >
                  <p className="font-medium">{skill}</p>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
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
