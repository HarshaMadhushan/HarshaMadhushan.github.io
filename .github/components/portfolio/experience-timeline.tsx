'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building2, MapPin, Calendar, ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

interface ExperienceTimelineProps {
  experiences: Experience[];
}

function ExperienceCard({ exp, index }: { exp: Experience; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative"
    >
      {/* Animated timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
        className="absolute -left-[7px] top-2 hidden h-4 w-4 rounded-full border-2 border-background bg-primary shadow-[0_0_15px_rgba(0,212,255,0.8)] md:block"
      >
        <motion.div
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="h-full w-full rounded-full bg-primary opacity-50"
        />
      </motion.div>

      <div className="group ml-0 md:ml-8">
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card to-card/50 p-6 backdrop-blur-sm transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(0,212,255,0.2)]"
        >
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          
          <div className="relative z-10">
            <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 className="mb-2 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-2xl font-bold text-transparent">
                  {exp.title}
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-primary" />
                    {exp.company}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    {exp.location}
                  </span>
                </div>
              </div>
              <Badge variant="secondary" className="flex items-center gap-2 border border-primary/30 bg-primary/10">
                <Calendar className="h-3 w-3" />
                {exp.period}
              </Badge>
            </div>

            <p className="mb-4 text-balance leading-relaxed text-muted-foreground">
              {exp.description}
            </p>

            <motion.div
              animate={{ height: isExpanded ? 'auto' : 0 }}
              className="overflow-hidden"
            >
              <div className="mb-4 space-y-2 border-l-2 border-primary/30 pl-4">
                {exp.achievements.map((achievement, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: isExpanded ? 1 : 0, x: isExpanded ? 0 : -10 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-2 text-sm text-muted-foreground"
                  >
                    <ChevronRight className="h-4 w-4 flex-shrink-0 text-cyan-400" />
                    <span>{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="flex flex-wrap items-center gap-2">
              {exp.technologies.slice(0, isExpanded ? undefined : 5).map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="border-primary/40 text-primary hover:bg-primary/10"
                >
                  {tech}
                </Badge>
              ))}
              {exp.technologies.length > 5 && !isExpanded && (
                <Badge variant="outline" className="border-primary/40 text-primary">
                  +{exp.technologies.length - 5} more
                </Badge>
              )}
            </div>

            {exp.achievements.length > 0 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-4 flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
              >
                {isExpanded ? 'Show Less' : 'Show Achievements'}
                <motion.div
                  animate={{ rotate: isExpanded ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronRight className="h-4 w-4" />
                </motion.div>
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="relative px-4 py-24 sm:py-32">
      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
            Experience
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Professional journey and key milestones
          </p>
        </motion.div>

        <div className="relative">
          {/* Animated timeline line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="absolute left-0 top-0 hidden w-px bg-gradient-to-b from-primary via-primary/50 to-transparent md:block"
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <ExperienceCard key={`${exp.company}-${exp.period}`} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
