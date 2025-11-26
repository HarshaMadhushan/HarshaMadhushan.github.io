'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import Link from 'next/link';

interface FooterProps {
  social: {
    linkedin: string;
    github: string;
    twitter: string;
    email: string;
  };
  name: string;
}

export function Footer({ social, name }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: social.linkedin, label: 'LinkedIn' },
    { icon: Github, href: social.github, label: 'GitHub' },
    { icon: Twitter, href: social.twitter, label: 'Twitter' },
    { icon: Mail, href: `mailto:${social.email}`, label: 'Email' },
  ];

  return (
    <footer className="relative border-t border-border/50 bg-background/50 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Left side - Name and copyright */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center sm:text-left"
          >
            <p className="mb-1 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-lg font-semibold text-transparent">
              {name}
            </p>
            <p className="text-sm text-muted-foreground">
              © {currentYear} All rights reserved
            </p>
          </motion.div>

          {/* Right side - Social links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex gap-4"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="group relative rounded-full border border-border/50 bg-card/50 p-3 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-[0_0_20px_rgba(0,212,255,0.2)]"
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-cyan-400" />
                
                {/* Tooltip */}
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-foreground px-2 py-1 text-xs text-background opacity-0 transition-opacity group-hover:opacity-100">
                  {link.label}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Bottom text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-muted-foreground">
            Built with{' '}
            <span className="text-cyan-400">Next.js</span>,{' '}
            <span className="text-cyan-400">Tailwind CSS</span>, and{' '}
            <span className="text-cyan-400">Framer Motion</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
