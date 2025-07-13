import { GraduationCap, School, Award, Calendar, MapPin, Star } from 'lucide-react';
import { education } from '@/lib/portfolio-data';

const EducationSection = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'graduation-cap':
        return <GraduationCap className="text-white text-2xl" />;
      case 'school':
        return <School className="text-white" />;
      case 'certificate':
        return <Award className="text-white" />;
      default:
        return <GraduationCap className="text-white text-2xl" />;
    }
  };

  const getIconColor = (index: number) => {
    const colors = ['bg-primary', 'bg-accent', 'bg-secondary'];
    return colors[index % colors.length];
  };

  const getTextColor = (index: number) => {
    const colors = ['text-primary', 'text-accent', 'text-secondary'];
    return colors[index % colors.length];
  };

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Education</h2>
          <p className="text-lg text-slate-600">Academic background and achievements</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={edu.id} className="bg-slate-50 p-8 rounded-lg hover:shadow-lg transition-shadow animate-scale-in">
                <div className="flex items-center mb-4">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mr-6 ${getIconColor(index)}`}>
                    {getIcon(edu.icon)}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800">{edu.degree}</h3>
                    {edu.field && (
                      <p className={`font-semibold ${getTextColor(index)}`}>{edu.field}</p>
                    )}
                    <p className="text-slate-600">{edu.institution}</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4 mt-4">
                  <div className="flex items-center gap-2">
                    <Calendar className={`w-5 h-5 ${getTextColor(index)}`} />
                    <span className="text-slate-600">{edu.startYear} - {edu.endYear}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className={`w-5 h-5 ${getTextColor(index)}`} />
                    <span className="text-slate-600">{edu.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span className="text-slate-600 font-semibold">{edu.grade}</span>
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

export default EducationSection;
