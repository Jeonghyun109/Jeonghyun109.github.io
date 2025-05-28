import React from 'react';

export interface AwardItem {
  title: string;
  description: string;
  issuer: string;
  date: string;
}

export default function AwardList({ items }: { items: AwardItem[] }) {
  return (
    <div className="space-y-10">
      {items.map((item, i) => (
        <div key={i} className="flex flex-col md:flex-row md:justify-between md:items-start">
          <div className="flex-1">
            <div className="text-lg font-bold text-gray-900">{item.title}</div>
            <div className="text-gray-700">{item.description}</div>
          </div>
          <div className="mt-2 md:mt-0 md:text-right min-w-[180px]">
            <div className="italic text-gray-600">{item.issuer}</div>
            <div className="text-gray-500">{item.date}</div>
          </div>
        </div>
      ))}
    </div>
  );
} 