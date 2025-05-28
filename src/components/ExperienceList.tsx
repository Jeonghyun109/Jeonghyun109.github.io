import React from 'react';

export interface ExperienceItem {
  title: string;
  position: string;
  location: string;
  period: string;
  bullets: React.ReactNode[];
  advisor?: React.ReactNode;
}

export default function ExperienceList({ items }: { items: ExperienceItem[] }) {
  return (
    <div className="space-y-10">
      {items.map((item, i) => (
        <div key={i} className="flex flex-col md:flex-row md:justify-between md:items-start">
          <div className="flex-1">
            <div className="text-lg font-bold text-gray-900">{item.title}</div>
            <div className="text-gray-700">{item.position}</div>
            <ul className="list-disc ml-5 text-gray-700 mt-1 space-y-1">
              {item.bullets.map((b, j) => (
                <li key={j} className="mb-1">{b}</li>
              ))}
            </ul>
            {item.advisor && <div className="text-gray-600 mt-1">{item.advisor}</div>}
          </div>
          <div className="mt-2 md:mt-0 md:text-right min-w-[180px]">
            <div className="italic text-gray-600">{item.location}</div>
            <div className="text-gray-500">{item.period}</div>
          </div>
        </div>
      ))}
    </div>
  );
} 