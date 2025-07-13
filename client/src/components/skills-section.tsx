import { Star } from 'lucide-react';
import { skills } from '@/lib/portfolio-data';

const SkillsSection = () => {
  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      'Programming': 'bg-purple-900/20 text-purple-300 border-purple-500/30',
      'Web Development': 'bg-blue-900/20 text-blue-300 border-blue-500/30',
      'Database': 'bg-green-900/20 text-green-300 border-green-500/30',
      'DevOps': 'bg-red-900/20 text-red-300 border-red-500/30',
      'Machine Learning': 'bg-yellow-900/20 text-yellow-300 border-yellow-500/30',
      'Tools': 'bg-indigo-900/20 text-indigo-300 border-indigo-500/30'
    };
    return colorMap[category] || 'bg-gray-900/20 text-gray-300 border-gray-500/30';
  };

  const getStarRating = (level: string) => {
    switch (level) {
      case 'Expert':
        return 5;
      case 'Advanced':
        return 4;
      case 'Intermediate':
        return 3;
      case 'Beginner':
        return 2;
      default:
        return 5;
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'
        }`}
      />
    ));
  };

  const skillCategories = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as { [key: string]: typeof skills });

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
          <p className="text-lg text-gray-400">Technologies and tools I work with</p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {Object.entries(skillCategories).map(([category, categorySkills]) => (
            <div key={category} className="mb-12">
              <div className="flex items-center mb-6">
                <span className={`px-4 py-2 rounded-full text-sm font-semibold border ${getCategoryColor(category)}`}>
                  {category}
                </span>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categorySkills.map((skill) => (
                  <div key={skill.id} className="bg-gray-900 p-6 rounded-lg border border-gray-700 hover:shadow-lg hover:border-purple-500/50 transition-all animate-scale-in">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                      <span className="text-sm text-purple-400 font-medium">{skill.level}</span>
                    </div>
                    
                    <div className="flex items-center gap-1 mb-3">
                      {renderStars(getStarRating(skill.level))}
                      <span className="text-sm text-gray-400 ml-2">
                        {getStarRating(skill.level)}/5
                      </span>
                    </div>
                    
                    <p className="text-sm text-gray-400 leading-relaxed">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;