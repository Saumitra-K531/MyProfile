import { GraduationCap, Award, MapPin } from 'lucide-react';
import { education } from '@/lib/portfolio-data';

const EducationSection = () => {
  const getGradeColor = (grade: string) => {
    if (grade.includes('8.') || grade.includes('9.')) {
      return 'bg-green-100 text-green-800';
    } else if (grade.includes('7.')) {
      return 'bg-blue-100 text-blue-800';
    } else if (grade.includes('6.')) {
      return 'bg-yellow-100 text-yellow-800';
    }
    return 'bg-purple-100 text-purple-800';
  };

  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Education</h2>
          <p className="text-lg text-gray-400">Academic background and achievements</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {education.map((edu) => (
              <div key={edu.id} className="bg-gray-800 p-8 rounded-lg border border-gray-700 hover:shadow-lg transition-shadow animate-scale-in">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="text-white text-2xl" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
                        <p className="text-xl text-purple-400 font-semibold">{edu.institution}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <MapPin className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-400">{edu.location}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-400">{edu.year}</p>
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getGradeColor(edu.grade)}`}>
                          {edu.grade}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{edu.description}</p>
                    
                    {edu.achievements && edu.achievements.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="font-semibold text-white flex items-center gap-2">
                          <Award className="w-4 h-4 text-yellow-400" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-1">
                          {edu.achievements.map((achievement, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-300">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
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