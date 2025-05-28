import React from 'react';

export interface Author {
  name: string;
  isBold?: boolean;
  isUnderline?: boolean;
  isEqualContributor?: boolean;
  homepage?: string;
}

export interface PublicationItem {
  title: string;
  authors: Author[];
  venue: string;
  year: string;
  status: string;
  award?: React.ReactNode;
  links?: { label: string; url: string }[];
  equalContributionNote?: string;
}

export const publications: PublicationItem[] = [
  {
    title: 'Affectstream: Kafka‑Based Real‑Time Affect Monitoring System Using Wearable Sensors',
    authors: [
      { name: 'Jeonghyun Kim', isBold: true, isUnderline: true },
      { name: 'Duri Lee' },
      { name: 'Uichin Lee', homepage: 'https://pure.kaist.ac.kr/en/persons/uichin-lee' },
    ],
    venue: '-',
    year: '',
    status: 'Preprint',
    links: [
      { label: 'Preprint', url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5193660' },
      { label: 'Github', url: 'https://github.com/KAIST-ICLab/Affectstream' },
    ],
  },
  {
    title: "HateBuffer: Safeguarding Content Moderators' Mental Well‑Being through Hate Speech Content Modification",
    authors: [
      { name: 'Subin Park', isEqualContributor: true, homepage: 'https://subinp.notion.site/Subin-Park-916e38a5c33947bf9a40363fc08a2b2e' },
      { name: 'Jeonghyun Kim', isBold: true, isUnderline: true, isEqualContributor: true },
      { name: 'Jeanne Choi', homepage: 'https://melodious-cabin-150.notion.site/Hello-I-m-Jeanne-Choi-13b8407f0d4980b495bac72d683b1814?pvs=4' },
      { name: 'Uichin Lee', homepage: 'https://pure.kaist.ac.kr/en/persons/uichin-lee' },
      { name: 'Joseph Seering', homepage: 'https://joseph.seering.org/' },
      { name: 'Sung‑Ju Lee', homepage: 'https://sites.google.com/site/wewantsj' },
    ],
    venue: '-',
    year: '',
    status: 'Under Review',
    equalContributionNote: '* These authors contributed equally to this work.',
  },
  // {
  //   title: '~~~',
  //   authors: React.createElement(
  //     React.Fragment,
  //     null,
  //     React.createElement('b', null, React.createElement('u', null, 'Jeonghyun Kim')),
  //     ', ~~~'
  //   ),
  //   venue: 'CHI',
  //   year: '2025',
  //   status: '',
  //   award: React.createElement('span', { className: 'inline-flex items-center bg-blue-100 text-blue-700 px-2 py-1 rounded font-semibold text-sm mr-2' }, '🏆 Best Paper Award (Top 1%)'),
  //   links: [
  //     { label: 'PDF', url: '#' },
  //     { label: 'Project page', url: '#' },
  //     { label: 'Demo video', url: '#' },
  //   ],
  // },
]; 