import { Link, GraduationCap, Hand, TrendingUp } from 'lucide-react';
import { projects } from '@/lib/portfolio-data';

const ProjectsSection = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'link':
        return <Link className="text-white" />;
      case 'graduation-cap':
        return <GraduationCap className="text-white" />;
      case 'hand-paper':
        return <Hand className="text-white" />;
      default:
        return <Link className="text-white" />;
    }
  };

  const getIconColor = (index: number) => {
    const colors = ['bg-purple-600', 'bg-pink-600', 'bg-indigo-600'];
    return colors[index % colors.length];
  };

  const getTechColor = (tech: string) => {
    const colorMap: { [key: string]: string } = {
      'Flask': 'bg-blue-100 text-blue-800',
      'REST API': 'bg-green-100 text-green-800',
      'Docker': 'bg-purple-100 text-purple-800',
      'Python': 'bg-orange-100 text-orange-800',
      'Django': 'bg-green-100 text-green-800',
      'MySQL': 'bg-blue-100 text-blue-800',
      'Vue.js': 'bg-purple-100 text-purple-800',
      'Arduino': 'bg-red-100 text-red-800',
      'C': 'bg-blue-100 text-blue-800',
      'IoT': 'bg-yellow-100 text-yellow-800'
    };
    return colorMap[tech] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Projects</h2>
          <p className="text-lg text-gray-400">Notable projects and technical achievements</p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={project.id} className="project-card bg-gray-900 border border-gray-700 p-6 rounded-lg hover:shadow-xl hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${getIconColor(index)}`}>
                    {getIcon(project.icon)}
                  </div>
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies?.map((tech, i) => (
                    <span key={i} className={`px-2 py-1 rounded text-sm ${getTechColor(tech)}`}>
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <TrendingUp className="w-4 h-4" />
                  <span>{project.features?.[0] || 'Feature Highlight'}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
