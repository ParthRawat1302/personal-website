import { Project, Skill, Certification } from '../types';

const baseUrl = (import.meta as ImportMeta & { env?: { BASE_URL?: string } }).env?.BASE_URL || '/';

export const projects: Project[] = [
  {
    id: '1',
    title: 'CHITRA | AI IMAGE GENERATOR',
    description: 'A full-stack AI image generation platform with user authentication, image history, and a polished interface. Built with Flask, Node.js, MongoDB, and modern web styling to deliver a seamless creative experience.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Flask', 'Node.js', 'MongoDB', 'HTML', 'CSS', 'JavaScript', 'OAuth Authentication'],
    category: 'Full Stack',
    githubUrl: 'https://github.com/ParthRawat1302/CHITRA-AI-IMAGE-GENERATOR',
    featured: false,
    demoStatus: 'unavailable',
    demoMessage: 'Live demo is not available yet. Please check the GitHub repository for updates.',
  },
  {
    id: '2',
    title: 'MauSam | Weather App',
    description: 'A polished weather dashboard that combines real-time API data with a clean user experience. It includes authentication, settings, unit switching, and predictive weather interactions for a more practical daily-use app.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=900&q=80',
    technologies: ['React', 'TypeScript', 'TailwindCSS', 'Node.js', 'PostgreSQL', 'OAuth Authentication'],
    category: 'Full Stack',
    demoUrl: 'https://parthrawat1302.github.io/Weather-Dashboard/',
    githubUrl: 'https://github.com/ParthRawat1302/Weather-Dashboard',
    featured: true,
    demoStatus: 'available',
  },
  {
    id: '3',
    title: 'Insights | Analytics Dashboard',
    description: 'An analytical platform designed to transform raw information into clear decisions. The project focuses on a modern dashboard experience, fast data presentation, and intuitive interactions for business-facing insights.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
    technologies: ['React', 'TypeScript', 'Node.js', 'REST APIs', 'Charts'],
    category: 'Data',
    demoUrl: 'https://insights-frontend-v2n9.onrender.com',
    githubUrl: 'https://github.com/ParthRawat1302/Insights',
    featured: false,
    demoStatus: 'available',
  },
  {
    id: '4',
    title: 'Medical Coding Explanation Bot',
    description: 'A smart assistant built to explain medical coding concepts in a simple and interpretable way. It combines AI-driven reasoning with a practical interface aimed at helping learners and practitioners understand complex terminology.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80',
    technologies: ['Python', 'AI/ML', 'FastAPI', 'LLM', 'Automation'],
    category: 'AI/ML',
    githubUrl: 'https://github.com/ParthRawat1302/Medical-Coding-Explanation-Bot',
    featured: false,
    demoStatus: 'unavailable',
    demoMessage: 'Live demo is not available yet. Please check the GitHub repository for updates.',
  },
];

export const skills: Skill[] = [
  { name: 'React', level: 80, category: 'frontend', icon: '⚛️' },
  { name: 'TypeScript', level: 89, category: 'frontend', icon: '🔷' },
  { name: 'JavaScript', level: 79, category: 'frontend', icon: '🟨' },
  { name: 'Tailwind CSS', level: 80, category: 'frontend', icon: '🎨' },
  { name: 'Node.js', level: 88, category: 'backend', icon: '🟢' },
  { name: 'Python', level: 95, category: 'backend', icon: '🐍' },
  { name: 'MongoDB', level: 80, category: 'backend', icon: '🍃' },
  { name: 'REST APIs', level: 90, category: 'backend', icon: '🔗' },
  { name: 'Git', level: 92, category: 'tools', icon: '📝' },
  { name: 'Docker', level: 75, category: 'tools', icon: '🐳' },
  { name: 'AI/ML', level: 80, category: 'backend', icon: '🤖' },
];

export const certifications: Certification[] = [
  {
    id: '1',
    title: 'Alteryx Designer Internship',
    issuer: 'In-house Internship',
    year: '2025',
    description: 'Completed a comprehensive in-house internship on Alteryx Designer from 09 Jun to 04 Jul 2025, gaining hands-on experience in data preparation, cleansing, transformation, blending, workflow automation, and reporting.',
    credentialUrl: `${baseUrl}Alteryx_Certificate.jpeg`,
  },
  {
    id: '2',
    title: 'AI LLM Developer Certification',
    issuer: 'HCLTech',
    year: 'Jan 2026 - May 2026',
    description: 'Completed a 240-hour certification program on AI LLM Development (AI & Data) conducted by HCLTech, certified by Ambika Natarajan, SVP & Head, Product Innovation & Solutions, HCLTech.',
    credentialUrl: `${baseUrl}HCL _Certificate.pdf`,
  },
];
