import { useState, useEffect } from 'react';

const Header = () => {
  const [activeSection, setActiveSection] = useState<string>('');
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  
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

  // Handle mobile menu toggling and smooth scrolling
  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setMenuOpen(false);
    
    // Get the target section element
    const sectionElement = document.getElementById(sectionId);
    
    if (sectionElement) {
      // Get header height to offset scrolling
      const headerHeight = document.getElementById('main-header')?.offsetHeight || 60;
      
      // Calculate the position to scroll to
      const offsetTop = sectionElement.offsetTop - headerHeight;
      
      // Smooth scroll to the section
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      
      // Update the URL hash
      window.history.pushState(null, '', `#${sectionId}`);
      setActiveSection(`#${sectionId}`);
    }
  };
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const mobileMenu = document.querySelector('.mobile-menu-fullscreen');
      const hamburgerButton = document.querySelector('.mobile-menu-button');
      
      if (menuOpen && 
          mobileMenu && 
          hamburgerButton && 
          !mobileMenu.contains(target) && 
          !hamburgerButton.contains(target)) {
        setMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    
    // Prevent body scrolling when menu is open
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header id="main-header">
        <div className="content-wrapper flex justify-between items-center">
            <a href="#" className="logo-container hover:opacity-90 transition duration-300">
              <img src="/images/logo/TW_logo_nobg.png" alt="TW Logo" className="logo-image white-logo" width="45" height="45" />
            </a>
            
            {/* Hamburger button for mobile */}
            <button 
              className="mobile-menu-button"
              onClick={() => setMenuOpen(!menuOpen)}
              onTouchEnd={(e) => {
                e.preventDefault();
                setMenuOpen(!menuOpen);
              }}
              aria-label="Toggle menu"
            >
              <div className={`hamburger-icon ${menuOpen ? 'open' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
            
            {/* Desktop navigation */}
            <nav id="main-nav" className="desktop-nav">
                <a href="#skills" className={`nav-link ${activeSection === '#skills' ? 'active' : ''}`}
                   onClick={(e) => handleNavLinkClick(e, 'skills')}>Skills</a>
                <a href="#education-timeline" className={`nav-link ${activeSection === '#education-timeline' ? 'active' : ''}`}
                   onClick={(e) => handleNavLinkClick(e, 'education-timeline')}>Education</a>
                <a href="#project-timeline" className={`nav-link ${activeSection === '#project-timeline' ? 'active' : ''}`}
                   onClick={(e) => handleNavLinkClick(e, 'project-timeline')}>Projects</a>
                <a href="#cv-timeline" className={`nav-link ${activeSection === '#cv-timeline' ? 'active' : ''}`}
                   onClick={(e) => handleNavLinkClick(e, 'cv-timeline')}>Personal</a>
                <a href="#contact" className={`nav-link ${activeSection === '#contact' ? 'active' : ''}`}
                   onClick={(e) => handleNavLinkClick(e, 'contact')}>Contact</a>
            </nav>
            
            {/* Background overlay for mobile menu */}
            <div 
              className={`mobile-menu-overlay ${menuOpen ? 'active' : ''}`} 
              onClick={handleNavLinkClick}
            ></div>
            
            {/* Mobile navigation - fullscreen */}
            <div className={`mobile-menu-fullscreen ${menuOpen ? 'active' : ''}`}>
              <nav className="mobile-nav-fullscreen">
                <div className="mobile-nav-item">
                  <a href="#skills" 
                     className={`nav-link ${activeSection === '#skills' ? 'active' : ''}`}
                     onClick={(e) => handleNavLinkClick(e, 'skills')}>
                     Skills
                  </a>
                </div>
                <div className="mobile-nav-item">
                  <a href="#education-timeline" 
                     className={`nav-link ${activeSection === '#education-timeline' ? 'active' : ''}`}
                     onClick={(e) => handleNavLinkClick(e, 'education-timeline')}>
                     Education
                  </a>
                </div>
                <div className="mobile-nav-item">
                  <a href="#project-timeline" 
                     className={`nav-link ${activeSection === '#project-timeline' ? 'active' : ''}`}
                     onClick={(e) => handleNavLinkClick(e, 'project-timeline')}>
                     Projects
                  </a>
                </div>
                <div className="mobile-nav-item">
                  <a href="#cv-timeline" 
                     className={`nav-link ${activeSection === '#cv-timeline' ? 'active' : ''}`}
                     onClick={(e) => handleNavLinkClick(e, 'cv-timeline')}>
                     Personal
                  </a>
                </div>
                <div className="mobile-nav-item">
                  <a href="#contact" 
                     className={`nav-link ${activeSection === '#contact' ? 'active' : ''}`}
                     onClick={(e) => handleNavLinkClick(e, 'contact')}>
                     Contact
                  </a>
                </div>
              </nav>
            </div>
        </div>
    </header>
  );
};

export default Header;