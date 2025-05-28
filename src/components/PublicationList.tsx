import React from 'react';
import { PublicationItem, Author } from '../data/publications';

interface PublicationListProps {
  items: PublicationItem[];
}

const renderAuthors = (authors: Author[]) => (
  <>
    {authors.map((author, idx) => (
      <span key={author.name}>
        {author.homepage ? (
          <a
            href={author.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {author.isBold || author.isUnderline ? (
              <b>{author.isUnderline ? <u>{author.name}</u> : author.name}</b>
            ) : (
              author.name
            )}
          </a>
        ) : (
          author.isBold || author.isUnderline ? (
            <b>{author.isUnderline ? <u>{author.name}</u> : author.name}</b>
          ) : (
            author.name
          )
        )}
        {author.isEqualContributor && '*'}
        {idx < authors.length - 1 && ', '}
      </span>
    ))}
  </>
);

const PublicationList: React.FC<PublicationListProps> = ({ items }) => (
  <div className="space-y-10">
    {items.map((item, i) => (
      <div key={i}>
        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
          <div className="flex-1">
            {item.award && <div className="mb-1">{item.award}</div>}
            <div className="text-xl font-bold">{item.title}</div>
            <div className="text-gray-700 mb-1">{renderAuthors(item.authors)}</div>
            {item.equalContributionNote && (
              <div className="text-sm text-gray-500 mt-1">{item.equalContributionNote}</div>
            )}
            {item.links && (
              <div className="mt-2 flex flex-wrap gap-2">
                {item.links.map((link, lidx) => (
                  <a
                    key={lidx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm border border-blue-500 rounded px-2 py-1"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
          <div className="mt-2 md:mt-0 md:text-right min-w-[120px]">
            <div className="font-bold text-gray-800">{item.venue} {item.year}</div>
            <div className="text-gray-500">{item.status}</div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default PublicationList; 