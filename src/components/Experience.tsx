import { Briefcase, Calendar } from 'lucide-react';

function Experience() {
  return (
    <section id="experience" className="relative py-24 px-6 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
              Work Experience
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent opacity-30 blur-xl">
              Work Experience
            </span>
          </span>
        </h2>

        <div className="relative">
          {/* Enhanced timeline */}
          <div className="absolute left-8 md:left-12 top-0 bottom-0 w-1">
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-600 rounded-full opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-600 rounded-full animate-pulse" style={{ height: '60%' }} />
          </div>

          <div className="ml-20 md:ml-24 space-y-12">
            <div className="relative group">
              {/* Animated timeline dot */}
              <div className="absolute -left-[3.75rem] md:-left-[4.25rem] top-6 z-10">
                <div className="relative w-8 h-8">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 animate-glow-pulse" />
                  <div className="absolute inset-1 rounded-full bg-black" />
                  <div className="absolute inset-0 rounded-full border-2 border-cyan-400/50 animate-ping" style={{ animationDuration: '2s' }} />
                </div>
              </div>

              {/* 3D Card Effect */}
              <div className="relative perspective-1000 transform-3d">
                <div className="group-hover:[transform:rotateY(6deg)] transition-transform duration-500">
                  <div className="relative glass-strong rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/30 overflow-hidden">
                    {/* Holographic overlay */}
                    <div className="absolute inset-0 holographic opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    
                    {/* Scan line effect */}
                    <div className="absolute inset-0 scan-line opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
                        <div className="flex-1">
                          <h3 className="text-2xl md:text-3xl font-bold mb-3">
                            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent neon-text">
                              Jr. Application Developer
                            </span>
                          </h3>
                          <p className="text-xl text-gray-200 flex items-center gap-2 mb-2">
                            <Briefcase className="text-cyan-400" size={22} />
                            <span className="font-semibold">MAGANTI IT SOLUTIONS PRIVATE LIMITED</span>
                          </p>
                          <p className="text-gray-400 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                            Vijayawada, India
                          </p>
                        </div>

                        <div className="flex items-center gap-2 px-4 py-2 glass rounded-lg border border-cyan-500/30">
                          <Calendar className="text-cyan-400" size={20} />
                          <span className="text-gray-300 font-medium">Nov 2023 - Present</span>
                        </div>
                      </div>

                      <div className="relative">
                        <p className="text-gray-300 leading-relaxed text-lg">
                          Proficient Full Stack Web Developer with 2 years of experience. Skilled in front-end
                          technologies including HTML, CSS, and Bootstrap for building responsive and visually
                          appealing web interfaces. Experienced in JavaScript for implementing dynamic and
                          interactive features on web applications. Proficient in React.js for building
                          efficient and scalable user interfaces. Knowledgeable in back-end development using
                          Node.js for server-side programming and building RESTful APIs.
                        </p>
                        
                        {/* Decorative elements */}
                        <div className="absolute -right-4 -top-4 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors duration-500" />
                        <div className="absolute -left-4 -bottom-4 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors duration-500" />
                      </div>
                    </div>

                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-cyan-500/30 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-blue-500/30 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
