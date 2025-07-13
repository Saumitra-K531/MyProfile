import Navigation from '@/components/navigation';
import HeroSection from '@/components/hero-section';
import ExperienceSection from '@/components/experience-section';
import SkillsSection from '@/components/skills-section';
import EducationSection from '@/components/education-section';
import ProjectsSection from '@/components/projects-section';
import PublicationsSection from '@/components/publications-section';
import ContactSection from '@/components/contact-section';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <ProjectsSection />
      <PublicationsSection />
      <ContactSection />
    </div>
  );
};

export default Portfolio;
