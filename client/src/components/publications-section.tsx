import { FileText, ExternalLink } from 'lucide-react';
import { publications } from '@/lib/portfolio-data';

const PublicationsSection = () => {
  return (
    <section id="publications" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Writing</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">Research contributions and technical papers</p>
          </div>
          
          <div className="space-y-8">
            {publications.map((publication) => (
              <article key={publication.id} className="border-l-4 border-blue-600 pl-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {publication.title}
                    </h3>
                    <div className="space-y-1">
                      <p className="text-gray-600 dark:text-gray-300">
                        <span className="font-semibold">Authors:</span> {publication.authors?.join(', ')}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        <span className="font-semibold">Published in:</span> {publication.journal}
                      </p>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{publication.description}</p>
                </div>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {publication.keywords?.map((keyword, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                      {keyword}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
