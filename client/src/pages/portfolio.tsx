import Navigation from '@/components/navigation';
import HeroSection from '@/components/hero-section';
import ExperienceSection from '@/components/experience-section';
import ProjectsSection from '@/components/projects-section';
import PublicationsSection from '@/components/publications-section';
import ContactSection from '@/components/contact-section';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <PublicationsSection />
      <ContactSection />
    </div>
  );
};

export default Portfolio;
