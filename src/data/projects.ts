import React from 'react';

export interface ProjectItem {
  title: React.ReactNode;
  description: React.ReactNode;
  period: string;
  role: string;
  skills: string[];
  image?: string;
  link?: string;
  extra?: React.ReactNode;
}

export const projects: ProjectItem[] = [
  {
    title: 'Development of Human Digital Technologies for Prediction and Management of Emotion Worker\’s Mental Health Risks',
    description: 'Developing and validating an interactive human digital twin technology that simulates and synchronizes the mechanisms of individual stress risk factors in a virtual environment, in order to provide personalized stress risk management solutions for mitigating mental health risks caused by emotional labor.',
    period: '2024.02 - Present',
    role: 'Experiment Design \& Implementation, Paper Writing',
    skills: ['Kafka', 'Docker', 'AWS', 'Kubernetes'],
    image: 'projects/IITP_Project.png',
  },
  {
    title: 'Development of a Data Streaming Platform to Support Real‑time Affect Monitoring Using Wearable Sensor Data',
    description: 'Developing a Kafka‑based real‑time affect monitoring system using wearable sensors.',
    period: '2024.02 - 2025.08',
    role: 'Infrastructure Development \& Performance Analysis',
    skills: ['AWS', 'Kubernetes', 'Kafka', 'Docker'],
    image: 'projects/AffectStream-architecture.png',
  },
  {
    title: 'Designing Tools for Mental Health Protection in Content Moderation',
    description: 'Design and evaluation of a tool that mitigates content moderators’ mental burden by modifying hate speech to understand the impact of mitigated text on emotional burden and decision-making in text moderation.',    period: '2024.02 - 2024.10',
    role: 'Tool Design, Experiment Interface Implementation, Paper Writing',
    skills: ['React.js', 'TypeScript', 'LLM Prompting'],
    image: 'projects/hatebuffer_default.png',
  },
  {
    title: React.createElement(
      React.Fragment,
      null,
      React.createElement(
        'a',
        {
          href: 'https://madcamp.io/',
          className: 'text-blue-600 hover:underline',
          target: '_blank',
          rel: 'noopener noreferrer'
        },
        'Mad Camp'
      ),
      ': Hackaton Program for Intensive Programming and Startup'
    ),
    description: '4-week intensive mobile app development camp (MAD Camp) to design and implement a mobile application in a fast-paced, team-based environment, including rapid prototyping, user-centered feature development, and iterative refinement through hands-on collaboration and peer feedback.',
    period: '2020.06 - 2020.08',
    role: 'Mobile \& Web Development',
    skills: ['React.js', 'Node.js', 'MongoDB', 'MySQL', 'Android Studio'],
  }
]; 