import { useState, useEffect } from 'react';

const Header = () => {
  const [activeSection, setActiveSection] = useState<string>('');
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      const headerHeight = document.getElementById('main-header')?.offsetHeight || 60;
      
      let bestMatch: { id: string | null, ratio: number, top: number } = { id: null, ratio: 0, top: Infinity };
      
      sections.forEach((section) => {
        const id = `#${section.getAttribute('id')}`;
        const rect = section.getBoundingClientRect();
        const top = rect.top;
        const height = rect.height;
        const visiblePercentage = Math.max(0, Math.min(height, window.innerHeight - top)) / height;
        
        // Condition: Section top is near or above the bottom of the header
        // and it has the highest intersection ratio among eligible sections.
        if (top <= headerHeight + 100 && visiblePercentage > bestMatch.ratio) {
          bestMatch = { id: id, ratio: visiblePercentage, top: top };
        }
        // Also consider sections that are fully visible below the header
        else if (top > headerHeight && top < window.innerHeight * 0.5 && visiblePercentage > bestMatch.ratio * 0.5 && top < bestMatch.top) {
          // Prioritize sections closer to the top if multiple are visible
          if (bestMatch.id === null || top < bestMatch.top) {
            bestMatch = { id: id, ratio: visiblePercentage, top: top };
          }
        }
      });

      // If scrolled near top, clear active state
      if (window.scrollY < window.innerHeight * 0.3) {
        setActiveSection('');
        return;
      }

      if (bestMatch.id) {
        setActiveSection(bestMatch.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header id="main-header">
        <div className="content-wrapper flex justify-between items-center">
            <a href="#" className="text-xl font-bold text-gradient hover:opacity-80 transition duration-300">Tobi</a>
            <nav id="main-nav" className="flex flex-wrap space-x-1 md:space-x-2 text-xs sm:text-sm">
                <a href="#journey" className={`nav-link ${activeSection === '#journey' ? 'active' : ''}`}>Journey</a>
                <a href="#skills" className={`nav-link ${activeSection === '#skills' ? 'active' : ''}`}>Skills</a>
                <a href="#project-timeline" className={`nav-link ${activeSection === '#project-timeline' ? 'active' : ''}`}>Projects</a>
                <a href="#cv-timeline" className={`nav-link ${activeSection === '#cv-timeline' ? 'active' : ''}`}>Resume</a>
                <a href="#contact" className={`nav-link ${activeSection === '#contact' ? 'active' : ''}`}>Contact</a>
            </nav>
        </div>
    </header>
  );
};

export default Header;