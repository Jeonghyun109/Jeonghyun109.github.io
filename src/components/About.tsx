import React from 'react';
import { profile } from '@/data/profile';

const About = () => {
  const renderTextWithLinks = (text: string) => {
    // Split text into parts that match our link pattern
    const parts = text.split(/(Interactive Computing Lab)/g);
    
    return parts.map((part, index) => {
      if (part === 'Interactive Computing Lab') {
        return (
          <a
            key={index}
            href="https://ic.kaist.ac.kr/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 hover:underline"
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

  return (
    <div className="space-y-3">
      {profile.about.map((paragraph, index) => (
        <p key={index} className="text-gray-700">
          {renderTextWithLinks(paragraph)}
        </p>
      ))}
    </div>
  );
};

export default About; 