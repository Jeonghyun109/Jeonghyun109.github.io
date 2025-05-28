import React from 'react';
import { ProjectItem } from '../data/projects';

export default function ProjectList({ items }: { items: ProjectItem[] }) {
  return (
    <div className="space-y-8">
      {items.map((item, i) => (
        <div key={i} className="bg-white border border-gray-200 rounded-2xl shadow p-6 flex flex-col md:flex-row gap-6">
          {item.image && (
            <div className="md:w-1/3 flex-shrink-0 flex items-center justify-center">
              <img src={item.image} alt={item.title as string} className="rounded-lg object-fill w-full" />
            </div>
          )}
          <div className="flex-1">
            <div className="text-xl font-bold">{item.title}</div>
            <div className="text-gray-500 text-right mb-2">{item.period}</div>
            <div className="text-gray-700 mb-2">{item.description}</div>
            <div className="flex items-center gap-2 mt-4">
              <span className="font-semibold text-gray-500">Contribution:</span>
              <span className="text-gray-700">{item.role}</span>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {item.skills.map(skill => (
                <span key={skill} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">{skill}</span>
              ))}
            </div>
            {item.extra && <div className="mt-2">{item.extra}</div>}
          </div>
        </div>
      ))}
    </div>
  );
} 