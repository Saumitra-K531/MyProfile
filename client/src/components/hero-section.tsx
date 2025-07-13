import { Mail, Phone, Download, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { personalInfo } from '@/lib/portfolio-data';

const HeroSection = () => {
  const scrollToExperience = () => {
    const element = document.getElementById('experience');
    if (element) {
      const navHeight = 80;
      const targetPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  const downloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '@assets/saumitra_kulkarni_14_july_25_1752442277855.pdf';
    link.download = 'Saumitra_Kulkarni_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pt-20">
      <div className="container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          {/* Professional headshot placeholder */}
          <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary to-accent shadow-lg flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center">
              <span className="text-white text-4xl font-bold">SK</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">{personalInfo.name}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto">
            {personalInfo.title} at{' '}
            <span className="text-primary font-semibold">{personalInfo.company}</span>
          </p>
          
          <p className="text-lg text-slate-500 mb-12 max-w-3xl mx-auto leading-relaxed">
            {personalInfo.summary}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex items-center gap-2 text-slate-600">
              <Mail className="w-5 h-5 text-primary" />
              <span>{personalInfo.email}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Phone className="w-5 h-5 text-primary" />
              <span>{personalInfo.phone}</span>
            </div>
            <a 
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:text-secondary transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span>LinkedIn Profile</span>
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToExperience}
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg hover:bg-secondary transition-colors"
            >
              <Briefcase className="w-5 h-5" />
              View Experience
            </Button>
            <Button 
              onClick={downloadResume}
              variant="outline"
              className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
