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
    const colors = ['bg-primary', 'bg-accent', 'bg-secondary', 'bg-emerald-500'];
    return colors[index % colors.length];
  };

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Work Experience</h2>
          <p className="text-lg text-slate-600">5+ years of professional software development experience</p>
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
                    <h3 className="text-xl font-bold text-slate-800">{exp.position}</h3>
                    <p className={`font-semibold ${getIconColor(index).replace('bg-', 'text-')}`}>
                      {exp.company}
                    </p>
                    <p className="text-slate-500">{exp.startDate} - {exp.endDate}</p>
                  </div>
                </div>
                
                <div className="ml-18 bg-slate-50 p-6 rounded-lg">
                  <p className="text-slate-700 mb-4">{exp.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      {exp.achievements?.slice(0, Math.ceil(exp.achievements.length / 2)).map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-slate-600">{achievement}</p>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-3">
                      {exp.achievements?.slice(Math.ceil(exp.achievements.length / 2)).map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-slate-600">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
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
