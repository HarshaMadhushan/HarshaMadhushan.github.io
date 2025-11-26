'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Users, Trophy, Target, Zap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AnimatedBackground } from './animated-background';

interface ProjectDetailProps {
  project: {
    title: string;
    description: string;
    fullDescription: string;
    image: string;
    technologies: string[];
    impact: string;
    challenges: string[];
    outcomes: string[];
    duration: string;
    role: string;
    teamSize: string;
  };
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <AnimatedBackground />
      
      {/* Back button */}
      <div className="relative z-10 px-4 pt-8">
        <div className="mx-auto max-w-6xl">
          <Button
            variant="ghost"
            className="group mb-8 text-muted-foreground hover:text-foreground"
            asChild
          >
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Portfolio
            </Link>
          </Button>
        </div>
      </div>

      {/* Hero section */}
      <section className="relative z-10 px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-6 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl">
              {project.title}
            </h1>
            <p className="mb-8 max-w-3xl text-xl leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            {/* Project meta */}
            <div className="mb-12 flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-5 w-5 text-cyan-400" />
                <span className="font-semibold text-foreground">{project.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="h-5 w-5 text-cyan-400" />
                <span className="font-semibold text-foreground">{project.teamSize}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Trophy className="h-5 w-5 text-cyan-400" />
                <span className="font-semibold text-foreground">{project.role}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Zap className="h-5 w-5 text-cyan-400" />
                <span className="font-semibold text-cyan-400">{project.impact}</span>
              </div>
            </div>
          </motion.div>

          {/* Project image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mb-16 aspect-video overflow-hidden rounded-3xl border border-border/50 bg-card shadow-2xl shadow-cyan-500/10"
          >
            <Image
              src={project.image || '/placeholder.svg?height=800&width=1400'}
              alt={project.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="mb-6 text-3xl font-bold">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="border border-primary/30 bg-primary/10 px-4 py-2 text-base backdrop-blur-sm transition-all hover:scale-105 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(0,212,255,0.2)]"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </motion.div>

          {/* Full description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="mb-6 text-3xl font-bold">Overview</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {project.fullDescription}
            </p>
          </motion.div>

          {/* Challenges and Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <Target className="h-8 w-8 text-cyan-400" />
              <h2 className="text-3xl font-bold">Challenges & Solutions</h2>
            </div>
            <div className="space-y-4">
              {project.challenges.map((challenge, index) => (
                <div
                  key={index}
                  className="group rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-[0_0_30px_rgba(0,212,255,0.1)]"
                >
                  <p className="leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors">
                    {challenge}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Outcomes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <Trophy className="h-8 w-8 text-cyan-400" />
              <h2 className="text-3xl font-bold">Key Outcomes</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {project.outcomes.map((outcome, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-card to-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-[0_0_30px_rgba(0,212,255,0.15)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <p className="relative leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors">
                    {outcome}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
