import { PortfolioData } from '../types';

import medilogicImg from '../assets/images/medilogic_preview_1786533444255.jpg';
import gregoryJournalImg from '../assets/images/gregory_journal_1786533459451.jpg';
import rexBlogImg from '../assets/images/rex_blog_1786533471795.jpg';
import balanceeRewardsImg from '../assets/images/balancee_rewards_1786533487761.jpg';
import developerAvatarImg from '../assets/images/developer_avatar_1786533500488.jpg';

export const portfolioData: PortfolioData = {
  name: 'Oluwapelumi Sotoyinbo',
  title: 'Frontend Developer',
  role: 'Frontend Architect & Full-Stack Engineer',
  location: 'Lagos, Nigeria (Available for Remote / Contract Globally)',
  availability: 'Available for new opportunities / contract roles',
  shortBio:
    'Passionate Engineer crafting scalable, pixel-perfect, high-performance web applications with React, Next.js, Vue.js, Nuxt.js, and TypeScript.',
  bio:
    'Frontend & Full-Stack Engineer with a track record of engineering mission-critical web applications across Healthcare, Fintech, and Digital Media. Specialized in building fast, accessible (WCAG compliant), resilient web systems using modern TypeScript frameworks like Next.js, React, Nuxt.js, Vue.js, and Tailwind CSS.',
  resumeUrl:
    'https://docs.google.com/document/d/14gjAgDVSeR22KI0DTudmaUcnc4vICL6SpA5jWjPbNjg/edit?usp=sharing',
  githubUrl: 'https://github.com/Izcomayana',
  linkedinUrl: 'https://www.linkedin.com/in/oluwapelumi-sotoyinbo-28439a20b/',
  email: 'oluwapelumisotoyinbo@gmail.com',
  whatsappNumber: '+2348036567514',
  whatsappUrl: 'https://wa.me/2348036567514',
  coreTechStack: [
    'React',
    'Next.js',
    'TypeScript',
    'Vue.js',
    'Nuxt.js',
    'Tailwind CSS',
  ],
  metrics: [
    {
      label: 'Years of Experience',
      value: '3+',
      description: 'Building production-ready enterprise applications',
    },
    {
      label: 'Projects Shipped',
      value: '20+',
      description: 'High-converting web platforms & web apps',
    },
    {
      label: 'Code Performance',
      value: '98%',
      description: 'Average Lighthouse performance score',
    },
    {
      label: 'Client Satisfaction',
      value: '100%',
      description: 'On-time delivery with zero critical bugs',
    },
  ],
  skillCategories: [
    {
      title: 'Frontend Mastery',
      description: 'Building lightning-fast, accessible, responsive user interfaces',
      skills: [
        { name: 'React', level: 'Expert', highlight: true },
        { name: 'Next.js', level: 'Expert', highlight: true },
        { name: 'TypeScript', level: 'Expert', highlight: true },
        { name: 'Vue.js', level: 'Advanced', highlight: true },
        { name: 'Nuxt.js', level: 'Advanced', highlight: true },
        { name: 'Tailwind CSS', level: 'Expert', highlight: true },
      ],
    },
    {
      title: 'UI Component Libraries & Animation',
      description: 'Delivering fluid animations and design system components',
      skills: [
        { name: 'Radix UI', level: 'Advanced' },
        { name: 'Framer Motion', level: 'Advanced' },
        { name: 'Shadcn UI', level: 'Advanced' },
        { name: 'Headless UI', level: 'Advanced' },
        { name: 'CSS Modules / PostCSS', level: 'Expert' },
        { name: 'Responsive Layouts', level: 'Master' },
      ],
    },
    {
      title: 'Architecture & State Management',
      description: 'Structuring scalable applications and robust data pipelines',
      skills: [
        { name: 'REST & GraphQL APIs', level: 'Advanced' },
        { name: 'Zustand & Redux Toolkit', level: 'Advanced' },
        { name: 'Pinia (Vue)', level: 'Advanced' },
        { name: 'React Query / SWR', level: 'Expert' },
        { name: 'System Architecture', level: 'Advanced' },
        { name: 'Web Performance Optimization', level: 'Expert' },
      ],
    },
    {
      title: 'DevOps & Tooling',
      description: 'Ensuring clean CI/CD, testing, and modern developer workflows',
      skills: [
        { name: 'Git & GitHub Workflows', level: 'Expert' },
        { name: 'Vercel Deployment', level: 'Expert' },
        { name: 'Vite & Webpack', level: 'Advanced' },
        { name: 'ESLint / Prettier', level: 'Expert' },
        { name: 'WCAG Accessibility Standards', level: 'Expert' },
        { name: 'Testing (Jest/RTL)', level: 'Intermediate' },
      ],
    },
  ],
  projects: [
    {
      id: 'medilogic',
      title: 'Medilogic',
      subtitle: 'Clinical Waste & Delivery Management Platform',
      description:
        'A secure, intelligent platform for managing clinical waste transport, medical deliveries, and NHS-compliant reporting.',
      extendedDescription:
        'Medilogic streamlines healthcare transport workflows by providing real-time tracking, chain-of-custody compliance auditing, and automated report generation for NHS medical waste transport. Designed with strict security, fault tolerance, and responsive operational dashboards.',
      techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'REST API'],
      liveUrl: 'https://medilogic.vercel.app/',
      githubUrl: 'https://github.com/Izcomayana/medilogic',
      image: medilogicImg,
      featured: true,
      category: 'Healthcare',
      keyFeatures: [
        'NHS-compliant compliance audit reporting engine',
        'Real-time transport tracking and delivery route status',
        'Role-based access control for medical logistics staff',
        'Mobile-friendly responsive operational dashboard',
      ],
      architectureHighlights: [
        'Server-Side Rendering (SSR) for fast data hydration',
        'Strict TypeScript type safety across API boundaries',
        'Optimized asset loading with custom caching policies',
      ],
    },
    {
      id: 'gregory-medical-journal',
      title: 'Gregory Medical Journal',
      subtitle: 'Peer-Reviewed Scientific Publishing Portal',
      description:
        'Peer-reviewed journal dedicated to publishing high-quality research across various fields of medicine.',
      extendedDescription:
        'A medical publishing web portal built for academic researchers, doctors, and medical peer-reviewers. Features article indexing, full-text medical paper reader, dynamic issue archives, and advanced research search capability with accessible Radix UI primitives.',
      techStack: ['Radix UI', 'Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      liveUrl: 'https://gregory-medical-journal.vercel.app/',
      githubUrl: 'https://github.com/oladetoungee/gregory-medical-journal',
      image: gregoryJournalImg,
      featured: true,
      category: 'Healthcare',
      keyFeatures: [
        'Accessible Radix UI dialogs, accordions, and dropdown menus',
        'Full-text peer-reviewed medical article reading experience',
        'Category search & filter across medical specialties',
        'Academic citation generation and PDF download triggers',
      ],
      architectureHighlights: [
        'WCAG 2.1 AA accessible component architecture',
        'SEO-optimized metadata generation for search indexing',
        'Fluid layout with responsive typography scales',
      ],
    },
    {
      id: 'rex-blog',
      title: 'Rex Blog',
      subtitle: 'Wealth, Wellness & Wisdom Thought Leadership',
      description:
        'Curated insights at the intersection of wealth, wellness, and wisdom. Built for thoughtful leaders seeking harmony across Health, Faith, Finance, and Family.',
      extendedDescription:
        'Rex Blog delivers an editorial publishing experience focused on long-form content reading. Incorporates smooth article transition states, dark/light reading modes, newsletter subscriptions, and social sharing capabilities.',
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: 'https://rex-blog-io.vercel.app/',
      githubUrl: 'https://github.com/Izcomayana/Rex-Blog',
      image: rexBlogImg,
      featured: true,
      category: 'Editorial',
      keyFeatures: [
        'Serene editorial layout with high readability typography',
        'Filterable article topics: Health, Faith, Finance, and Family',
        'Reading progress bar and estimated reading time indicator',
        'Responsive dark and light reading view modes',
      ],
      architectureHighlights: [
        'Framer Motion page transitions for smooth reader immersion',
        'Optimized client-side article search and filtering',
        'Modular layout composition for editorial articles',
      ],
    },
    {
      id: 'balancee-rewards',
      title: 'Balancee Rewards Summary',
      subtitle: 'Interactive Fintech Cashback & Rewards Portal',
      description:
        'Interactive Rewards Summary Page where customers can track earnings, view cashback history, and cash out rewards directly or via promo codes.',
      extendedDescription:
        'A customer-facing financial dashboard allowing users to visualize cashback rewards history, manage promotional codes, track direct payout statuses, and view breakdown analytics of earned points in real time.',
      techStack: ['Radix UI', 'React', 'Tailwind CSS', 'TypeScript'],
      liveUrl: 'https://rewardsumm.vercel.app/',
      githubUrl: 'https://github.com/Izcomayana/balancee-rewards-summary',
      image: balanceeRewardsImg,
      featured: true,
      category: 'Fintech',
      keyFeatures: [
        'Interactive earnings chart and financial summary metrics',
        'Promo code redemption modal with instant validation UI',
        'Cashout options via bank transfer or gift vouchers',
        'Transaction history ledger with status filters',
      ],
      architectureHighlights: [
        'Radix UI primitive hooks for accessible modal interactions',
        'Interactive financial state handling and mathematical formatting',
        'High contrast design palette for financial clarity',
      ],
    },
  ],
};

export const avatarImage = developerAvatarImg;
