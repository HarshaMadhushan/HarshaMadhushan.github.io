'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

interface AboutSectionProps {
  description: string;
  image: string;
  stats: Array<{ label: string; value: string }>;
}

function AnimatedCounter({ value }: { value: string }) {
  const [count, setCount] = useState(0);
  const numberMatch = value.match(/\d+/);
  const targetNumber = numberMatch ? parseInt(numberMatch[0]) : 0;
  const suffix = value.replace(/\d+/, '');

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = targetNumber / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetNumber) {
        setCount(targetNumber);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [targetNumber]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export function AboutSection({ description, image, stats }: AboutSectionProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const imageRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-100, 100], [5, -5]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-100, 100], [-5, 5]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    const rect = imageRef.current.getBoundingClientRect();
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
    <section ref={ref} className="relative px-4 py-24 sm:py-32">
      {/* Section background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
      
      <div className="relative mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl"
        >
          About Me
        </motion.h2>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
            }}
            className="relative"
          >
            <div className="relative aspect-square overflow-hidden rounded-3xl border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-transparent shadow-[0_0_50px_rgba(0,212,255,0.2)] backdrop-blur-sm">
              <Image
                //src={image || "/Harsha_Madhushan.png?height=600&width=600"}
                src={"/Harsha_Madhushan.png"}
                alt="Professional portrait"
                fill
                className="object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            {/* Floating accent elements */}
            <motion.div
              className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-cyan-400/20 blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <p className="mb-8 text-balance text-lg leading-relaxed text-muted-foreground">
              {description}
            </p>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card/50 p-4 text-center backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(0,212,255,0.2)]"
                >
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative z-10">
                    <div className="mb-1 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
                      {inView ? <AnimatedCounter value={stat.value} /> : stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground sm:text-sm">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
