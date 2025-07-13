import { FileText } from 'lucide-react';
import { publications } from '@/lib/portfolio-data';

const PublicationsSection = () => {
  const getKeywordColor = (keyword: string) => {
    const colorMap: { [key: string]: string } = {
      'Storage Systems': 'bg-blue-100 text-blue-800',
      'Enterprise Architecture': 'bg-green-100 text-green-800',
      'Research': 'bg-purple-100 text-purple-800',
      'Survey Paper': 'bg-orange-100 text-orange-800'
    };
    return colorMap[keyword] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section id="publications" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Publications</h2>
          <p className="text-lg text-slate-600">Research contributions and technical papers</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {publications.map((publication) => (
            <div key={publication.id} className="bg-slate-50 p-8 rounded-lg hover:shadow-lg transition-shadow animate-scale-in">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <FileText className="text-white text-2xl" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">
                    {publication.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-purple-600 font-semibold">Authors:</span>
                    <span className="text-slate-600">{publication.authors?.join(', ')}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-purple-600 font-semibold">Published in:</span>
                    <span className="text-slate-600">{publication.journal}</span>
                  </div>
                  
                  <p className="text-slate-700 mb-6">{publication.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {publication.keywords?.map((keyword, i) => (
                      <span key={i} className={`px-3 py-1 rounded-full text-sm ${getKeywordColor(keyword)}`}>
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
