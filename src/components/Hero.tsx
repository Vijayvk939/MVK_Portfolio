import { motion } from "framer-motion";
import { Mail, ExternalLink } from "lucide-react";
import LinkedinIconUrl from "/svgs/linkedin.svg";
import GithubIconUrl from "/svgs/github.svg";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 dark:bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-sm md:text-base font-mono uppercase tracking-wider text-muted-foreground mb-4"
            >
              Full Stack Developer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-pink-400 bg-clip-text text-transparent"
            >
              Machavarapu
              <br />
              Vijaya Kumar
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Dynamic and results-oriented Application Developer with 2 years of
              hands-on experience in software development. Passionate about
              building scalable web applications with modern technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-wrap items-center justify-center gap-4 mb-12"
            >
              <Button variant="default" size="lg" className="gap-2" asChild>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=vijaymachavarapu.m@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="link-contact-email"
                >
                  <Mail className="w-4 h-4" />
                  Get in Touch
                </a>
              </Button>

              <Button variant="outline" size="lg" className="gap-2" asChild>
                <a
                  href="https://linkedin.com/in/machavarapu-vijaya-kumar-3334ba1b6"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="link-contact-linkedin"
                >
                  <img
                    src={LinkedinIconUrl}
                    alt="LinkedIn icon"
                    className="w-4 h-4"
                  />
                  LinkedIn
                  <ExternalLink className="w-3 h-3" />
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex items-center justify-center gap-6"
            >
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=vijaymachavarapu.m@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/machavarapu-vijaya-kumar-3334ba1b6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-linkedin-icon"
              >
                <img
                  src={LinkedinIconUrl}
                  alt="LinkedIn icon"
                  className="w-5 h-5"
                />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-github"
              >
                <img
                  src={GithubIconUrl}
                  alt="GitHub icon"
                  className="w-5 h-5"
                />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-muted-foreground rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-muted-foreground rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
