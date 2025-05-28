import React from 'react';

export interface EducationItem {
  school: string;
  degree: string;
  location: string;
  period: string;
  extra?: React.ReactNode;
}

export default function EducationList({ items }: { items: EducationItem[] }) {
  return (
    <div className="space-y-8">
      {items.map((item, i) => (
        <div key={i} className="flex flex-col md:flex-row md:justify-between md:items-baseline">
          <div>
            <div className="text-lg font-bold text-gray-900">
              {item.school}
            </div>
            <div className="text-gray-700">{item.degree}</div>
            {item.extra && <div>{item.extra}</div>}
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