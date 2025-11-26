'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useRef } from 'react';
import Link from 'next/link';

interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  impact: string;
  link: string;
}

interface ProjectsGridProps {
  projects: Project[];
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-100, 100], [8, -8]), { stiffness: 400, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-100, 100], [-8, 8]), { stiffness: 400, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      whileHover={{ scale: 1.02 }}
      className="group relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card to-card/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_60px_rgba(0,212,255,0.3)]"
    >
      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ transform: 'translateZ(10px)' }}
      />

      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg?height=400&width=600"}
          alt={project.title}
          fill
          className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-90" />
        
        {/* Sparkle icon on hover */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileHover={{ opacity: 1, scale: 1 }}
          className="absolute right-4 top-4 rounded-full bg-primary/20 p-2 backdrop-blur-sm"
        >
          <Sparkles className="h-5 w-5 text-cyan-400" />
        </motion.div>
      </div>

      <div className="relative p-6" style={{ transform: 'translateZ(20px)' }}>
        <h3 className="mb-2 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-2xl font-bold text-transparent">
          {project.title}
        </h3>
        <p className="mb-4 text-balance leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <div className="mb-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="border border-primary/20 bg-primary/10 backdrop-blur-sm transition-colors hover:border-primary/40"
            >
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-sm font-semibold text-cyan-400">
            <Sparkles className="h-4 w-4" />
            {project.impact}
          </span>
          <Button
            size="sm"
            variant="ghost"
            className="group/btn bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary"
            asChild
          >
            <Link href={`/projects/${project.slug}`}>
              View Details
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="relative px-4 py-24 sm:py-32">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.08),transparent_70%)]" />
      
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Showcasing innovative solutions and technical excellence
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
