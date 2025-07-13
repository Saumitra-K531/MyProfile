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
      {/* Co-curricular Activities Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Co-curricular Activities</h2>
            <p className="text-lg text-gray-400">Additional involvement and achievements</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {cocurricularActivities.map((activity) => (
                <div key={activity.id} className="bg-gray-900 border border-gray-700 p-6 rounded-lg hover:shadow-md hover:border-purple-500/50 transition-all animate-scale-in">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4`}>
                      <Users className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{activity.title}</h3>
                      <p className={`text-purple-400 font-semibold`}>{activity.role}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{activity.description}</p>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
                    <span>{activity.achievement}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-400">Let's discuss opportunities and collaborations</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg hover:shadow-lg hover:border-purple-500/50 transition-all animate-scale-in">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                <p className="text-gray-300">
                  <a href={`mailto:${personalInfo.email}`} className="text-purple-400 hover:text-pink-400 transition-colors">
                    {personalInfo.email}
                  </a>
                </p>
              </div>
              
              <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg hover:shadow-lg hover:border-purple-500/50 transition-all animate-scale-in">
                <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                <p className="text-gray-300">
                  <a href={`tel:+91${personalInfo.phone}`} className="text-purple-400 hover:text-pink-400 transition-colors">
                    +91 {personalInfo.phone}
                  </a>
                </p>
              </div>
              
              <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg hover:shadow-lg hover:border-purple-500/50 transition-all animate-scale-in">
                <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">LinkedIn</h3>
                <p className="text-gray-300">
                  <a href={personalInfo.linkedin} 
                     className="text-purple-400 hover:text-pink-400 transition-colors" 
                     target="_blank"
                     rel="noopener noreferrer">
                    Connect on LinkedIn
                  </a>
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Button 
                onClick={downloadResume}
                size="lg"
                className="inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-lg hover:bg-purple-700 transition-colors text-lg"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-gray-500 mt-2">
            Built with modern web technologies and attention to detail.
          </p>
        </div>
      </footer>
    </>
  );
};

export default ContactSection;
