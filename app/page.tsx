import { portfolioData } from '@/lib/portfolio-data';
import { HeroSection } from '@/components/portfolio/hero-section';
import { AboutSection } from '@/components/portfolio/about-section';
import { ExperienceTimeline } from '@/components/portfolio/experience-timeline';
import { ProjectsGrid } from '@/components/portfolio/projects-grid';
import { SkillsSection } from '@/components/portfolio/skills-section';
import { ExtracurricularCard } from '@/components/portfolio/extracurricular-card';
import { AnimatedBackground } from '@/components/portfolio/animated-background';
import { Footer } from '@/components/portfolio/footer';

export default function Portfolio() {
  return (
    <main className="relative overflow-hidden">
      <AnimatedBackground />
      <HeroSection
        name={portfolioData.name}
        title={portfolioData.title}
        subtitle={portfolioData.subtitle}
      />

      <AboutSection
        description={portfolioData.about.description}
        image={portfolioData.about.image}
        stats={portfolioData.about.stats}
      />

      <ExperienceTimeline experiences={portfolioData.experience} />

      <ProjectsGrid projects={portfolioData.projects} />

      <SkillsSection skills={portfolioData.skills} />

      <ExtracurricularCard data={portfolioData.extracurricular} />

      <Footer social={portfolioData.social} name={portfolioData.name} />
    </main>
  );
}
