'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

interface HeroSectionProps {
  name: string;
  title: string;
  subtitle: string;
}

export function HeroSection({ name, title, subtitle }: HeroSectionProps) {
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Typing animation effect
  useEffect(() => {
    if (titleIndex < title.length) {
      const timeout = setTimeout(() => {
        setDisplayedTitle((prev) => prev + title[titleIndex]);
        setTitleIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [titleIndex, title]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4"
    >
      {/* Animated grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]" />
      
      {/* Floating elements */}
      <motion.div
        className="absolute left-[10%] top-[30%] h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(0,212,255,0.8)]"
        animate={{
          y: [0, -30, 0],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute right-[15%] top-[40%] h-3 w-3 rounded-full bg-blue-400 shadow-[0_0_25px_rgba(59,130,246,0.8)]"
        animate={{
          y: [0, 40, 0],
          x: [0, -20, 0],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div style={{ y, opacity }} className="relative z-10 text-center">
        {/* Sparkles icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 flex justify-center"
        >
          <Sparkles className="h-12 w-12 text-cyan-400" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="relative mb-6 bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-300 bg-clip-text text-7xl font-bold tracking-tight text-transparent sm:text-8xl md:text-9xl">
            {name}
            {/* Glow effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-300 bg-clip-text opacity-50 blur-2xl">
              {name}
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-4"
        >
          <div className="mb-4 inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-6 py-2 backdrop-blur-sm">
            <p className="font-mono text-lg text-cyan-400 sm:text-xl">
              {displayedTitle}
              <span className="animate-pulse">|</span>
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="mx-auto max-w-3xl text-balance text-xl leading-relaxed text-muted-foreground sm:text-2xl">
            {subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="mx-auto h-10 w-10 text-cyan-400 drop-shadow-[0_0_15px_rgba(0,212,255,0.8)]" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
