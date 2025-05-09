import { useEffect, useRef, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Journey from './components/Journey'
import Skills from './components/Skills'
import TechMarquee from './components/TechMarquee'
import PersonalProjects from './components/PersonalProjects'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  // Custom cursor state and refs
  const [, setIsHovering] = useState(false);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Log to console on component mount
    console.log("%cTobi :: Interactive Journey V2 :: Systems Go", "color: #ffffff; font-size: 1.2em; font-weight: bold; font-family: 'Montserrat', sans-serif;");

    // Custom cursor logic with throttling
    let lastMouseMoveTime = 0;
    let rafId: number | null = null;

    const handleMouseMove = (event: MouseEvent) => {
      const now = Date.now();
      if (now - lastMouseMoveTime < 16) { // ~60fps throttle
        return;  
      }
      lastMouseMoveTime = now;

      // Use requestAnimationFrame to avoid layout thrashing
      if (rafId) {
        cancelAnimationFrame(rafId);
      }

      // Only update cursor on desktop devices
      if (window.innerWidth > 768) {
        rafId = requestAnimationFrame(() => {
          const { clientX, clientY } = event;

          if (cursorRingRef.current && cursorDotRef.current) {
            // Use transform instead of left/top for better performance
            cursorRingRef.current.style.transform = `translate(${clientX}px, ${clientY}px)`;
            cursorDotRef.current.style.transform = `translate(${clientX}px, ${clientY}px)`;
          }
        });
      }
    };

    // Detect hoverable elements with debouncing
    let hoverTimeoutId: number;
    const handleMouseOver = (event: MouseEvent) => {
      clearTimeout(hoverTimeoutId);

      hoverTimeoutId = window.setTimeout(() => {
        const target = event.target as HTMLElement;
        const isHoverable = 
          target.tagName === 'A' || 
          target.tagName === 'BUTTON' || 
          target.closest('a') || 
          target.closest('button') ||
          target.classList.contains('hoverable');

        if (isHoverable && cursorRingRef.current) {
          setIsHovering(true);
          cursorRingRef.current.classList.add('cursor-hover');
        } else {
          setIsHovering(false);
          if (cursorRingRef.current) {
            cursorRingRef.current.classList.remove('cursor-hover');
          }
        }
      }, 50); // 50ms debounce
    };

    // Hide cursor when inactive
    let inactivityTimeout: number;
    const hideCursor = () => {
      if (cursorRingRef.current && cursorDotRef.current) {
        cursorRingRef.current.style.opacity = '0';
        cursorDotRef.current.style.opacity = '0';
      }
    };

    const showCursor = () => {
      if (cursorRingRef.current && cursorDotRef.current) {
        cursorRingRef.current.style.opacity = '1';
        cursorDotRef.current.style.opacity = '1';
      }

      clearTimeout(inactivityTimeout);
      inactivityTimeout = window.setTimeout(hideCursor, 5000);
    };

    // Only apply custom cursor on desktop devices
    if (window.innerWidth > 768) {
      // Hide native cursor on all elements
      document.documentElement.style.cursor = 'none';

      // Add global style to override cursor on all elements
      const styleElement = document.createElement('style');
      styleElement.textContent = `
        * {
          cursor: none !important;
        }
        .cursor-ring, .cursor-dot {
          transform: translate(-50%, -50%); /* Initial position correction */
          top: 0;
          left: 0;
          will-change: transform; /* Hint for browser optimization */
        }
      `;
      document.head.appendChild(styleElement);
    } else {
      // Hide custom cursor elements on mobile
      if (cursorRingRef.current) cursorRingRef.current.style.display = 'none';
      if (cursorDotRef.current) cursorDotRef.current.style.display = 'none';
    }

    // Add event listeners with passive flag for better scrolling performance
    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mousemove', showCursor, { passive: true });

    // Show cursor initially
    showCursor();

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      clearTimeout(hoverTimeoutId);
      clearTimeout(inactivityTimeout);

      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mousemove', showCursor);
      document.documentElement.style.cursor = 'auto';

      // Remove the global style element
      const styleElement = document.querySelector('style');
      if (styleElement && styleElement.textContent && styleElement.textContent.includes('cursor: none')) {
        styleElement.remove();
      }
    };
  }, []);

  return (
    <>
      {/* Custom cursor elements */}
      <div className="cursor-ring" ref={cursorRingRef}></div>
      <div className="cursor-dot" ref={cursorDotRef}></div>

      <Header />

      <main>
        <Hero />
        <Skills />
        <TechMarquee />
        <Journey />
        <PersonalProjects />
        <Timeline />
        <Contact />
      </main>

      <Footer />
      {/* Modals removed */}
    </>
  )
}

export default App