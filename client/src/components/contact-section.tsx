import { Mail, Phone, Download, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { personalInfo, cocurricularActivities } from '@/lib/portfolio-data';

const ContactSection = () => {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/api/resume';
    link.download = 'Saumitra_Kulkarni_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Contact</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">Let's discuss opportunities and collaborations</p>
            </div>
            
            <div className="space-y-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 dark:text-gray-300">
                  I'm always interested in discussing new opportunities, sharing insights about software engineering, 
                  or collaborating on interesting projects. Feel free to reach out through any of the channels below.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <a 
                    href={`mailto:${personalInfo.email}`} 
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <a 
                    href={`tel:+91${personalInfo.phone}`} 
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    +91 {personalInfo.phone}
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <a 
                    href={personalInfo.linkedin} 
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
              
              <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Additional Activities</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {cocurricularActivities.map((activity) => (
                    <div key={activity.id} className="space-y-2">
                      <h4 className="font-semibold text-gray-900 dark:text-white">{activity.title}</h4>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">{activity.role}</p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{activity.description}</p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">{activity.achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-gray-500 dark:text-gray-400">
            © 2024 {personalInfo.name}. Built with React and TypeScript.
          </p>
        </div>
      </footer>
    </>
  );
};

export default ContactSection;
