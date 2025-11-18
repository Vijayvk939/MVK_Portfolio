import { Code, Server, Database as DatabaseIcon, Wrench, Palette, Shield } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: <Code size={24} />,
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React JS', 'Next JS', 'Bootstrap', 'Tailwind CSS'],
    color: 'cyan',
  },
  {
    title: 'Backend',
    icon: <Server size={24} />,
    skills: ['Node JS', 'Java', 'Python', 'REST APIs', 'WebSockets', 'Sequelize'],
    color: 'blue',
  },
  {
    title: 'Database',
    icon: <DatabaseIcon size={24} />,
    skills: ['MySQL', 'MongoDB', 'MySQL Workbench'],
    color: 'purple',
  },
  {
    title: 'Tools & VCS',
    icon: <Wrench size={24} />,
    skills: ['Git', 'GitHub', 'Postman', 'Visual Studio Code', 'AWS S3', 'Nodemailer'],
    color: 'green',
  },
  {
    title: 'Creative',
    icon: <Palette size={24} />,
    skills: ['Adobe Photoshop', 'Adobe Premiere Pro', 'Adobe After Effects', 'Adobe XD', 'MS Office'],
    color: 'pink',
  },
  {
    title: 'Security',
    icon: <Shield size={24} />,
    skills: ['Ethical Hacking (Intermediate)'],
    color: 'red',
  },
];

const softSkills = [
  'Good communication and interpersonal skills',
  'Teamwork',
  'Time Management',
  'Willingness to learn new things',
  'Quick learner',
  'Comfortable working independently and in teams',
];

function Skills() {
  const getColorClasses = (color: string) => {
    const colors: Record<string, string> = {
      cyan: 'border-cyan-500/20 hover:border-cyan-500/50 hover:shadow-cyan-500/20',
      blue: 'border-blue-500/20 hover:border-blue-500/50 hover:shadow-blue-500/20',
      purple: 'border-purple-500/20 hover:border-purple-500/50 hover:shadow-purple-500/20',
      green: 'border-green-500/20 hover:border-green-500/50 hover:shadow-green-500/20',
      pink: 'border-pink-500/20 hover:border-pink-500/50 hover:shadow-pink-500/20',
      red: 'border-red-500/20 hover:border-red-500/50 hover:shadow-red-500/20',
    };
    return colors[color];
  };

  const getIconColorClass = (color: string) => {
    const colors: Record<string, string> = {
      cyan: 'text-cyan-400',
      blue: 'text-blue-400',
      purple: 'text-purple-400',
      green: 'text-green-400',
      pink: 'text-pink-400',
      red: 'text-red-400',
    };
    return colors[color];
  };

  return (
    <section id="skills" className="relative py-24 px-6 bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-15" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
              Technical Skills
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent opacity-30 blur-xl">
              Technical Skills
            </span>
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group relative perspective-1000 transform-3d"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-full transform transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className={`relative glass-strong rounded-2xl p-6 border transition-all duration-500 hover:shadow-2xl overflow-hidden h-full ${getColorClasses(
                  category.color
                )}`}>
                  {/* Holographic overlay */}
                  <div className="absolute inset-0 holographic opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-cyan-500/30 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-purple-500/30 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`relative ${getIconColorClass(category.color)}`}>
                        <div className="absolute inset-0 blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                          {category.icon}
                        </div>
                        <div className="relative transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                          {category.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 group-hover:bg-clip-text transition-all duration-300">
                        {category.title}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="group/skill relative px-3 py-1.5 glass rounded-lg border border-gray-700/50 hover:border-cyan-500/50 text-sm text-gray-300 hover:text-cyan-300 transition-all duration-300 overflow-hidden"
                        >
                          <span className="relative z-10">{skill}</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 translate-x-[-100%] group-hover/skill:translate-x-[100%] transition-transform duration-500" />
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative glass-strong rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden">
          {/* Holographic overlay */}
          <div className="absolute inset-0 holographic opacity-50 pointer-events-none" />
          
          {/* Scan line effect */}
          <div className="absolute inset-0 scan-line opacity-30 pointer-events-none" />
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent neon-text">
                Professional Skills
              </span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {softSkills.map((skill, index) => (
                <div 
                  key={index} 
                  className="group flex items-center gap-3 p-3 glass rounded-lg border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <span className="text-cyan-400 group-hover:scale-125 transition-transform duration-300 animate-pulse">▹</span>
                  <span className="text-gray-300 group-hover:text-cyan-300 transition-colors duration-300">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
