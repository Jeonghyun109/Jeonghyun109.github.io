import React from 'react';

export interface NewsItem {
  date: string;
  content: React.ReactNode;
}

export default function NewsList({ items }: { items: NewsItem[] }) {
  return (
    <ul className="space-y-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-start">
          <span className="text-gray-400 font-semibold whitespace-nowrap mr-2">{item.date}:</span>
          <div className="text-gray-700 flex-1">
            {item.content}
          </div>
        </li>
      ))}
    </ul>
  );
} 