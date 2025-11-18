import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 w-full border-b border-border/10 backdrop-blur-xl bg-background/80"
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-pink-400 bg-clip-text text-transparent"
        >
          MVK
        </motion.div>

        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="hidden md:flex items-center gap-8"
        >
          <a
            href="#about"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            data-testid="link-nav-about"
          >
            About
          </a>
          <a
            href="#experience"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            data-testid="link-nav-experience"
          >
            Experience
          </a>
          <a
            href="#skills"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            data-testid="link-nav-skills"
          >
            Skills
          </a>
          <a
            href="#education"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            data-testid="link-nav-education"
          >
            Education
          </a>
        </motion.nav>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full"
            data-testid="button-theme-toggle"
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>
        </motion.div>
      </div>
    </motion.header>
  );
}
