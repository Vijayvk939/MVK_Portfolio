import { Mail, Linkedin, GraduationCap } from 'lucide-react';

function Contact() {
  const education = [
    { year: '2015 - 2017', institution: 'Oxford IIT School', degree: 'Board of SSC Education', score: '8.2' },
    { year: '2017 - 2019', institution: 'Narayana Junior College', degree: 'Board of Intermediate Education', score: '7.8' },
    { year: '2019 - 2023', institution: 'Amrita Sai Engineering College', degree: 'Bachelor of Technology', score: '6.0' },
  ];

  return (
    <section id="contact" className="relative py-24 px-6 bg-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
              Education & Contact
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent opacity-30 blur-xl">
              Education & Contact
            </span>
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="relative">
                <GraduationCap className="text-cyan-400 relative z-10 animate-glow-pulse" size={32} />
                <GraduationCap className="text-cyan-400 absolute inset-0 blur-lg opacity-50" size={32} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Education
              </h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="group relative perspective-1000 transform-3d"
                >
                  <div className="relative transform transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-1">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative glass-strong rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/30 overflow-hidden">
                      {/* Holographic overlay */}
                      <div className="absolute inset-0 holographic opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      
                      {/* Corner accents */}
                      <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-cyan-500/30 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-blue-500/30 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative z-10">
                        <div className="text-cyan-400 text-sm mb-3 font-semibold flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                          {edu.year}
                        </div>
                        <h4 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 group-hover:bg-clip-text transition-all duration-300">
                          {edu.institution}
                        </h4>
                        <p className="text-gray-400 text-sm mb-3">{edu.degree}</p>
                        <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-lg border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300">
                          <span className="text-cyan-400 font-semibold">Score:</span>
                          <span className="text-cyan-300 font-bold">{edu.score}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Get in Touch
            </h3>

            <div className="relative glass-strong rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden">
              {/* Holographic overlay */}
              <div className="absolute inset-0 holographic opacity-30 pointer-events-none" />
              
              {/* Scan line effect */}
              <div className="absolute inset-0 scan-line opacity-20 pointer-events-none" />
              
              <div className="relative z-10">
                <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                  I'm always interested in hearing about new opportunities and collaborations.
                  Whether you have a question or just want to say hi, feel free to reach out.
                </p>

                <div className="space-y-4">
                  <a
                    href="mailto:vijaymachavarapu.m@gmail.com"
                    className="group relative flex items-center gap-4 p-5 glass rounded-xl border border-gray-700/50 hover:border-cyan-500/60 transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                      <Mail size={26} className="text-white" />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-400 mb-1 group-hover:text-cyan-400 transition-colors duration-300">Email</div>
                      <div className="text-white font-medium group-hover:text-cyan-300 transition-colors duration-300">vijaymachavarapu.m@gmail.com</div>
                    </div>
                    <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-cyan-500/30 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/machavarapu-vijaya-kumar-3334ba1b6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center gap-4 p-5 glass rounded-xl border border-gray-700/50 hover:border-cyan-500/60 transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                      <Linkedin size={26} className="text-white" />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-400 mb-1 group-hover:text-blue-400 transition-colors duration-300">LinkedIn</div>
                      <div className="text-white font-medium group-hover:text-blue-300 transition-colors duration-300">machavarapu-va-kumar</div>
                    </div>
                    <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-blue-500/30 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center pt-12 border-t border-gray-800/50 relative">
          <div className="absolute inset-0 border-t border-cyan-500/20 opacity-50" />
          <p className="text-gray-400 relative z-10">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-semibold">
              © 2024 Machavarapu Vijaya Kumar
            </span>
            <span className="text-gray-500"> • Built with React & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
