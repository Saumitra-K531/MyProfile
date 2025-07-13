import { skills } from '@/lib/portfolio-data';

const SkillsSection = () => {
  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      'Programming': 'bg-purple-100 text-purple-800',
      'Web Development': 'bg-blue-100 text-blue-800',
      'Database': 'bg-green-100 text-green-800',
      'DevOps': 'bg-red-100 text-red-800',
      'Machine Learning': 'bg-yellow-100 text-yellow-800',
      'Tools': 'bg-indigo-100 text-indigo-800'
    };
    return colorMap[category] || 'bg-gray-100 text-gray-800';
  };

  const getSkillLevel = (level: string) => {
    switch (level) {
      case 'Expert':
        return 'w-full bg-purple-600';
      case 'Advanced':
        return 'w-4/5 bg-purple-600';
      case 'Intermediate':
        return 'w-3/5 bg-purple-600';
      case 'Beginner':
        return 'w-2/5 bg-purple-600';
      default:
        return 'w-full bg-purple-600';
    }
  };

  const skillCategories = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as { [key: string]: typeof skills });

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Skills & Expertise</h2>
          <p className="text-lg text-slate-600">Technologies and tools I work with</p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {Object.entries(skillCategories).map(([category, categorySkills]) => (
            <div key={category} className="mb-12">
              <div className="flex items-center mb-6">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(category)}`}>
                  {category}
                </span>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categorySkills.map((skill) => (
                  <div key={skill.id} className="bg-slate-50 p-4 rounded-lg hover:shadow-md transition-shadow animate-scale-in">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-slate-800">{skill.name}</h3>
                      <span className="text-sm text-slate-500">{skill.level}</span>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                      <div className={`h-2 rounded-full ${getSkillLevel(skill.level)}`}></div>
                    </div>
                    
                    <p className="text-sm text-slate-600">{skill.description}</p>
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