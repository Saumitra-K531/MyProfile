import { experiences } from '@/lib/portfolio-data';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Experience</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">5+ years of professional software development experience</p>
          </div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="border-l-4 border-blue-600 pl-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.position}</h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">{exp.company}</p>
                  <p className="text-gray-500 dark:text-gray-400">{exp.startDate} - {exp.endDate}</p>
                </div>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{exp.description}</p>
                </div>
                
                <div className="space-y-3">
                  {exp.achievements?.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 dark:text-gray-300">{achievement}</p>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.technologies?.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
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
