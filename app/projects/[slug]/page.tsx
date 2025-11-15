import { notFound } from 'next/navigation';
import { portfolioData } from '@/lib/portfolio-data';
import { ProjectDetail } from '@/components/portfolio/project-detail';

export function generateStaticParams() {
  return portfolioData.projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = portfolioData.projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
