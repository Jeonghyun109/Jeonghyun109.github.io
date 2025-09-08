import React from 'react';
import Image from 'next/image';

const scrollToSection = (sectionId: string) => {
  const start = window.pageYOffset;
  const duration = 500;
  let startTime: number | null = null;
  const headerHeight = 64; // Height of the header (h-16 = 64px)

  const easeOutCubic = (t: number): number => {
    return 1 - Math.pow(1 - t, 3);
  };

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    
    const target = sectionId === 'about' ? 0 : 
      (document.getElementById(sectionId)?.offsetTop ?? 0) - headerHeight - 32;
    const distance = target - start;
    
    window.scrollTo(0, start + (distance * easeOutCubic(progress)));

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};

const Header = () => {

  const [activeSection, setActiveSection] = React.useState<string>('about');

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId);
    setActiveSection(sectionId);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'news', 'projects'];
      const headerHeight = 64;
      const scrollY = window.scrollY + headerHeight + 40;
      let currentSection = 'about';
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          if (scrollY >= el.offsetTop) {
            currentSection = section;
          }
        }
      }
      setActiveSection(currentSection);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a 
            href="#about" 
            onClick={(e) => handleNavClick(e, 'about')}
            className="cursor-pointer"
          >
            <Image src="/main_logo.png" alt="Logo" width={180} height={120} className="h-auto" />
          </a>
          
          <div className="flex items-center space-x-4">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-4">
              <a
                href="#news"
                onClick={(e) => handleNavClick(e, 'news')}
                className={`transition-colors ${
                  activeSection === 'news'
                    ? 'font-bold text-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                News
              </a>
              <a
                href="#projects"
                onClick={(e) => handleNavClick(e, 'projects')}
                className={`transition-colors ${
                  activeSection === 'projects'
                    ? 'font-bold text-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Projects
              </a>
            </nav>

            {/* CV Button - Always visible */}
            <a
              href="/Jeonghyun_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              View CV
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 