import { ExternalLink, Github } from 'lucide-react';
import { projects } from '@/lib/portfolio-data';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Projects</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">Notable projects and technical achievements</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={project.id} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                    <div className="flex gap-2">
                      <button className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        <Github className="w-5 h-5" />
                      </button>
                      <button className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies?.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {project.features?.[0] || 'Feature Highlight'}
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

export default ProjectsSection;
