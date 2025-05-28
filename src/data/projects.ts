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
    role: 'Infrastructure Development \& Performance Analysis',
    skills: ['Kafka', 'Docker', 'AWS', 'Kubernetes'],
    image: 'projects/IITP_Project.png',
  },
  {
    title: 'Development of a Customizable SaaS Platform for Enterprise Design Strategy Support',
    description: 'Developing a SaaS platform that delivers customizable generative AI technologies to support design strategy formulation for enterprises, including platform service design, cloud‑native infrastructure development, and real‑world operational validation for continuous improvement.',
    period: '2025.01 - 2025.03',
    role: 'LLM Service Design \& Proposal Writing',
    skills: ['LLM', 'Persona', 'RAG', 'LLMOps'],
    image: 'projects/AI-design.png',
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