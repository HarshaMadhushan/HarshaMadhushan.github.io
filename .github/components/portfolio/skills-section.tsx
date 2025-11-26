'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Skill {
  name: string;
  level: number;
}

interface SkillsData {
  languages: Skill[];
  frameworks: string[];
  tools: string[];
  practices: string[];
}

interface SkillsSectionProps {
  skills: SkillsData;
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const allSkills = [
    ...skills.languages.map(s => s.name),
    ...skills.frameworks,
    ...skills.tools,
    ...skills.practices
  ];

  return (
    <section ref={ref} className="px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center text-4xl font-bold tracking-tight sm:text-5xl"
        >
          <span className="bg-gradient-to-r from-primary via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Skills & Expertise
          </span>
        </motion.h2>

        <div className="relative">
          {/* Background glow effects */}
          <div className="absolute left-1/4 top-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute bottom-20 right-1/4 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />
          
          <div className="relative flex flex-wrap justify-center gap-4">
            {allSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.03,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: Math.random() * 4 - 2,
                  transition: { duration: 0.2 }
                }}
                className="group relative cursor-default"
              >
                {/* Glow effect on hover */}
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary via-cyan-400 to-blue-400 opacity-0 blur transition-opacity duration-300 group-hover:opacity-75" />
                
                {/* Skill card */}
                <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-card/90 to-card/50 px-6 py-3 backdrop-blur-sm transition-all duration-300 group-hover:border-primary/60">
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  
                  <span className="relative z-10 text-sm font-medium text-foreground sm:text-base">
                    {skill}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
