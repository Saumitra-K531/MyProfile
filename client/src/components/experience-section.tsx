import { Cloud, Shield, Database, GraduationCap, CheckCircle } from 'lucide-react';
import { experiences } from '@/lib/portfolio-data';

const ExperienceSection = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'cloud':
        return <Cloud className="text-white" />;
      case 'shield-alt':
        return <Shield className="text-white" />;
      case 'database':
        return <Database className="text-white" />;
      case 'graduation-cap':
        return <GraduationCap className="text-white" />;
      default:
        return <Cloud className="text-white" />;
    }
  };

  const getIconColor = (index: number) => {
    const colors = ['bg-purple-600', 'bg-pink-600', 'bg-indigo-600', 'bg-violet-600'];
    return colors[index % colors.length];
  };

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Work Experience</h2>
          <p className="text-lg text-gray-400">5+ years of professional software development experience</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="experience-timeline relative">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative mb-16 animate-slide-up">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-10 ${getIconColor(index)}`}>
                    {getIcon(exp.icon)}
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                    <p className={`font-semibold text-purple-400`}>
                      {exp.company}
                    </p>
                    <p className="text-gray-400">{exp.startDate} - {exp.endDate}</p>
                  </div>
                </div>
                
                <div className="ml-18 bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <p className="text-gray-300 mb-6">{exp.description}</p>
                  
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-purple-400 mb-4">Key Achievements</h4>
                    <div className="grid gap-3">
                      {exp.achievements?.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-3 p-3 bg-gray-700/50 rounded-lg border-l-4 border-purple-500">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <p className="text-gray-300 leading-relaxed">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {exp.technologies && (
                    <div className="mt-6 pt-4 border-t border-gray-600">
                      <h4 className="text-sm font-semibold text-purple-400 mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-sm border border-purple-600/30">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
