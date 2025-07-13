import { skills } from '@/lib/portfolio-data';

const SkillsSection = () => {
  const skillCategories = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as { [key: string]: typeof skills });

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: string } = {
      'Languages': '💻',
      'Technologies': '⚡',
      'Tools': '🛠️'
    };
    return iconMap[category] || '🔧';
  };

  const getCategoryGradient = (category: string) => {
    const gradientMap: { [key: string]: string } = {
      'Languages': 'from-blue-500/20 to-purple-500/20 border-blue-400/30',
      'Technologies': 'from-green-500/20 to-teal-500/20 border-green-400/30',
      'Tools': 'from-orange-500/20 to-red-500/20 border-orange-400/30'
    };
    return gradientMap[category] || 'from-gray-500/20 to-gray-600/20 border-gray-400/30';
  };

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
          <p className="text-lg text-gray-400">Technologies and tools I work with</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skillCategories).map(([category, categorySkills]) => (
              <div key={category} className={`bg-gradient-to-br ${getCategoryGradient(category)} p-6 rounded-xl border backdrop-blur-sm hover:scale-105 transition-all duration-300 shadow-lg`}>
                <div className="flex items-center mb-6">
                  <span className="text-2xl mr-3">{getCategoryIcon(category)}</span>
                  <h3 className="text-xl font-bold text-white">{category}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {categorySkills.map((skill) => (
                    <span
                      key={skill.id}
                      className="inline-block px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-200 cursor-default"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Decorative elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-blue-500/10 rounded-full blur-xl"></div>
            <div className="absolute top-3/4 left-3/4 w-24 h-24 bg-green-500/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;