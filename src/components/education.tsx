import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Technology",
    institution: "Amrita Sai Engineering College",
    duration: "2019 - 2023",
    gpa: "6.0 CGPA",
  },
  {
    degree: "Board of Intermediate Education",
    institution: "Narayana Junior College",
    duration: "2017 - 2019",
    gpa: "7.8 CGPA",
  },
  {
    degree: "Board of SSC Education",
    institution: "Oxford IIT School",
    duration: "2015 - 2017",
    gpa: "8.2 CGPA",
  },
];

export function Education() {
  return (
    <section
      id="education"
      className="relative py-24 md:py-32 bg-background overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 mb-4">
            <GraduationCap className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-mono uppercase tracking-wider text-muted-foreground">
              Education
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-pink-400 bg-clip-text text-transparent">
              Academic Background
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building a strong foundation in technology and computer science
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ x: 10 }}
              data-testid={`education-card-${index}`}
            >
              <Card className="p-6 md:p-8 backdrop-blur-md bg-card/80 border-card-border hover-elevate group">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 dark:from-cyan-400 dark:to-pink-400 shrink-0">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="text-muted-foreground font-medium">
                        {edu.institution}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end gap-2 md:shrink-0 md:ml-4">
                    <span className="text-sm font-mono text-muted-foreground">
                      {edu.duration}
                    </span>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/50">
                      <span className="text-sm font-semibold">{edu.gpa}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
