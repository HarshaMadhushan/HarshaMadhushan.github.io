'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Award, TrendingUp, Globe, ExternalLink } from 'lucide-react';

interface ExtracurricularData {
  platform: string;
  level: string;
  rating: string;
  projects: string;
  description: string;
  profileUrl?: string;
}

interface ExtracurricularCardProps {
  data: ExtracurricularData;
}

export function ExtracurricularCard({ data }: ExtracurricularCardProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center text-4xl font-bold tracking-tight sm:text-5xl"
        >
          Freelance Work
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="group relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-card/80 via-card/60 to-card/40 p-8 shadow-2xl backdrop-blur-xl sm:p-10"
        >
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          
          {/* Floating orbs */}
          <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-purple-500/20 blur-3xl" />

          <div className="relative z-10">
            {/* Header with badge */}
            <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-cyan-400 shadow-lg shadow-primary/50"
                >
                  <Award className="h-8 w-8 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-3xl font-bold text-foreground sm:text-4xl">{data.platform}</h3>
                  <p className="text-sm text-muted-foreground">Professional Freelancer</p>
                </div>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="rounded-full bg-gradient-to-r from-green-400 to-emerald-500 px-6 py-3 shadow-lg shadow-green-500/30"
              >
                <span className="font-bold text-white">{data.level}</span>
              </motion.div>
            </div>

            {/* Description */}
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              {data.description}
            </p>

            {/* Stats grid */}
            <div className="mb-8 grid grid-cols-3 gap-4">
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group/stat relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-background/80 to-background/40 p-6 text-center backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity duration-300 group-hover/stat:opacity-100" />
                <div className="relative z-10">
                  <div className="mb-2 flex items-center justify-center gap-1">
                    <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                    <span className="text-3xl font-bold text-foreground">{data.rating}</span>
                  </div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Rating</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group/stat relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-background/80 to-background/40 p-6 text-center backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity duration-300 group-hover/stat:opacity-100" />
                <div className="relative z-10">
                  <div className="mb-2 flex items-center justify-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <span className="text-3xl font-bold text-primary">{data.projects}</span>
                  </div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Projects</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group/stat relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-background/80 to-background/40 p-6 text-center backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity duration-300 group-hover/stat:opacity-100" />
                <div className="relative z-10">
                  <div className="mb-2 flex items-center justify-center gap-2">
                    <Globe className="h-5 w-5 text-primary" />
                    <span className="text-3xl font-bold text-primary">Global</span>
                  </div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Clients</p>
                </div>
              </motion.div>
            </div>

            <motion.a
              href={data.profileUrl || "https://www.fiverr.com"}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 font-semibold text-white shadow-lg shadow-primary/30 transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/50"
            >
              <span>Visit My Profile</span>
              <ExternalLink className="h-5 w-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
