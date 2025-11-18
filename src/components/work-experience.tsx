import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Briefcase } from "lucide-react";

const projects = [
  {
    title: "RFP Chatbot",
    company: "Maganti IT Solutions Private Limited",
    duration: "2024",
    role: "Jr. Application Developer",
    description:
      "Developed a web application to streamline the Request for Proposal (RFP) process for clients and IT companies.",
    responsibilities: [
      "Collaborated with the AI team to integrate an automated solution generation tool",
      "Designed and implemented a user-friendly interface for RFP submission and review",
      "Developed a chatbot feature to assist users in navigating the application",
    ],
    technologies: ["React.js", "React Bootstrap", "Python", "MongoDB", "Postman"],
  },
  {
    title: "CM Cup",
    company: "Maganti IT Solutions Private Limited",
    duration: "2024",
    role: "Jr. Application Developer",
    description:
      "Comprehensive development initiative focusing on delivering a seamless and interactive user experience.",
    responsibilities: [
      "Designed and implemented RESTful APIs using Node.js",
      "Handled third-party integrations for seamless communication",
      "Developed interactive and responsive UI using React.js",
    ],
    technologies: [
      "React.js",
      "React Bootstrap",
      "Node.js",
      "MySQL",
      "Postman",
    ],
  },
  {
    title: "HR Portal",
    company: "Maganti IT Solutions Private Limited",
    duration: "2023-2024",
    role: "Jr. Application Developer",
    description:
      "Internal HR platform streamlining HR processes with a Cybersecurity Module for employee education.",
    responsibilities: [
      "Designed RESTful APIs to support HR functionalities",
      "Developed interactive UI with attention to UX details",
      "Implemented cybersecurity training module with tests",
    ],
    technologies: [
      "React.js",
      "React Bootstrap",
      "Node.js",
      "MySQL",
      "Postman",
    ],
  },
  {
    title: "Oneness Yoga App",
    company: "Maganti IT Solutions Private Limited",
    duration: "2023",
    role: "Backend Developer",
    description:
      "Wellness-focused application designed to help users track yoga and meditation routines.",
    responsibilities: [
      "Developed and managed backend services using Node.js",
      "Implemented cron jobs for automated tasks",
      "Integrated Nodemailer for email notifications",
      "Enabled secure image uploads using AWS S3",
    ],
    technologies: ["Node.js", "Nodemailer", "AWS S3", "MySQL", "Postman"],
  },
  {
    title: "Real-Time Chatting Tool",
    company: "Personal Project",
    duration: "2023",
    role: "Full Stack Developer",
    description:
      "Real-time communication tool inspired by WhatsApp for instant messaging.",
    responsibilities: [
      "Developed WebSocket-based backend for real-time messaging",
      "Designed responsive frontend using React.js",
      "Implemented message delivery status and online indicators",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "WebSockets",
      "MySQL",
      "Postman",
    ],
  },
  {
    title: "Medico",
    company: "Maganti IT Solutions Private Limited",
    duration: "2023",
    role: "Frontend Developer",
    description:
      "Healthcare platform designed to simplify patient interactions and streamline medical workflows.",
    responsibilities: [
      "Developed responsive frontend modules using React.js and TypeScript",
      "Collaborated with backend team for API integration",
      "Ensured smooth user interactions across devices",
    ],
    technologies: [
      "React.js",
      "TypeScript",
      "Java",
      "MySQL",
      "Postman",
    ],
  },
];

export function WorkExperience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      id="experience"
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
            <Briefcase className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-mono uppercase tracking-wider text-muted-foreground">
              Work Experience
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-pink-400 bg-clip-text text-transparent">
              Professional Journey
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building innovative solutions across diverse projects
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 dark:from-cyan-400 dark:via-purple-400 dark:to-pink-400 transform md:-translate-x-1/2" />

            <div className="space-y-12">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-col gap-8`}
                  data-testid={`project-card-${index}`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 dark:from-cyan-400 dark:to-pink-400 transform md:-translate-x-1/2 z-10 ring-4 ring-background" />

                  {/* Content */}
                  <div className="w-full md:w-[calc(50%-2rem)] ml-8 md:ml-0">
                    <Card className="p-6 md:p-8 backdrop-blur-md bg-card/80 border-card-border hover-elevate group">
                      <div className="flex items-start justify-between mb-4 gap-4">
                        <div>
                          <h3 className="text-2xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-sm text-muted-foreground font-medium">
                            {project.company}
                          </p>
                        </div>
                        <Badge variant="secondary" className="shrink-0">
                          {project.duration}
                        </Badge>
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      <AnimatePresence initial={false}>
                        {expandedIndex === index && (
                          <motion.div
                            id={`project-details-${index}`}
                            initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                            animate={{ opacity: 1, height: "auto", marginBottom: 16 }}
                            exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">
                              Key Responsibilities:
                            </h4>
                            <ul className="space-y-2 mb-4">
                              {project.responsibilities.map((resp, i) => (
                                <li
                                  key={i}
                                  className="flex gap-2 text-sm text-muted-foreground"
                                >
                                  <span className="text-blue-500 dark:text-cyan-400 shrink-0">
                                    •
                                  </span>
                                  <span>{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, i) => (
                          <Badge
                            key={i}
                            variant="outline"
                            className="font-mono text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleExpand(index)}
                        className="w-full gap-2"
                        data-testid={`button-expand-${index}`}
                        aria-expanded={expandedIndex === index}
                        aria-controls={`project-details-${index}`}
                      >
                        {expandedIndex === index ? (
                          <>
                            Show Less <ChevronUp className="w-4 h-4" />
                          </>
                        ) : (
                          <>
                            Show More <ChevronDown className="w-4 h-4" />
                          </>
                        )}
                      </Button>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
