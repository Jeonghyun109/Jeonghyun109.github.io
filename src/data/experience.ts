import React from 'react';

export interface ExperienceItem {
  title: string;
  position: string;
  location: string;
  period: string;
  bullets: React.ReactNode[];
  advisor?: React.ReactNode;
}

export const experience: ExperienceItem[] = [
  {
    title: 'KAIST Interactive Computing Lab',
    position: 'Graduate Student, Advised by Uichin Lee',
    location: 'Daejeon, Korea',
    period: '2024.02 - Present',
    bullets: [
      'Research on stress management systems that enhance self-awareness through wearable and mobile sensing',
      'Research a data streaming platform to support real-time affect monitoring using wearable sensor data',
    ],
    advisor: React.createElement(React.Fragment, null, 'Advisor: Prof.Uichin Lee, ', React.createElement('span', { className: 'italic' }, 'KAIST School of Science')),
  },
  {
    title: 'KAIST HCI Lab',
    position: 'Undergraduate Individual Research',
    location: 'Daejeon, Korea',
    period: '2021.06 - 2021.12',
    bullets: [
      React.createElement(React.Fragment, null,
        'Research on improving issues caused by the lack of haptic feedback in AR environments',
        React.createElement('ul', { className: 'list-disc ml-6' },
          React.createElement('li', null, 'Studied the effectiveness of haptic feedback in GUI button interactions within AR environments'),
          React.createElement('li', null, 'Explored interaction design of depth-funneling gloves in AR environments'),
          React.createElement('li', null, 'Researched enhancing haptic feedback of depth-funneling gloves')
        )
      ),
    ],
    advisor: React.createElement(React.Fragment, null, 'Advisor: Prof.Geehyuk Lee, ', React.createElement('span', { className: 'italic' }, 'KAIST School of Computing')),
  },
  {
    title: 'ReDWit, Development Team',
    position: 'Internship',
    location: 'Daejeon, Korea',
    period: '2022.09 - 2022.12',
    bullets: [
      'Contributed to the GOONO 3.0 update, an electronic lab notebook service',
      'Integrated React Query into the project',
    ],
  },
  {
    title: 'ReDWit, Development Team',
    position: 'CUop Internship',
    location: 'Daejeon, Korea',
    period: '2021.12 - 2022.02',
    bullets: [
      'Developed an in-house attendance management web service',
      'Redesigned and improved a Slack bot',
      'Implemented update features and fixed bugs for the electronic lab notebook service "GOONO"',
    ],
  },
]; 