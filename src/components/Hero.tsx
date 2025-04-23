import { useEffect, useRef, useState, useCallback, memo } from 'react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const venetianImageRef = useRef<HTMLImageElement>(null);
  const counterRefs = useRef<HTMLSpanElement[]>([]);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  // Throttled scroll handler
  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      requestAnimationFrame(() => {
        if (Math.abs(window.scrollY - lastScrollY.current) > 5) {
          setScrollY(window.scrollY);
          lastScrollY.current = window.scrollY;
        }
        ticking.current = false;
      });
      ticking.current = true;
    }
  }, []);

  // Throttled mouse move handler
  // Mouse move handler removed for parallax effect

  // Event listeners with throttling
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const elements = [
      headingRef.current, 
      textRef.current, 
      imageRef.current, 
      buttonRef.current,
      venetianImageRef.current
    ].filter(Boolean);
    
    elements.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => {
      elements.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);
  
  // Optimized counter animation using refs instead of DOM queries
  useEffect(() => {
    const counters = counterRefs.current;
    if (!counters.length) return;

    const runCounters = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        
        const counter = entry.target as HTMLSpanElement;
        const target = parseInt(counter.getAttribute('data-target') || '0', 10);
        const duration = 2000; // ms
        const step = Math.ceil(target / (duration / 16)); // 60fps approx
        
        let current = 0;
        const updateCounter = () => {
          current += step;
          if (current < target) {
            counter.textContent = current.toString();
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target.toString();
          }
        };
        
        updateCounter();
        counterObserver.unobserve(counter); // Only animate once
      });
    };

    const counterObserver = new IntersectionObserver(runCounters, { threshold: 0.1 });
    counters.forEach(counter => {
      if (counter) counterObserver.observe(counter);
    });

    return () => {
      counters.forEach(counter => {
        if (counter) counterObserver.unobserve(counter);
      });
    };
  }, []);

  // Shape transform styles without parallax

  // Shape transform styles - calculated once and reused
  const shapeStyles = {
    shape1: { transform: `translate(${-scrollY * 0.1}px, ${-scrollY * 0.05}px)` },
    shape2: { transform: `translate(${scrollY * 0.15}px, ${scrollY * 0.08}px)` },
    shape3: { transform: `translate(${-scrollY * 0.08}px, ${scrollY * 0.12}px)` }
  };

  return (
    <>
      <section id="hero" ref={heroRef} className="hero-container">
        
        {/* Animated background elements */}
        <div className="hero-shapes">
          <div className="hero-shape shape1" style={shapeStyles.shape1}></div>
          <div className="hero-shape shape2" style={shapeStyles.shape2}></div>
          <div className="hero-shape shape3" style={shapeStyles.shape3}></div>
          <div className="hero-shape shape4"></div>
        </div>
        
        {/* Animated grid lines */}
        <div className="grid-lines">
          <div className="grid-line"></div>
          <div className="grid-line"></div>
          <div className="grid-line"></div>
          <div className="grid-line"></div>
          <div className="grid-line"></div>
        </div>
        
        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <div className="scroll-indicator-text">Scroll</div>
          <div className="scroll-indicator-line">
            <div className="scroll-indicator-dot"></div>
          </div>
        </div>
        
        <div className="content-wrapper relative z-10">
          {/* Hero badges removed */}
          
          <div className="hero-grid">
            {/* Profile visualization - WITH CARD BEHIND IMAGE */}
            <div ref={imageRef} className="hero-visual slide-up">
              {/* Main image on top with mouse movement animation */}
              <div 
                className="venice-image-wrapper"
              >
                <picture>
                  <img 
                    ref={venetianImageRef}
                    src="/images/tobi_artstyle_new.png" 
                    alt="Tobi art style illustration" 
                    className="venice-image" 
                    width="800"
                    height="800"
                    loading="eager"
                    fetchPriority="high"
                  />
                </picture>
                <div className="image-overlay"></div>
              </div>
              
              {/* Info card positioned behind the image */}
              <div 
                className="profile-card-behind"
              >
                <div className="profile-card-inner">
                  <div className="profile-card-content">
                    <div className="profile-name">Tobias Welti</div>
                    <div className="profile-title">Fullstack-Developer</div>
                    <div className="profile-location">
                      <span className="location-icon">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                      </span>
                      Stuttgart, Germany
                    </div>
                    <div className="profile-contact">
                      <div className="profile-email">
                        <span className="contact-icon">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                          </svg>
                        </span>
                        tobias.welti@outlook.com
                      </div>
                      <div className="profile-phone">
                        <span className="contact-icon">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                          </svg>
                        </span>
                        +49 17636384058
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Welcome text and headline - NOW ON THE RIGHT */}
            <div className="hero-text slide-up">
              <h1 ref={headingRef} className="hero-heading">
                <span className="welcome-text glitch-text" data-text="Fullstack-Developer">Fullstack-Developer</span>
                <span className="hero-tagline">creating <span className="text-gradient">a meaningful impact</span></span>
              </h1>
              
              <p ref={textRef} className="hero-intro delay-100">
                Business Consultant in the AI space at Boehringer Ingelheim. Building modern applications 
                with a focus on intuitive design and AI-enhanced solutions that deliver measurable business outcomes.
              </p>
  
              <div className="hero-stats">
                <div className="hero-stat">
                  <span 
                    className="hero-stat-number counter" 
                    data-target="6" 
                    ref={(el) => {
                      if (el) counterRefs.current[0] = el;
                      return undefined;
                    }}
                  >0</span>
                  <span className="hero-stat-label">Years Experience</span>
                </div>
                <div className="hero-stat">
                  <span 
                    className="hero-stat-number counter" 
                    data-target="25" 
                    ref={(el) => {
                      if (el) counterRefs.current[1] = el;
                      return undefined;
                    }}
                  >0</span>
                  <span className="hero-stat-label">Core Technologies</span>
                </div>
                <div className="hero-stat">
                  <span 
                    className="hero-stat-number counter" 
                    data-target="20" 
                    ref={(el) => {
                      if (el) counterRefs.current[2] = el;
                      return undefined;
                    }}
                  >0</span>
                  <span className="hero-stat-label">Enterprise Projects</span>
                </div>
              </div>
              
              <div className="hero-actions delay-200">
                <a ref={buttonRef} href="#skills" className="btn-glow-gradient">
                  <span className="btn-text">Discover My Work</span>
                  <span className="btn-icon">→</span>
                </a>
                <a href="mailto:tobias.welti@outlook.com" className="btn-outline">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default memo(Hero);