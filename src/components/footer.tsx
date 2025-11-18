import { Mail, PhoneCall } from "lucide-react";
import LinkedinIconUrl from "/svgs/linkedin.svg";
import GithubIconUrl from "/svgs/github.svg";

export function Footer() {
  return (
    <footer className="relative py-12 bg-muted/20 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="font-bold text-xl mb-3 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-pink-400 bg-clip-text text-transparent">
                Vijaya Kumar
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Full Stack Developer passionate about building innovative web
                applications with modern technologies.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#about"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid="footer-link-about"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#experience"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid="footer-link-experience"
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid="footer-link-skills"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#education"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid="footer-link-education"
                  >
                    Education
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider">
                Get in Touch
              </h4>
              <div className="space-y-3">
                <a
                  href="tel:+919390343433"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="footer-link-phone"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>+91 93902 32344</span>
                </a>
                <a
                  href="mailto:vijaymachavarapu.m@gmail.com"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="footer-link-email"
                >
                  <Mail className="w-4 h-4" />
                  <span>vijaymachavarapu.m@gmail.com</span>
                </a>
                <div className="flex items-center gap-4 pt-2">
                  <a
                    href="https://linkedin.com/in/machavarapu-vijaya-kumar-3334ba1b6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    data-testid="footer-link-linkedin"
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
                    data-testid="footer-link-github"
                  >
                    <img
                      src={GithubIconUrl}
                      alt="GitHub icon"
                      className="w-5 h-5"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border/50">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground text-center md:text-left">
                © {new Date().getFullYear()} Machavarapu Vijaya Kumar. All rights
                reserved.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Built with using React & Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
