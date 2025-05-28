import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/">
            <Image src="/main_logo.png" alt="Logo" width={180} height={120} className="w-auto h-auto" />
          </Link>
          
          <div className="flex items-center space-x-4">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-4">
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">About Me</a>
              <a href="#news" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">News</a>
              <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Projects</a>
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