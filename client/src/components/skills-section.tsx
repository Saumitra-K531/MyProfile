import { Code, Server, Bolt, Star } from 'lucide-react';
import { skills } from '@/lib/portfolio-data';

const SkillsSection = () => {
  const skillCategories = ['Languages', 'Technologies', 'Bolt'];
  
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Languages':
        return <Code className="text-primary text-2xl mr-3" />;
      case 'Technologies':
        return <Server className="text-accent text-2xl mr-3" />;
      case 'Bolt':
        return <Bolt className="text-secondary text-2xl mr-3" />;
      default:
        return <Code className="text-primary text-2xl mr-3" />;
    }
  };

  const renderStars = (level: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < level ? 'text-yellow-500 fill-yellow-500' : 'text-slate-300'
        }`}
      />
    ));
  };

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Technical Skills</h2>
          <p className="text-lg text-slate-600">Technologies and tools I work with</p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category) => {
              const categorySkills = skills.filter(skill => skill.category === category);
              
              return (
                <div key={category} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-scale-in">
                  <div className="flex items-center mb-4">
                    {getCategoryIcon(category)}
                    <h3 className="text-xl font-bold text-slate-800">{category}</h3>
                  </div>
                  <div className="space-y-3">
                    {categorySkills.map((skill) => (
                      <div key={skill.id} className="flex items-center justify-between">
                        <span className="text-slate-600">{skill.name}</span>
                        <div className="flex space-x-1">
                          {renderStars(skill.level)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
