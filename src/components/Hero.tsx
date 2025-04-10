import { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const venetianImageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Update only the parallax effect mouse position
      if (heroRef.current) {
        const { left, top, width, height } = heroRef.current.getBoundingClientRect();
        const x = (event.clientX - left) / width;
        const y = (event.clientY - top) / height;
        setMousePosition({ x, y });
      }
    };
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
  
  // Add counter animation effect
  useEffect(() => {
    // Counter animation logic
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
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
    });
  }, []);

  // Calculate parallax effects based on mouse position and scroll
  const moveX = mousePosition.x * 30 - 15;
  const moveY = mousePosition.y * 30 - 15;
  // const parallaxY = scrollY * 0.4; // Uncomment if needed

  return (
    <section id="hero" ref={heroRef} className="hero-container overflow-hidden">
      
      {/* Animated background elements */}
      <div className="hero-shapes">
        <div className="hero-shape shape1" style={{ transform: `translate(${-scrollY * 0.1}px, ${-scrollY * 0.05}px)` }}></div>
        <div className="hero-shape shape2" style={{ transform: `translate(${scrollY * 0.15}px, ${scrollY * 0.08}px)` }}></div>
        <div className="hero-shape shape3" style={{ transform: `translate(${-scrollY * 0.08}px, ${scrollY * 0.12}px)` }}></div>
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
        <div className="hero-badges">
          <div className="tech-badge">
            <div className="tech-badge-icon"></div>
            <span className="tech-badge-text">Software Engineer</span>
          </div>
          <div className="tech-badge">
            <div className="tech-badge-icon"></div>
            <span className="tech-badge-text">Design Thinker</span>
          </div>
          <div className="tech-badge">
            <div className="tech-badge-icon"></div>
            <span className="tech-badge-text">Digital Craftsman</span>
          </div>
        </div>
        
        <div className="hero-grid">
          {/* Profile visualization - WITH CARD BEHIND IMAGE */}
          <div ref={imageRef} className="hero-visual slide-up">
            {/* Info card positioned behind the image */}
            <div 
              className="profile-card-behind"
              style={{
                transform: `perspective(1000px) rotateX(${moveY * 0.3}deg) rotateY(${-moveX * 0.3}deg) translateZ(10px)`,
                transition: mousePosition.x === 0 ? 'none' : 'transform 0.2s ease-out'
              }}
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
            
            {/* Main image on top */}
            <div className="venice-image-wrapper">
              <img 
                ref={venetianImageRef}
                src="/images/tobi_profile.jpeg" 
                alt="Tobi in Venedig" 
                className="venice-image" 
              />
              <div className="image-overlay"></div>
            </div>
            
            <div className="tech-icons">
              <div className="tech-icon" style={{ animationDelay: '0s' }}>
                <span className="tech-label">Python</span>
              </div>
              <div className="tech-icon" style={{ animationDelay: '0.3s' }}>
                <span className="tech-label">OpenAI</span>
              </div>
              <div className="tech-icon" style={{ animationDelay: '0.6s' }}>
                <span className="tech-label">Azure</span>
              </div>
              <div className="tech-icon" style={{ animationDelay: '0.9s' }}>
                <span className="tech-label">Flutter</span>
              </div>
              <div className="tech-icon" style={{ animationDelay: '1.2s' }}>
                <span className="tech-label">React</span>
              </div>
            </div>
          </div>
          
          {/* Welcome text and headline - NOW ON THE RIGHT */}
          <div className="hero-text slide-up">
            <h1 ref={headingRef} className="hero-heading">
              <span className="welcome-text glitch-text" data-text="Fullstack Developer">Fullstack Developer</span>
              <span className="hero-tagline">creating <span className="text-gradient">innovative solutions</span></span>
            </h1>
            
            <p ref={textRef} className="hero-intro delay-100">
              Bachelor of Science in Mobile Informatics from DHBW Friedrichshafen. 
              Currently working as Junior Business Consultant at Boehringer Ingelheim.
              I build modern applications using the latest technologies, with a passion 
              for clean code, intuitive design, and AI-enhanced solutions that solve real-world problems.
            </p>


            
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="hero-stat-number counter" data-target="3">0</span>
                <span className="hero-stat-label">Years Experience</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-number counter" data-target="1">0</span>
                <span className="hero-stat-label">Million Followers</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-number counter" data-target="10">0</span>
                <span className="hero-stat-label">Projects Completed</span>
              </div>
            </div>
            
            <div className="hero-actions delay-200">
              <a ref={buttonRef} href="#journey" className="btn-glow-gradient">
                <span className="btn-text">Discover My Work</span>
                <span className="btn-icon">→</span>
              </a>
              <a href="#contact" className="btn-outline">
                <span className="lucide mr-2">&#xe900;</span> Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



export default Hero;