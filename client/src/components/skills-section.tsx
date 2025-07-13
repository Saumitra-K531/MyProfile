import { skills } from '@/lib/portfolio-data';

const SkillsSection = () => {
  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      'Programming': 'bg-slate-700/20 text-slate-300 border-slate-500/30',
      'Web Development': 'bg-slate-700/20 text-slate-300 border-slate-500/30',
      'Database': 'bg-slate-700/20 text-slate-300 border-slate-500/30',
      'DevOps': 'bg-slate-700/20 text-slate-300 border-slate-500/30',
      'Machine Learning': 'bg-slate-700/20 text-slate-300 border-slate-500/30',
      'Tools': 'bg-slate-700/20 text-slate-300 border-slate-500/30'
    };
    return colorMap[category] || 'bg-slate-700/20 text-slate-300 border-slate-500/30';
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
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {categorySkills.map((skill) => (
                  <div key={skill.id} className="bg-gray-900 p-4 rounded-lg border border-gray-700 hover:shadow-lg hover:border-slate-500/50 transition-all animate-scale-in">
                    <h3 className="text-lg font-semibold text-white mb-2">{skill.name}</h3>
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