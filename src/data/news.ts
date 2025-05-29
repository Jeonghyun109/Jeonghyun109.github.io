import React from 'react';

export interface NewsItem {
  date: string;
  content: React.ReactNode;
}

export const news: NewsItem[] = [
  {
    date: '2025.04',
    content: React.createElement(React.Fragment, null, 'Attended ', React.createElement('a', { href: 'https://chi2025.acm.org/', className: 'hover:text-blue-600 hover:underline', target: '_blank', rel: 'noopener noreferrer' }, 'CHI 2025'), ' in Yokohama, Japan ✈️'),
  },
  {
    date: '2025.01',
    content: React.createElement(React.Fragment, null, 'Started to organize ', 
      React.createElement('a', { href: 'https://hci.kaist.ac.kr/', className: 'hover:text-blue-600 hover:underline', target: '_blank', rel: 'noopener noreferrer' }, 'HCI@KAIST'), ' Social Meeting'),
  },
  {
    date: '2024.07',
    content: React.createElement(React.Fragment, null, 'Visited ', React.createElement('a', { href: 'https://2024summer.sigchi.kr/', className: 'hover:text-blue-600 hover:underline', target: '_blank', rel: 'noopener noreferrer' }, 'SIGCHI Korea Local Chapter Summer Event'), ' in Busan'),
  },
  {
    date: '2024.07',
    content: React.createElement(React.Fragment, null, 'Received a NRF grant for my master\'s research 🎉'),
  },
  {
    date: '2024.02',
    content: React.createElement(React.Fragment, null, 'Started a Master\’s Degree in School of Computing from KAIST'),
  },
  {
    date: '2024.02',
    content: React.createElement(React.Fragment, null, 'Earned a Bachelor\’s Degree in School of Computing (Minor in Electrical Engineering) from KAIST'),
  },
];