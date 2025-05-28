import React, { useState } from 'react';

interface IconButtonProps {
  icon: React.ReactNode;
  tooltipText: string;
  onClick?: () => void;
  href?: string;
  hoverColor?: string;
  showCopiedTooltip?: boolean;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  tooltipText,
  onClick,
  href,
  hoverColor = 'hover:text-blue-600',
  showCopiedTooltip = false,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = async () => {
    if (onClick) {
      await onClick();
      if (showCopiedTooltip) {
        setShowTooltip(true);
        setTimeout(() => setShowTooltip(false), 2000);
      }
    }
  };

  const buttonContent = (
    <button
      onClick={handleClick}
      className={`text-gray-600 ${hoverColor} transition-colors`}
      aria-label={tooltipText}
    >
      {icon}
    </button>
  );

  const linkContent = href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-gray-600 ${hoverColor} transition-colors`}
      aria-label={tooltipText}
    >
      {icon}
    </a>
  ) : null;

  return (
    <div className="relative group">
      {href ? linkContent : buttonContent}
      {showTooltip && showCopiedTooltip && (
        <div className="z-10 absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Copied!
        </div>
      )}
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        {tooltipText}
      </div>
    </div>
  );
};

export default IconButton; 