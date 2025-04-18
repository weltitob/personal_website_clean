import { useEffect, useRef, useState, useCallback, memo } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const venetianImageRef = useRef<HTMLImageElement>(null);
  const counterRefs = useRef<HTMLSpanElement[]>([]);
  const lastScrollY = useRef(0);
  const lastMouseMoveTime = useRef(0);
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
  const handleMouseMove = useCallback((event: MouseEvent) => {
    const now = Date.now();
    if (now - lastMouseMoveTime.current > 50) { // 50ms throttle
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        setMousePosition({ x, y });
      }
      lastMouseMoveTime.current = now;
    }
  }, []);

  // Event listeners with throttling
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleMouseMove, handleScroll]);

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

  // Memoized parallax calculations to reduce recalculations
  const parallaxStyle = useCallback(() => {
    const moveX = mousePosition.x * 30 - 15;
    const moveY = mousePosition.y * 30 - 15;
    return {
      cardStyle: {
        transform: `perspective(1000px) rotateX(${moveY * 0.3}deg) rotateY(${-moveX * 0.3}deg) translateZ(10px)`,
        transition: mousePosition.x === 0 ? 'none' : 'transform 0.2s ease-out'
      },
      imageStyle: {
        transform: `perspective(1000px) rotateX(${moveY * 0.2}deg) rotateY(${-moveX * 0.2}deg) translateZ(5px)`,
        transition: mousePosition.x === 0 ? 'none' : 'transform 0.2s ease-out'
      }
    };
  }, [mousePosition.x, mousePosition.y]);

  const { cardStyle, imageStyle } = parallaxStyle();

  // Shape transform styles - calculated once and reused
  const shapeStyles = {
    shape1: { transform: `translate(${-scrollY * 0.1}px, ${-scrollY * 0.05}px)` },
    shape2: { transform: `translate(${scrollY * 0.15}px, ${scrollY * 0.08}px)` },
    shape3: { transform: `translate(${-scrollY * 0.08}px, ${scrollY * 0.12}px)` }
  };

  return (
    <>
      <section id="hero" ref={heroRef} className="hero-container overflow-hidden">
        
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
        
        <div className="content-wrapper relative z-10">
          {/* Hero badges removed */}
          
          <div className="hero-grid">
            {/* Profile visualization - WITH CARD BEHIND IMAGE */}
            <div ref={imageRef} className="hero-visual slide-up">
              {/* Info card positioned behind the image */}
              <div 
                className="profile-card-behind"
                style={cardStyle}
              >
                <div className="profile-card-inner">
                  <div className="profile-card-content">
                    <div className="profile-name">Tobias Welti</div>
                    <div className="profile-title">Fullstack Developer</div>
                    <div className="profile-location">
                      <span className="location-icon">📍</span> Stuttgart, Germany
                    </div>
                  </div>
                  <div className="tech-pills">
                    <span className="tech-pill">Python</span>
                    <span className="tech-pill">React</span>
                    <span className="tech-pill">Flutter</span>
                  </div>
                </div>
              </div>
              
              {/* Main image on top with mouse movement animation */}
              <div 
                className="venice-image-wrapper"
                style={imageStyle}
              >
                <picture>
                  <source srcSet="/images/optimized/tobi_profile.webp" type="image/webp" />
                  <img 
                    ref={venetianImageRef}
                    src="/images/tobi_profile.jpeg" 
                    alt="Tobi in Venedig" 
                    className="venice-image" 
                    width="800"
                    height="800"
                    loading="eager"
                    fetchPriority="high"
                  />
                </picture>
                <div className="image-overlay"></div>
              </div>
            </div>
            
            {/* Welcome text and headline - NOW ON THE RIGHT */}
            <div className="hero-text slide-up">
              <h1 ref={headingRef} className="hero-heading">
                <span className="welcome-text glitch-text" data-text="Fullstack Developer">Fullstack Developer</span>
                <span className="hero-tagline">creating <span className="text-gradient">innovative solutions</span></span>
              </h1>
              
              <p ref={textRef} className="hero-intro delay-100">
                Currently working as Junior Business Consultant at Boehringer Ingelheim.
                I build modern applications using the latest technologies, with a passion 
                for problem-solving, intuitive design, and AI-enhanced solutions that create impact.
              </p>
  
              <div className="hero-stats">
                <div className="hero-stat">
                  <span 
                    className="hero-stat-number counter" 
                    data-target="6" 
                    ref={el => el && (counterRefs.current[0] = el)}
                  >0</span>
                  <span className="hero-stat-label">Years Experience</span>
                </div>
                <div className="hero-stat">
                  <span 
                    className="hero-stat-number counter" 
                    data-target="53" 
                    ref={el => el && (counterRefs.current[1] = el)}
                  >0</span>
                  <span className="hero-stat-label">Technologies Used</span>
                </div>
                <div className="hero-stat">
                  <span 
                    className="hero-stat-number counter" 
                    data-target="16" 
                    ref={el => el && (counterRefs.current[2] = el)}
                  >0</span>
                  <span className="hero-stat-label">Projects Completed</span>
                </div>
              </div>
              
              <div className="hero-actions delay-200">
                <a ref={buttonRef} href="#journey" className="btn-glow-gradient">
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