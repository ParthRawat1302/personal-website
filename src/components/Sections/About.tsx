import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Zap, Users } from 'lucide-react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { certifications } from '../../data/portfolio';

const About: React.FC = () => {
  const { ref, isIntersecting } = useIntersectionObserver();

  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code following best practices.',
    },
    {
      icon: Brain,
      title: 'AI/ML Curiosity',
      description: 'Exploring practical AI solutions and intelligent products that solve real problems.',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed, accessibility, and cross-platform compatibility.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively with teams to deliver projects on time and exceed expectations.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary-50 dark:bg-secondary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-secondary-100 mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
            I’m a developer who enjoys building polished products, exploring AI/ML ideas, and creating solutions that make everyday work feel simpler.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-secondary-900 dark:text-secondary-100">
                Hi there! I’m Parth Rawat
              </h3>
              <p className="text-lg text-secondary-600 dark:text-secondary-400 leading-relaxed">
                I’m a full-stack developer with a growing interest in AI/ML and thoughtful product design. I enjoy building modern applications that are useful, responsive, and enjoyable to use.
              </p>
              <p className="text-lg text-secondary-600 dark:text-secondary-400 leading-relaxed">
                My work blends frontend experiences, backend systems, and problem-solving, with a focus on creating real impact through practical, scalable solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="glass rounded-lg p-4 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors duration-300"
                >
                  <highlight.icon className="w-8 h-8 text-primary-600 dark:text-primary-400 mb-3" />
                  <h4 className="font-semibold text-secondary-900 dark:text-secondary-100 mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-sm text-secondary-600 dark:text-secondary-400">
                    {highlight.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-secondary-900 dark:text-secondary-100 mb-6">
              Certifications
            </h3>

            <div className="space-y-4">
              {certifications.map((certification, index) => (
                <motion.div
                  key={certification.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="glass rounded-lg p-6 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <div>
                      <h4 className="text-lg font-semibold text-secondary-900 dark:text-secondary-100">
                        {certification.title}
                      </h4>
                      <p className="text-primary-600 dark:text-primary-400 font-medium">
                        {certification.issuer}
                      </p>
                    </div>
                    <span className="text-sm text-secondary-500 dark:text-secondary-400 font-medium">
                      {certification.year}
                    </span>
                  </div>
                  <p className="text-secondary-600 dark:text-secondary-400 mb-4">
                    {certification.description}
                  </p>
                  {certification.credentialUrl && (
                    <a
                      href={certification.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline"
                    >
                      Open & download credential
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;