import { Code2, Database, Wrench } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  responsibilities: string[];
  tech: {
    frontend?: string;
    backend?: string;
    database?: string;
    tools?: string;
  };
}

const projects: Project[] = [
  {
    title: 'RFP CHATBOT',
    description:
      'Developed a web application to streamline the Request for Proposal (RFP) process for clients and IT companies. The application facilitates the submission and review of RFPs, covering various categories such as website redesign, cloud migration, and AI & ML solutions.',
    responsibilities: [
      'Collaborated with the AI team to integrate an automated solution generation tool',
      'Designed and implemented a user-friendly interface to enhance RFP submission process',
      'Developed a chatbot feature for user assistance and query handling',
    ],
    tech: {
      frontend: 'React JS, React-Bootstrap',
      backend: 'Python',
      database: 'MongoDB',
      tools: 'Postman, Visual Studio Code, Git',
    },
  },
  {
    title: 'CM CUP',
    description:
      'A comprehensive development initiative contributing to both backend and frontend aspects. The project focused on delivering a seamless and interactive user experience by leveraging modern technologies.',
    responsibilities: [
      'Designed and implemented RESTful APIs using Node.js',
      'Handled third-party integrations for seamless communication',
      'Developed interactive and responsive user interface using React.js',
    ],
    tech: {
      frontend: 'React JS, React-Bootstrap',
      backend: 'Node JS',
      database: 'MySQL Workbench',
      tools: 'Postman, Visual Studio Code, Git',
    },
  },
  {
    title: 'HR PORTAL',
    description:
      'A dynamic initiative aimed at building a comprehensive platform that streamlines HR processes and enhances organizational efficiency. Features a Cybersecurity Module enabling employees to access educational resources and take tests.',
    responsibilities: [
      'Designed and implemented RESTful APIs using Node.js',
      'Developed interactive and responsive user interface using React.js',
      'Built Cybersecurity Module with educational resources and testing capabilities',
    ],
    tech: {
      frontend: 'React JS, React-Bootstrap',
      backend: 'Node JS',
      database: 'MySQL Workbench',
      tools: 'Postman, Visual Studio Code, Git',
    },
  },
  {
    title: 'Oneness Yoga App',
    description:
      'A wellness-focused application designed to help users track and engage with yoga and meditation routines. Built scalable backend services and automated workflows to enhance user experience.',
    responsibilities: [
      'Developed and managed backend services using Node.js',
      'Implemented cron jobs for automating scheduled tasks',
      'Integrated Nodemailer for automated email notifications',
      'Enabled secure image uploads using AWS S3',
    ],
    tech: {
      backend: 'Node JS, Nodemailer',
      database: 'MySQL Workbench',
      tools: 'AWS S3, Postman, Visual Studio Code, Git',
    },
  },
  {
    title: 'Real-Time Chatting Tool',
    description:
      'A real-time communication tool inspired by WhatsApp, built to facilitate instant messaging between users. Supports dynamic chatting features and real-time message delivery.',
    responsibilities: [
      'Developed WebSocket-based backend using Node.js',
      'Designed and implemented frontend using React.js',
      'Handled message delivery status, online indicators, and chat history',
    ],
    tech: {
      frontend: 'React JS',
      backend: 'Node JS, WebSockets',
      database: 'MySQL Workbench',
      tools: 'Postman, Visual Studio Code, Git',
    },
  },
  {
    title: 'Medico',
    description:
      'A healthcare-focused platform designed to simplify patient interactions, improve accessibility, and streamline medical workflows. Built intuitive UI and ensured seamless integration with backend services.',
    responsibilities: [
      'Developed responsive frontend modules using React.js and TypeScript',
      'Collaborated with backend team to integrate REST APIs built with Java',
      'Enhanced application workflows and UI components',
    ],
    tech: {
      frontend: 'React JS, TypeScript',
      backend: 'Java',
      database: 'MySQL Workbench',
      tools: 'Postman, Visual Studio Code, Git',
    },
  },
];

function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6 bg-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
              Projects
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent opacity-30 blur-xl">
              Projects
            </span>
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative perspective-1000 transform-3d"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-full transform transition-all duration-500 group-hover:scale-[1.02] group-hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative glass-strong rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/30 overflow-hidden h-full flex flex-col">
                  {/* Holographic overlay */}
                  <div className="absolute inset-0 holographic opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  {/* Scan line effect */}
                  <div className="absolute inset-0 scan-line opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-cyan-500/30 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-purple-500/30 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 flex-1 flex flex-col">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                      <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent neon-text">
                        {project.title}
                      </span>
                    </h3>

                    <p className="text-gray-300 mb-6 leading-relaxed text-lg flex-1">{project.description}</p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-4 uppercase tracking-wider flex items-center gap-2">
                        <span className="w-1 h-4 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full" />
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-3">
                        {project.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-300">
                            <span className="text-cyan-400 mt-1.5 animate-pulse">▹</span>
                            <span className="flex-1">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-4 mt-auto">
                      {project.tech.frontend && (
                        <div className="group/tech flex items-start gap-3 p-3 glass rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300">
                          <Code2 size={20} className="text-cyan-400 mt-0.5 flex-shrink-0 group-hover/tech:scale-110 transition-transform duration-300" />
                          <div className="flex-1">
                            <span className="text-xs text-cyan-400 uppercase tracking-wider font-semibold">Frontend:</span>
                            <p className="text-sm text-gray-300 mt-1">{project.tech.frontend}</p>
                          </div>
                        </div>
                      )}

                      {project.tech.backend && (
                        <div className="group/tech flex items-start gap-3 p-3 glass rounded-lg border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300">
                          <Database size={20} className="text-blue-400 mt-0.5 flex-shrink-0 group-hover/tech:scale-110 transition-transform duration-300" />
                          <div className="flex-1">
                            <span className="text-xs text-blue-400 uppercase tracking-wider font-semibold">Backend:</span>
                            <p className="text-sm text-gray-300 mt-1">{project.tech.backend}</p>
                          </div>
                        </div>
                      )}

                      {project.tech.database && (
                        <div className="group/tech flex items-start gap-3 p-3 glass rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
                          <Database size={20} className="text-purple-400 mt-0.5 flex-shrink-0 group-hover/tech:scale-110 transition-transform duration-300" />
                          <div className="flex-1">
                            <span className="text-xs text-purple-400 uppercase tracking-wider font-semibold">Database:</span>
                            <p className="text-sm text-gray-300 mt-1">{project.tech.database}</p>
                          </div>
                        </div>
                      )}

                      {project.tech.tools && (
                        <div className="group/tech flex items-start gap-3 p-3 glass rounded-lg border border-green-500/20 hover:border-green-500/50 transition-all duration-300">
                          <Wrench size={20} className="text-green-400 mt-0.5 flex-shrink-0 group-hover/tech:scale-110 transition-transform duration-300" />
                          <div className="flex-1">
                            <span className="text-xs text-green-400 uppercase tracking-wider font-semibold">Tools:</span>
                            <p className="text-sm text-gray-300 mt-1">{project.tech.tools}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
